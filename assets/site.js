(function(){
  "use strict";
  var fmt=function(n){ return "S$"+Math.round(n).toLocaleString("en-SG"); };
  var fmtm=function(n){ return "S$"+(n/1e6).toFixed(2)+"m"; };
  var $=function(id){ return document.getElementById(id); };

  /* Buyer's Stamp Duty (residential, IRAS rates from 15 Feb 2023) */
  function bsd(p){
    var tiers=[[180000,.01],[180000,.02],[640000,.03],[500000,.04],[1500000,.05],[Infinity,.06]], left=p, d=0;
    for(var i=0;i<tiers.length&&left>0;i++){ var a=Math.min(left,tiers[i][0]); d+=a*tiers[i][1]; left-=a; }
    return d;
  }
  /* ABSD (IRAS rates from 27 Apr 2023) */
  var ABSD={sc:[0,.20,.30],pr:[.05,.30,.35],fr:[.60,.60,.60],en:[.65,.65,.65]};
  function absd(p,prof,c){ var r=ABSD[prof]||ABSD.sc; return p*r[Math.min(c,2)]; }

  var STAGES=[["Option fee (on booking)",5],["Exercise of S&P (within 8 weeks of OTP)",15],["Foundation work completed",10],
    ["Reinforced concrete framework",10],["Partition walls",5],["Roofing / ceiling",5],["Doors, windows, electrical wiring, plumbing",5],
    ["Car park, roads and drains",5],["Temporary Occupation Permit (TOP)",25],["Certificate of Statutory Completion (CSC)",15]];
  var SIZES={"1br":[474,474],"2br":[581,710],"3br":[807,1001],"4br":[1076,1356],"5br":[1561,1561]};
  var TYPES=[["1 Bedroom",474,3],["2 Bedroom",581,471],["3 Bedroom",807,315],["4 Bedroom",1076,240],["5 Bedroom",1561,27]];

  function estimator(){
    var t=$("est-type"),psf=$("est-psf"),sz=$("est-size"); if(!t) return;
    function run(){
      var r=SIZES[t.value]; sz.min=r[0]; sz.max=r[1]; if(+sz.value<r[0]||+sz.value>r[1]) sz.value=r[0];
      $("est-size-out").textContent=(+sz.value).toLocaleString("en-SG")+" sq ft";
      var p=(+sz.value)*(+psf.value); $("est-psf-out").textContent="S$"+(+psf.value).toLocaleString("en-SG")+" psf";
      var b=bsd(p),a=absd(p,$("est-profile").value,+$("est-count").value);
      $("est-price").textContent=fmt(p); $("est-bsd").textContent=fmt(b); $("est-absd").textContent=fmt(a);
      $("est-total").textContent=fmt(p+b+a); $("est-cash").textContent=fmt(p*.1+b+a);
      var h=""; STAGES.forEach(function(s){ h+="<tr><td>"+s[0]+"</td><td class='num'>"+s[1]+"%</td><td class='num'>"+fmt(p*s[1]/100)+"</td></tr>"; });
      $("pps-body").innerHTML=h;
    }
    ["est-type","est-psf","est-size","est-profile","est-count"].forEach(function(id){ var el=$(id); el.addEventListener("input",run); el.addEventListener("change",run); });
    run();
  }

  /* Affordability: TDSR 55% at 4% stress rate, LTV 75%, tenure to age 65 (max 30y), 25% down incl. BSD from funds */
  function afford(){
    var f=$("aff-form"); if(!f) return;
    function pv(rate,n,pmt){ return pmt*(1-Math.pow(1+rate,-n))/rate; }
    function run(){
      var inc=+$("aff-income").value||0, debt=+$("aff-debt").value||0, funds=+$("aff-funds").value||0, age=+$("aff-age").value||35, psf=+$("aff-psf").value||2725;
      var years=Math.max(5,Math.min(30,65-age)), pmt=Math.max(0,.55*inc-debt);
      var loan=pv(.04/12,years*12,pmt), byLoan=loan/.75;
      var lo=0,hi=2e7; for(var i=0;i<60;i++){ var mid=(lo+hi)/2; if(.25*mid+bsd(mid)<=funds) lo=mid; else hi=mid; }
      var byFunds=lo, max=Math.min(byLoan,byFunds);
      $("aff-max").textContent=fmtm(max);
      $("aff-limit").textContent= byLoan<byFunds ? "Your income (TDSR) is the limit. Loan up to about "+fmtm(Math.min(loan,max*.75))+" over "+years+" years." : "Your cash and CPF for the 25% downpayment and stamp duty is the limit.";
      var h="";
      TYPES.forEach(function(t){ var p=t[1]*psf, ok=p<=max;
        h+="<div class='mrow'><span>"+(ok?"<b class='yes'>✓</b> ":"<b class='no'>✕</b> ")+t[0]+" <span class='muted'>· "+t[2]+" units</span></span><b>from "+fmtm(p)+"</b></div>"; });
      $("aff-list").innerHTML=h;
      var big=Math.floor(max/psf); $("aff-size").textContent= big>=474 ? "Up to about "+big.toLocaleString("en-SG")+" sq ft at S$"+psf.toLocaleString("en-SG")+" psf." : "Below the smallest unit at this psf.";
      var b=$("aff-budget"); if(b) b.value=fmtm(max);
    }
    f.addEventListener("input",run); f.addEventListener("submit",function(e){e.preventDefault();run();}); run();
  }

  /* Preview countdown */
  function countdown(){
    var els=document.querySelectorAll("[data-countdown]"); if(!els.length) return;
    els.forEach(function(el){
      var t=new Date(el.getAttribute("data-countdown")).getTime(), d=Math.ceil((t-Date.now())/864e5);
      if(d>1) el.textContent="Preview planned in "+d+" days";
      else if(d>=0) el.textContent="Preview planned this week";
    });
  }

  /* Forms: prefill page source; in the artifact preview, show a note instead of submitting */
  function forms(){
    document.querySelectorAll("form.lead").forEach(function(f){
      var src=f.querySelector("input[name=page]"); if(src && !src.value) src.value=location.pathname;
      if(f.hasAttribute("data-preview")){
        f.addEventListener("submit",function(e){ e.preventDefault(); var m=f.querySelector(".formmsg");
          if(m){ m.hidden=false; m.textContent="Preview only: on the live site this goes straight to Jack through Netlify Forms."; } });
      }
    });
    try{ var q=new URLSearchParams(location.search), b=q.get("budget"), el=$("f-budget"); if(b&&el) el.value=b; }catch(e){}
  }

  function init(){ estimator(); afford(); countdown(); forms(); }
  if(document.readyState!=="loading") init(); else document.addEventListener("DOMContentLoaded",init);
})();

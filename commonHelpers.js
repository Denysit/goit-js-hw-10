var h=Object.defineProperty;var f=(t,e,s)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var m=(t,e,s)=>(f(t,typeof e!="symbol"?e+"":e,s),s);import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as y,i as b}from"./assets/vendor-651d7991.js";const S=document.querySelector(".container-timer");S.innerHTML=`
    <input type="text" id="datetime-picker" />
    <button type="button" data-start>Start</button>
    <div class="timer">
      <div class="field">
        <span class="value" data-days>00</span>
        <span class="label">Days</span>
      </div>
      <div class="field">
        <span class="value" data-hours>00</span>
        <span class="label">Hours</span>
      </div>
      <div class="field">
        <span class="value" data-minutes>00</span>
        <span class="label">Minutes</span>
      </div>
      <div class="field">
        <span class="value" data-seconds>00</span>
        <span class="label">Seconds</span>
      </div>
    </div>`;document.querySelector("#datetime-picker");const n=document.querySelector("[data-start]");let l=null,d;n.disabled=!0;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(l=t[0],!d||!d.isActive()){const e=new Date;l<e?(b.error({title:"Error",message:"Please choose a date in the future",position:"topRight",titleColor:"#FFF",messageColor:"#FFF",backgroundColor:"#EF4040",closeOnEscape:!0,iconUrl:"./img/bi_x-octagon.svg"}),n.disabled=!0):n.disabled=!1}console.log(l)}};y("#datetime-picker",g);class D{constructor(e,s){m(this,"timerElement",null);m(this,"intervalId",null);this.endDate=e,this.onUpdate=s}isActive(){return this.intervalId!==null}start(){const s=()=>{const i=new Date,a=this.endDate-i;if(a<=0)this.stop(),this.onUpdate(p(0)),n.disabled=!1;else{const o=p(a);this.onUpdate(o),setTimeout(s,1e3)}};this.isActive()||(n.disabled=!0,this.intervalId=setInterval(s,1e3))}stop(){clearInterval(this.intervalId),this.intervalId=null}}function p(t){const o=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),v=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:c,minutes:u,seconds:v}}function r(t){return String(t).padStart(2,"0")}function I({days:t,hours:e,minutes:s,seconds:i}){const a=document.querySelector("[data-days]"),o=document.querySelector("[data-hours]"),c=document.querySelector("[data-minutes]"),u=document.querySelector("[data-seconds]");a.textContent=r(t),o.textContent=r(e),c.textContent=r(s),u.textContent=r(i)}n.addEventListener("click",()=>{d=new D(l,I),d.start(),n.disabled=!0});
//# sourceMappingURL=commonHelpers.js.map

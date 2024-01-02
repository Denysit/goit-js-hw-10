import"./assets/modulepreload-polyfill-ec808ebb.js";import{i}from"./assets/vendor-651d7991.js";const n=document.querySelector("section");n.insertAdjacentHTML("afterend",`<form class="form">
  <label>
    Delay (ms)
    <input type="number" name="delay" required />
  </label>

  <fieldset>
    <legend>State</legend>
    <label>
      <input type="radio" name="state" value="fulfilled" required />
      Fulfilled
    </label>
    <label>
      <input type="radio" name="state" value="rejected" required />
      Rejected
    </label>
  </fieldset>

  <button type="submit">Create notification</button>
</form>`);const a=document.querySelector(".form");a.addEventListener("submit",l=>{l.preventDefault();const o=document.querySelector('[name="delay"]'),r=document.querySelector('[name="state"]:checked');if(!o||!r)return;const e=parseInt(o.value);new Promise((t,s)=>{setTimeout(()=>{r.value==="rejected"?s(""):t("")},e)}).then(t=>{i.show({title:"OK",titleColor:"#FFF",message:`Fulfilled promise in ${e}ms`,messageColor:"#FFF",position:"topRight",backgroundColor:"#59A10D",iconUrl:".././img/bi_check2-circle.svg"})}).catch(t=>{i.show({message:`Rejected promise in ${e}ms`,title:"Error",titleColor:"#FFF",messageColor:"#FFF",position:"topRight",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg"})})});
//# sourceMappingURL=commonHelpers2.js.map

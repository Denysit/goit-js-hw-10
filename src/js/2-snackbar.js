

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import iconSucsses from "../img/bi_check2-circle.svg";
// import iconError from "../img/bi_x-octagon.svg";


const section = document.querySelector('section');

section.insertAdjacentHTML ('afterend', `<form class="form">
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
</form>`);


const form = document.querySelector('.form');
form.addEventListener('submit', event => {

  event.preventDefault();
  
  const delayInput = document.querySelector('[name="delay"]')
  const stateInput = document.querySelector('[name="state"]:checked');
  
  if (!delayInput || !stateInput) {
    return;
  }

  const delay = parseInt(delayInput.value);
  
  const promise = new Promise((resolve, reject) => {
      
    setTimeout(() => {
      
      const state = stateInput.value;

     if (state === 'rejected') {
      reject('');
     }
     else {
      resolve('');
    }
    }, delay);
        
  });

  promise
    .then(success => {
      iziToast.show({
        title: 'OK',
        titleColor: '#FFF',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#FFF',
        position: 'topRight',
        backgroundColor: '#59A10D',
        iconUrl: '/img/bi_check2-circle.svg',

});
    })

    .catch(error => {
      iziToast.show({
        message: `Rejected promise in ${delay}ms`,
        title: 'Error',
        titleColor: '#FFF',
        messageColor: '#FFF',
        position: 'topRight',
        backgroundColor: '#EF4040',
        iconUrl: '/img/bi_x-octagon.svg',

});
      
})

});



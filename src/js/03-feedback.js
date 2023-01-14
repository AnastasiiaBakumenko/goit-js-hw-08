import throttle from 'lodash.throttle';

const formData = {
   email: "",
   message: "",
};
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

populateForm();

form.addEventListener('input', throttle(onInputListener, 500));
function onInputListener(event){
 formData[event.target.name] = event.target.value;
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//  console.log(JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);
 function onFormSubmit(evt){
console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
evt.preventDefault();
evt.target.reset();

localStorage.removeItem(STORAGE_KEY);
 }

function populateForm(){
   let object;
   try{
      object = JSON.parse(localStorage.getItem(STORAGE_KEY));
   }
   catch {
         object = formData;
   }

   if(object === null) object = formData;

   input.value = object.email;
   textarea.value = object.message;
}







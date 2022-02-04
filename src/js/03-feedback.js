import  throttle  from "lodash.throttle";

const formeLement = document.querySelector(".feedback-form");

formeLement.addEventListener('input',throttle(onFormSubmit, 500) );
formeLement.addEventListener('submit',formInput);

let forObject = {};
savedForm();

function onFormSubmit (evt) {
   const formData = new FormData(formeLement)
   console.log(evt.target.name);
   console.log(evt.target.value);
   forObject[evt.target.name] = evt.target.value;
   console.log(forObject);
   localStorage.setItem("feedback-form-state",JSON.stringify(forObject));
   
};

function formInput (evt){
   evt.preventDefault();
   // evt.target.reset()
   if (formeLement.email.value === '' || formeLement.message.value === '') {
      alert('All fields are required!');
   } else {
      localStorage.removeItem("feedback-form-state")
      evt.target.reset();
   }
 };
      
 function savedForm(evt){
    let savedFormStorege = localStorage.getItem("feedback-form-state")
    if(savedFormStorege){
       savedFormStorege = JSON.parse(savedFormStorege)
       Object.entries(savedFormStorege).forEach(([name, value]) =>{
          formeLement.elements[name].value = value; 
       });
    }
 };
     
      


      
      
      
   
             
         
      

   


  

  








   



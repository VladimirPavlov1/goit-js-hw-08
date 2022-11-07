var throttle = require('lodash.throttle');

const refs ={
    form:document.querySelector('.feedback-form'),
    textarea:document.querySelector('textarea'),
    input:document.querySelector('input'),
}

refs.form.addEventListener('input',throttle(onFormInput,2000));
refs.form.addEventListener('submit',onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);
refs.input.addEventListener('input',onInputInput);




const formData={};


function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem('feedback-form-state')
   
    
   
}

function onTextareaInput(evt){
    evt.currentTarget.value
    
   
}

function onInputInput(evt){
    evt.currentTarget.value
}


function onFormInput(evt){
    formData[evt.target.name]=evt.target.value;
    localStorage.setItem('feedback-form-state',JSON.stringify(formData));

}
fillMessageForm();
function fillMessageForm(){
    const getMessage= localStorage.getItem('feedback-form-state')
    if(getMessage){
    const fillMessage= JSON.parse(getMessage);
    console.log(fillMessage)
    if(fillMessage.email){
    refs.input.value=fillMessage.email}
    if(fillMessage.message){
    refs.textarea.value =fillMessage.message;}}

}

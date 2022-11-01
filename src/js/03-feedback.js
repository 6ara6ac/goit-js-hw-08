let throttle = require('lodash.throttle');

const feedBackForm = document.querySelector ('.feedback-form');


feedBackForm.addEventListener ('input', throttle (onInputForm, 500));
feedBackForm.addEventListener ('submit', onSubmitForm)

onReolad();

function onInputForm (evt) {
evt.preventDefault();

const dataForm = {
    email: feedBackForm.email.value,
    text: feedBackForm.message.value
}

localStorage.setItem("feedback-form-state", JSON.stringify(dataForm));
}

function onReolad () {
    if (localStorage.length > 0) {
    const valueItem = localStorage.getItem("feedback-form-state");
    const valueDate = JSON.parse(valueItem);

    feedBackForm.email.value = valueDate.email;
    feedBackForm.message.value = valueDate.text;
}
return;
}

function onSubmitForm (evt) {
    evt.preventDefault();
    console.log (feedBackForm.email.value);
    console.log (feedBackForm.message.value);
    feedBackForm.email.value = ''
    feedBackForm.message.value = '';
}





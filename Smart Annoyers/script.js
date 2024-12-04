function sendmail(formId){
    var form = document.getElementById(formId);
        let parms = {
        name : form.querySelector('input[name="name"]').value,
        email : form.querySelector('input[name="email"]').value,
        phonenumber : form.querySelector('input[name="phonenumber"]').value,
        message : form.querySelector('textarea[name="message"]').value,
    }
    emailjs.send("service_h1red88","template_2nk4htg",parms).then(alert("Email sent"))
    form.querySelector('input[name="name"]').value = '';
        form.querySelector('input[name="email"]').value = '';
        form.querySelector('input[name="phonenumber"]').value = '';
        form.querySelector('textarea[name="message"]').value = '';
}

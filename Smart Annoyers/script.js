// function sendmail(){
//     debugger;
//         let parms = {
//         name : document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         phonenumber : document.getElementById("phonenumber").value,
//         message : document.getElementById("message").value,
//     }
//     emailjs.send("service_h1red88","template_2nk4htg",parms).then(alert("Email sent"))
// }






function sendmail(formId) {
    debugger;
    let form = document.getElementById(formId);
    if (formId == "form1") {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phonenumber = document.getElementById("phonenumber").value;
        let message = document.getElementById("message").value;

        if (!name || !email || !phonenumber) {
            return;
        }
        let parms = { name, email, phonenumber, message };
        emailjs.send("service_h1red88", "template_2nk4htg", parms)
            .then(() => {
                form.reset();

                let popup = document.getElementById("popup");
                popup.style.display = "block";

                setTimeout(() => {
                    popup.style.display = "none";
                }, 3000);
            })
            .catch(error => {
                console.error("Failed to send email:", error);
                alert("Failed to send the message. Please try again.");
            });
    }
    else {
        let name1 = document.getElementById("name1").value;
        let email1 = document.getElementById("email1").value;
        let phonenumber1 = document.getElementById("phonenumber1").value;
        let message1 = document.getElementById("message1").value;

        if (!name1 || !email1 || !phonenumber1) {
            return;
        }
        let parms = { name1, email1, phonenumber1, message1 };
        emailjs.send("service_h1red88", "template_2nk4htg", parms)
            .then(() => {
                form.reset();

                let popup = document.getElementById("popup");
                popup.style.display = "block";

                setTimeout(() => {
                    popup.style.display = "none";
                }, 3000);
            })
            .catch(error => {
                console.error("Failed to send email:", error);
                alert("Failed to send the message. Please try again.");
            });
    }
}


// toggle button

// contact us sending email SMTP
document.getElementById("contact-us-form").addEventListener("submit", submitForm);


function submitForm() {
    //get the email values
    let name = document.getElementById("InputName").value;
    let subject = document.getElementById("InputSubject").value;
    let email = document.getElementById("InputEmail").value;
    let message = document.getElementById("message-text").value;

    document.getElementById("contact-us-form").reset();
    sendEmail(name, subject, email, message);
}

function sendEmail(name, subject, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "gamentorscontactus@gmail.com",
        Password: "jbjxazlfzjdhdkzj",
        To: "gamentorscontactus@gmail.com",
        From: "gamentorscontactus@gmail.com",
        Subject: subject,
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`,
    }).then(
        (message) => alert("Your email has been sent successfully"));
}


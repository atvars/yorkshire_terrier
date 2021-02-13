/* Fallowed Code Institute video from Rosie */
function sendMail(contactForm) {
    emailjs.send("carwash", "fullValet", {
        "from_name": contactForm.name.value,
        "from_dog_name": contactForm.dog_name.value,
        "from_contact_info": contactForm.contact_info.value,
        "from_about": contactForm.about.value
    })
    .then(
        function(response) {
            alert("Email Sent", response);
        },
        function(error) {
            alert("Email Not Sent", error);
        }
    );
    return false;
}
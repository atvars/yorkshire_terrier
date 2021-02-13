/* Fallowed Code Institute video from Rosie */
function sendMail(contactForm) {
    emailjs.send("yorkshire-terrier", "yorkie", {
        "name": contactForm.name.value,
        "dog_name": contactForm.dog_name.value,
        "ontact_info": contactForm.contact_info.value,
        "about": contactForm.about.value
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
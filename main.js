console.log("Test");
let wrongMsg = false;
const mailInput = document.querySelector("#mailInput")
const myForm = document.querySelector("form");
function checkForm(e) {
    e.preventDefault();
    console.log("Page not reloaded!");
    const userMail = document.querySelector("#mailInput").value
    console.log(userMail);
    const hasDotCom = userMail.endsWith(".com");
    const hasDotOrg = userMail.endsWith(".org");
    const hasDotNet = userMail.endsWith(".net");
    const hasDotEdu = userMail.endsWith(".edu");
    const hasAt = userMail.includes("@");
    const emptyField = userMail.trim().length > 0; // Trim leading/trailing spaces and check if not empty
    const validCharacters = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Regular expression for email validation

    if ((hasDotCom || hasDotOrg || hasDotNet || hasDotEdu) && hasAt && emptyField && validCharacters.test(userMail)) {
        mailSuccess();
    } else {
        printWrongAddress();
    }
}

function mailSuccess() {
    wrongMsg = false;
    mailInput.classList.remove("errorState")
    alert("Thank you for subscribing! We will notify you soon.")
    location.reload() 
}

function printWrongAddress() {
    if (wrongMsg == false) {
        const form = document.querySelector('form');
        const errorMessage = document.createElement('p');
        errorMessage.id = "errorMessage";
        errorMessage.textContent = 'Please provide a valid email address';
        form.insertAdjacentElement('beforeend', errorMessage); 
        mailInput.classList.add("errorState")
        wrongMsg = true;
    } else {
        return
    }
     
}

myForm.addEventListener("submit", checkForm)
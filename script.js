function submit() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const address = document.getElementById("address").value;
  const remail = document.getElementById("remail").value;
  const github = document.getElementById("github").value;
  const message = document.getElementById("message").value;
  const subject = "My Contact details"

  if (fname.trim() === '' ||lname.trim() === '' || email.trim() === '' || remail.trim() === '' || contact.trim() === '' || address.trim() === '' || github.trim() === ''|| message.trim() === '') {
      let conf = confirm("All Fields are Required");

  }
  else if (fname.trim() != '' && lname.trim() != '' && email.trim() != '' && remail.trim() != '' && contact.trim() != '' && address.trim() != '' && github.trim() != ''&& message.trim() != '') {

      if ((contact.trim()).length > 10 || (contact.trim()).length < 10) {
          confirm("Please enter a valid Contact No.")
      }

      else {
          window.location = "mailto:" +  remail  + "?subject=" + subject  + "&body=%0AName: " + fname+lname + "%0APhone: " + contact + "%0AAddress: " + address + "%0AGitHub: " + github + "%0AMessage: " + message;
      }
  }


}
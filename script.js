// JavaScript function to be executed before form submission
function beforeSubmit() {
  // Accessing the form
  let form = document.getElementById("signupForm");

  // Check if the form is valid
  if (!form.checkValidity()) {
    // If the form is not valid, display the error messages
    form.reportValidity();
  } else {
    // Accessing the date picker element
    let datePicker = document.getElementById("date-of-birth");

    // Accessing the hidden date field
    let hiddenDate = document.getElementById("Date_Of_Birth__c");

    // Formatting the selected date to the desired format (UK Format - dd/mm/yyyy)
    let dateObj = new Date(datePicker.value);
    let formattedDate =
      dateObj.getDate().toString().padStart(2, "0") +
      "/" +
      (dateObj.getMonth() + 1).toString().padStart(2, "0") +
      "/" +
      dateObj.getFullYear();

    // Setting the value of the hidden date field
    hiddenDate.value = formattedDate;

    // Submitting the form programmatically
    form.submit();
  }
}

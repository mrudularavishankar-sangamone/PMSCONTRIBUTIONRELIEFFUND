import ContributionView from './ContributionViews.jsx';

export default function DonationForm() {
 
  function handleSubmit(event) {
    //Preventing the default form submission behavior
    event.preventDefault();
    
    //Fetching form values
    const name = document.getElementById("name").value;
    const eID = document.getElementById("eID").value;
    const orgName = document.getElementById("orgName").value;
    const donatedAmount = document.getElementById("donatedAmount").value;
    const state = document.getElementById("state").value;
    const pinCode = document.getElementById("pinCode").value;
    
    //Validating form inputs
    if(name === "" || eID === "" || orgName === "" || donatedAmount === "" || state === "" || pinCode === "") {
      alert("Please fill in all the required fields.");
      return;
    }
    else {
      alert(`Thank you '${name}' for your generous donation of '₹${donatedAmount}' to PM's Relief Fund! Your Employee ID: '${eID}' has been recorded.`);
    }

    //Resetting the form after submission
    event.target.reset();

  }

  //Function to handle invalid input events
  function handleInvalid(event, message) {
    event.target.setCustomValidity(message);
  }

  //Function to clear custom validity message on input
  function handleInput(event) {
    event.target.setCustomValidity("");
  }
  
  return (
    <>
      <div className = "donationFormCSS">

        <h2> Donation Form </h2>

        <form onSubmit = {handleSubmit} >
          <label> Enter your name:
            <input type="text" id = "name" pattern = "^[a-zA-Z]+$" onInvalid = {(e) => handleInvalid(e, 'Name must contain only alphabets.')} onInput = {handleInput} required/>
          </label>

          <label> Enter your employee ID:
            {/* Employee ID must be alphanumeric and at least 5 characters long */}
            <input type="text" id = "eID" pattern = "(?=.*\d)(?=.*[a-zA-Z]).{5,}" onInvalid = {(e) => handleInvalid(e, 'EmployeeID must be Alphanumeric and atleast 5 characters long.')} onInput = {handleInput} required/>
          </label>

          <label> Enter your organization name:
            <input type="text" id = "orgName" required/>
          </label>

          <label> Enter your State of Employment:
            <input type="text" id = "state" pattern = "^[a-zA-Z]+$" onInvalid = {(e) => handleInvalid(e, 'State Name must contain only alphabets.')} onInput = {handleInput} required/>
          </label>

          <label> Enter the Pincode of your Org:
            <input type="text" id = "pinCode" pattern="\\d{6}" minLength={6} maxLength={6} onInvalid = {(e) => handleInvalid(e, 'Enter exactly six digits (0-9) only')} onInput = {handleInput}  required/>
          </label>

          <label> Enter the amount you wish to donate: 
            <input type="number" min = "100" max = "500" id = "donatedAmount" required/>
          </label>

          <button className = "submitButton" type = "submit"> Submit Donation </button>
          <button className = "resetButton" type = "reset"> Reset Form </button>

        </form>
      </div>

      <ContributionView />
    </>
  );
}
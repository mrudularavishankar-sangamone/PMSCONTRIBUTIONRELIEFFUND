import React from 'react';

export default function DonationForm() {
 
  function handleSubmit(event) {
    //Preventing the default form submission behavior
    event.preventDefault();
    
    //Fetching form values
    const name = document.getElementById("name").value;
    const eID = document.getElementById("eID").value;
    const orgName = document.getElementById("orgName").value;
    const donateAmount = document.getElementById("donateAmount").value;
    
    //Validating form inputs
    if(name === "" || eID === "" || orgName === "" || donateAmount === "") {
      alert("Please fill in all the required fields.");
      return;
    }
    else {
      alert(`Thank you ${name} for your generous donation of ₹${donateAmount} to ${orgName}! Your Employee ID: ${eID} has been recorded.`);
    }

    //Resetting the form after submission
    event.target.reset();

  }
  
  return (
    <div className = "donationFormCSS">

      <h2> Donation Form </h2>
      
      <form onSubmit = {handleSubmit} >
        <label> Enter your name:
          <input type="text" id = "name" required/>
        </label>
        
        <label> Enter your employee ID:
          {/* Employee ID must be alphanumeric and at least 5 characters long */}
          <input type="text" id = "eID" pattern = "(?=.*\d)(?=.*[a-zA-Z]).{5,}" required/>
        </label>
        
        <label> Enter your organization name:
          <input type="text" id = "orgName" required/>
        </label>
        
        <label> Enter the amount you wish to donate: 
          <input type="number" min = "100" max = "500" id = "donateAmount" required/>
        </label>

        <button className = "submitButton" type = "submit"> Submit Donation </button>

      </form>
    
    </div>
  );
}
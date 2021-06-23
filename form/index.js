// function goBack() {
//     //   window.history.back();
//     window.location.replace('index.html');
//     }

function goBack() {
    window.history.back();
  }
const signUp = e => {
    let formData = {
      first_name: document.getElementById('first_name').value,
      last_name: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone_no: document.getElementById('phone_no').value,
        company_name: document.getElementById('company_name').value,
        Street_address: document.getElementById('Street_address').value,
        Street_address_line_2: document.getElementById('Street_address_line_2').value,
        city: document.getElementById('city').value,
        Region: document.getElementById('Region').value,
        Zip_code: document.getElementById('Zip_code').value,
        country: document.getElementById('country').value,
        Domain: document.getElementById('Domain').value,
        Additonal_msg: document.getElementById('Additional_msg').value,

    }
    localStorage.setItem('formData', JSON.stringify(formData));

    dispData();
    e.preventDefault();
}

function dispData(){
    // console.log(localStorage.getItem('formData'));
    let {first_name, last_name, email, phone_no,company_name,Street_address,Street_address_line_2,city,Region,Zip_code,country,Domain,Additional_msg} = JSON.parse(localStorage.getItem('formData'));
    var output = document.getElementById('output');
    output.innerHTML = `
    // <table>
    //     <tbody>
    //         <tr>
    //             <td>First Name</td>
    //             <td>${fname}</td>
    //         </tr>
    //         <tr>
    //             <td>Last Name</td>
    //             <td>${lname}</td>
    //         </tr>
    //         <tr>
    //             <td>Email Address</td>
    //             <td>${email}</td>
    //         </tr>
    //         <tr>
    //             <td>Password</td>
    //             <td>${phoneno}</td>
    //         </tr>
    //         <tr>
    //             <td>companyn</td>
    //             <td>${companyn}</td>
    //         </tr>
    //     </tbody>
    // </table>`;
}
dispData();



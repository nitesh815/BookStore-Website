document.getElementById('register-form').addEventListener('submit', function(event) {

    let name=document.getElementById('name').value;
    if(name.length<6){
        alert("Name should be at least 6 characters long");
      event.preventDefault();
    }
    
  
  
    let phone=document.getElementById("phone").value;
    if(phone.length !=10 || isNaN(phone) ){
    
        alert("Enter Valid Phone Number !!");
        event.preventDefault(); // Prevent form submission
        console.log(phone.length,"  not=10")
    }

    let password = document.getElementById('password').value;
    if (password.length < 6) {
      alert('Password should be at least 6 characters long !!');
      event.preventDefault(); // Prevent form submission
    }

 
  });
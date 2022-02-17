function handleregistration(){
    debugger;
    var name = $('#name').val();
    var email = $('#email').val();
    var password=$('#password').val();
    var repeatPassword = $('#repeat-password').val();
    if(name.length < 1){
      alert("name is missing");
      return false;
    }
    if(email.length < 1){
      alert("email is missing");
      return false;
    }
    if(password.length >= 20){
      alert("password length should be less than or equal to 20");
      return false;
    }
    if(password.length > 0 && password == repeatPassword){
    
      $.ajax({
        url: 'http://localhost:83/registration.php',
        method: 'POST',
        data: { Name: name, Email: email, Password: password},
        dataType: 'json',
        success: function(result) { 
            console.log(result.code);
            console.log(result.message);
            alert("User Resistered Successfully");
            window.location.href = "login.html";
        }
      });
    }else{
      alert("password and repeatpassword didn't match");
    }
}
function login(){
    debugger;
    var email = $('#email').val();
    var password= $('#password').val();
    if(email.length < 1 || password < 1){
      alert("email or password is empty!");
      return false;
    }else{
      $.ajax({
        url: 'http://localhost:83/login.php',
        method: 'POST',
        data: { Email: email, Password: password},
        dataType: 'json',
        success: function(result) { 
            console.log(result.code);
            console.log(result.message);
            if(parseInt(result.code) == 200){
              sessionStorage.setItem("UserId", parseInt(Math.random() * 1000))
              window.location.href = "main.html";
            }else{
              alert("login failed");
            }
            
        }
      });
    }
}
 
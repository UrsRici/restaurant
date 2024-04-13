////////////////
//   SignUp   //
////////////////

document.getElementById('form_signup').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    fetch('php/signup/signup.php', {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => response.json())
    .then(data => {
        const signup_info = data;
        signup_error(signup_info);
    });
});

function signup_error(signup_info){

    acount_created = true;
    document.getElementById("error_signup_1").innerHTML = "";
    document.getElementById("error_signup_2").innerHTML = "";
    document.getElementById("error_signup_3").innerHTML = "";
    if (signup_info["empty_input"] && acount_created) {
        document.getElementById("error_signup_1").innerHTML = signup_info["empty_input"];
        acount_created = false;
    }
    if (signup_info["invalid_email"] && acount_created) {
        document.getElementById("error_signup_2").innerHTML = signup_info["invalid_email"];
        acount_created = false;
    }
    if (signup_info["username_taken"] && acount_created) {
        document.getElementById("error_signup_3").innerHTML = signup_info["username_taken"];
        acount_created = false;
    }
    if (acount_created) {
        alert(signup_info);
        location.reload();
    }
    
}

/////////////////
//    LogIn    //
/////////////////

document.getElementById('form_login').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    fetch('php/login/login.php', {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => response.json())
    .then(data => {
        const login_info = data;
        login_error(login_info); 
    });
});

function login_error(login_info) 
{
    you_are_log_in = true;
    document.getElementById("error_login_1").innerHTML = "";
    document.getElementById("error_login_2").innerHTML = "";
    document.getElementById("error_login_3").innerHTML = "";

    if (login_info["empty_input"] && you_are_log_in) {
        document.getElementById("error_login_1").innerHTML = login_info["empty_input"];
        you_are_log_in = false;
    }
    if (login_info["wrong_username"] && you_are_log_in) {
        document.getElementById("error_login_2").innerHTML = login_info["wrong_username"];
        you_are_log_in = false;
    }
    if (login_info["wrong_password"] && you_are_log_in) {
        document.getElementById("error_login_3").innerHTML = login_info["wrong_password"];
        you_are_log_in = false;
    }
    if (you_are_log_in) {
        localStorage.setItem("user", JSON.stringify(login_info));
        alert("Welcome back " + login_info["name"] +"!");
        window.location.href = "Home.html";
    }
}
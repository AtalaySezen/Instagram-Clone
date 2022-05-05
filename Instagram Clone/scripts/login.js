const passInput = document.getElementById('passInput').value;
const userInput = document.getElementById('userInput').value;

const loginButton = document.getElementById('loginButton');


function showPassword() {
    var x = document.getElementById("passInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


function validateName(){
    if(userInput.length < 1){
        loginButton.classList.add('non-disable');
        loginButton.disabled = "false"
        return false;
    }
    else{
        return true;
    }
}
(function() {     
    var i = 0;
    var pics = [ "./images/login/80b8aebdea57.png", "./images/login/8e9224a71939.png","./images/login/fe2540684ab2.png" ];
    var el = document.getElementById('imagechange');

    function toggle() {
        el.src = pics[i];   
        i = (i + 1) % pics.length;  
    }
    toggle()
    setInterval(toggle, 4000);
})();      


const footerYear = document.getElementById('year');

window.onload = function(){
    let date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
    }


function loginHref(){
    
}







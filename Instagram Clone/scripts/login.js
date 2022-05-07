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

// document.getElementById('userInput').addEventListener('change',function(){
//   loginButton.classList.add('non-disable')
// });


function validateName() {
  console.log('test')
  if (userInput.length < 1) {
    loginButton.classList.add('non-disable');
  }
  else {
    loginButton.classList.remove('non-disable');
  }
}


(function () {
  var i = 0;
  var pics = ["./images/login/80b8aebdea57.png", "./images/login/8e9224a71939.png", "./images/login/fe2540684ab2.png"];
  var el = document.getElementById('imagechange');

  function toggle() {
    el.src = pics[i];
    i = (i + 1) % pics.length;
  }
  toggle()
  setInterval(toggle, 2000);
})();



const footerYear = document.getElementById('year');

window.onload = function () {
  let date = new Date().getFullYear();
  document.getElementById("year").innerHTML = date;
}



loginButton.addEventListener("click", direct)

function login() {
  if (userInput == "atalay" && passInput == "atalay") {
    direct(), showSuccess();
  } else {
    alert("hatalı şifre")
  }
}
//Yönlendirme
function direct() {
  window.location.href = "./index.html"
}


// function errorAlert(){
//     errorElement.innerHTML = "Hatalı kullanıcı adı veya şifre"
//     errorElement.classList.add("error");
// }


loginButton.addEventListener('click', function () {
  console.log(1)
})



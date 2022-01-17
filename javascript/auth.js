const btnsubmit = document.querySelector("#submit");

btnsubmit.addEventListener('click',function(e){
    e.preventDefault();
    location.href="/Auth/deshboard.html";
    document.addEventListener(".log-containter").style.background ="blue";
});


/*

var load =document.querySelector('submit');


load.addEventListener("click", function(e){
    e.preventDefault();
    //window.location.href="admin.html";
    //window.open("https://www.w3schools.com");
  Window.load(href="/Log/forgotpwd.html");
    

});


*/
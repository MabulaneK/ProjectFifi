//const manu =document.getElementById("manubtn");
//const sideBar= document.querySelector(".side-nav");

document.getElementById("nav-toggle").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("menu-li-a").style.cssText=` padding-left:1rem;  `;
    document.getElementById("menu-li-a-span").lastChild=` display:none `;
    document.getElementById("sidebar").style.cssText=` left:0px;
                                                        
                                                           `;


      
});


document.querySelector(".main").addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById("sidebar").style.cssText=` left:-340px `;
    
});

document.querySelector(".add").addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(".divholder").style.display="Flex";    
    document.querySelector(".add").innerHTML="X";
    document.querySelector(".add").style.color="Green";
});
document.querySelector(".create-ticket").addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(".divholder").style.display="Flex";    
});
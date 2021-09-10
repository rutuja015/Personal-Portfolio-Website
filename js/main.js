//navigation menu
(()=>{
    const hamburberBtn=document.querySelector(".hamburger-btn")
    navMenu=document.querySelector(".nav-menu");
    closeNavbtn=navMenu.querySelector(".close-nav-menu");
    hamburberBtn.addEventListener("click",showNavMenu);
    closeNavbtn.addEventListener("click",hideNavMenu);
    
    
    function showNavMenu(){
        navMenu.classList.add("open")
    }
    function hideNavMenu(){
        navMenu.classList.remove("open")
    }
    document.addEventListener("click", (event)=>{
        if(event.target.classList.contains('link-item')){
            if(event.target.hash!==""){
                // event.preventDefault();
                // const hash=event.target.hash;
                // document.querySelector("section.active").classList.add("hide");
                // document.querySelector("section.active").classList.remove("active");
                // document.querySelector(hash).classList.add("active");
                // document.querySelector(hash).classList.remove("hide");
                // navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                // navMenu.querySelector(".active").classList.remove("active","inner-shadow");

                event.target.classList.add("active","inner-shadow","nav-color");
                event.target.classList.remove("outer-shadow","inner-shadow","hover-in-shadow");
                hideNavMenu();
                // 
            }
        }
        
    })


})();


// hide all sections except activeones
// (()=>{
//     const sections=document.querySelectorAll(".section");
//     sections.forEach((section)=>{
//         if(!section.classList.contains("active")){
//             section.classList.add("hide");
//         }
//     })
// })();
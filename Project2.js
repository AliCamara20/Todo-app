const openBtn = document.getElementById("openBtn");
const modalContainer = document.getElementById("modalContainer");
const closeBtn = document.getElementById("closeBtn");


openBtn.addEventListener("click", function(){
    modalContainer.style.display ="block";
});

closeBtn.addEventListener("click", function(){
    modalContainer.style.display = "none";
});



document.addEventListener("click", function(e){
    
        const target = e.target;
        if (target  === modalContainer) {
            modalContainer.style.display = "none";   
        }
    }
);
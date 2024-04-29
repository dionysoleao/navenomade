navSwitch = document.querySelector(".nav-switch");
indexIcon = document.querySelector(".index-icon");
classesIcon = document.querySelector(".classes-icon");


navSwitch.addEventListener("click", function () { 
    if (navSwitch.classList.contains("classes-icon")) {
        navSwitch.classList.add('index-icon');
        navSwitch.classList.remove('classes-icon');
    } else { 
        navSwitch.classList.remove('index-icon');
        navSwitch.classList.add('classes-icon');
    }

})

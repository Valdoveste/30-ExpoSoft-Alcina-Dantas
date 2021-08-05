/* 4527a0 */

var elementsPaths = [
    ".projects-exposoft",
    ".projects-exposoft > a",
    ".projects-exposoft > a > img",
    ".projects-exposoft > a > h1",
    ".projects-exposoft > a > p",
]


var clock, stateCounter = 0, blurElement = document.getElementById("BlurAnimation");// Animation variables

let time = null;

for(let k = 0; k <= 5; k++){
    var setidFinder = document.querySelectorAll(elementsPaths[k]);
    for(let j = 0; j < setidFinder.length; j++){
        setidFinder[j].setAttribute("id", j);  
    }
    
    /* This code is a debouncer that works as a hooper to select the minimum possible requisitions of mouseover.
    When someone passes the mouse on the projects this code will wait till this event doesn't change and will process the animations.  */  
    function debouncMOver(event){
        idProfile = event.target.id; 
        clearTimeout(time);    

        time = setTimeout(() => {
            blurElement.style.display="block";
            setTimeout(animationStart, 10);
        }, 10);
    }

    // MouseOver listener
    for(let items of setidFinder){
        items.addEventListener("mouseover", debouncMOver);
    }

    // MouseOut Listener
    for(let items of setidFinder){
        items.addEventListener("mouseout", (event) => {
            /* This variable chooses which element will be animated, catching the target id of the action. */
            idProfile = event.target.id; 
            blurElement.style.opacity = "0";
            clearTimeout(time); 
            setTimeout(animationEnd, 500);
        });
    }
}



function animationStart(){ blurElement.style.opacity = "1"; }
    
function animationEnd(){ blurElement.style.display="none"; }


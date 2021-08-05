/* 4527a0 */
var titleOutline = document.getElementsByTagName("hr");
var titleProject = document.getElementsByClassName("modules-title");
// var anti = document.getElementsByClassName("anti-blur");
var mouseoverField = document.querySelectorAll(".projects-exposoft > a");
var blurElement = document.getElementById("BlurAnimation"); // Animation variables

for(let k = 0; k < mouseoverField.length; k++){ 
    mouseoverField[k].setAttribute('id', k);
}

// MouseOver listenerN
for(let items of mouseoverField){
    items.addEventListener("mouseover", (event) => {
        idProfile = event.target.id //This variable chooses which element will be animated, catching the target id of the action.
        if(idProfile == "0" || idProfile == "1" || idProfile == "2"){
            titleAnimation(0,0,0,1,1);
        }else{
            // anti.style.zIndex="0";
            titleAnimation(1,1,1,0,0);
        }
        blurElement.style.display="block";
        setTimeout(animationStart, 10);
    });
}

// MouseOut Listener
for(let items of mouseoverField){
    items.addEventListener("mouseout", (event) => {
        idProfile = event.target.id; 
        blurElement.style.opacity = "0";
        titleOutline[0].style.width="200px";
        titleOutline[1].style.width="200px";
        setTimeout(animationEnd, 500);
     });
}

function animationStart(){ blurElement.style.opacity = "1"; }
    
function animationEnd(){ blurElement.style.display="none"; }


function titleAnimation(i1,i2,i3,i4,i5){
    titleOutline[i1].style.width="95%";
    titleOutline[i2].style.zIndex="2";
    titleProject[i3].style.zIndex="2";
    titleProject[i4].style.zIndex="0";
    titleOutline[i5].style.zIndex="0";
}
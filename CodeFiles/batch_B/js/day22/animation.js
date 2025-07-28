// document.getElementById("fadeOut").addEventListener("click",()=>{

// })


$("#fadeOut").on("click", () => {
    $("img").fadeOut(3000);
});

$("#fadeIn").on("click", () => {
    $("img").fadeIn(5000);
});

$("#fadeToggle").on("click", () => {
    $("img").fadeToggle(1000);
});


$("#hide").on("click", () => {
    $("img").hide(1000);
});

$("#show").on("click", () => {
    $("img").show(1000);
});

$("#toggle").on("click", () => {
    $("img").toggle(1000);
});


const lightOn = () => $("#light").attr("src", "../../../../Assignments/images/day22/lightOn.jpg");
const lightOff = () => $("#light").attr("src", "../../../../Assignments/images/day22/lightOff.jpg");

$("#lightOn").on("click", lightOn);
$("#lightOff").on("click", lightOff);
$("#lightToggle").on("click", ()=>{
    $("#light").attr("src") == "../../../../Assignments/images/day22/lightOn.jpg" ? lightOff() : lightOn();
});






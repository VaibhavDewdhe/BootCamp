// document.getElementById("fadeOut").addEventListener("click",()=>{

// })

$("#home").css({
    border: "2px solid red",
    padding: "10px",
    "border-radius": "10px",
    margin: "20px"
});

$("#fadeOut").on("click", () => {
    $("#poker").fadeOut(3000);
});

$("#fadeIn").on("click", () => {
    $("#poker").fadeIn(5000);
});

$("#fadeToggle").on("click", () => {
    $("#poker").fadeToggle(1000);
});


$("#hide").on("click", () => {
    $("#poker").hide(1000);
});

$("#show").on("click", () => {
    $("#poker").show(1000);
});

$("#toggle").on("click", () => {
    $("#poker").toggle(1000);
});


const lightOn = () => {
    $("#light").attr("src", "../../../../Assignments/images/day22/lightOn.jpg");
    $("#home").css("background-color", "white")
    $("#home *").fadeTo("1000", 1);
}
const lightOff = () => {
    $("#light").attr("src", "../../../../Assignments/images/day22/lightOff.jpg");
    $("#home").css("background-color", "black")
    $("#home *").fadeTo("1000", 0.15);
}

lightOff();
$("#lightOn").on("click", lightOn);
$("#lightOff").on("click", lightOff);
$("#lightToggle").on("dblclick", () => {
    $("#light").attr("src") == "../../../../Assignments/images/day22/lightOn.jpg" ? lightOff() : lightOn();
});

$("#home").on("mouseenter", lightOn);
$("#home").on("mouseleave", lightOff);





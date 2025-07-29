// $("#fadeOut").click(()=>{
//     alert("I am fadeOut button");
// });

// document.getElementById("fadeOut").addEventListener("click",()=>{
//     alert("I am fadeOut called from core javascript logic")
// });

// document.querySelector("#fadeOut").addEventListener("click",()=>{
//     alert("I am fadeOut called from core javascript logic, I am called from query Selector")
// });


$("#fadeOut").on("click", () => $("img").fadeOut(3000));

$("#fadeIn").on("click", () => $("img").fadeIn(3000));

$("#fadeToggle").on("click", () => $("img").fadeToggle(1000));

$("#hide").on("click", () => $("img").hide(2000));

$("#show").on("click", () => $("img").show(2000));

$("#toggle").on("click", () => $("img").toggle(2000));

// function lightOn(){
//     $('#light').attr("src", "../../../../Assignments/images/day22/lightOn.jpg");
// }

const lightOn = () =>{
    $('#light').attr("src", "../../../../Assignments/images/day22/lightOn.jpg");
     $("#home > *").fadeTo("slow","1");
    $("#home").css("background-color", "white");
}

const lightOff = () =>{
    $('#light').attr("src", "../../../../Assignments/images/day22/lightOff.jpg");
    $("#home > *").fadeTo("slow","0.15");
    $("#home").css("background-color", "lightgray");
}
lightOff();

$("#lightOn").on("click", lightOn);

$("#lightOff").on("click", lightOff);

$("#lightToggle").on("dblclick", () => {
    // alert($('#light').attr("width"));
    // $('#light').attr("width", "200px");
    $("#light").attr("src") == "../../../../Assignments/images/day22/lightOn.jpg" ? lightOff() : lightOn();
});

$("#home").on("mouseenter", lightOn);
$("#home").on("mouseleave", lightOff);
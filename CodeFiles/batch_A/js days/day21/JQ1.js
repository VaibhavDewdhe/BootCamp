// $(document).ready(()=>{
//      // document.body.style.backgroundColor = "black";
//         $("body").css("background-color", "black")
// })

// $(()=>{
// document.body.style.backgroundColor = "black";
// $("body").css("background-color", "black")
// })


// document.body.style.backgroundColor = "black";
let cg = true;
$("button").on("click", () => {
    cg ? $("body").css("background-color", "black") : $("body").css("background-color", "white");

    cg = !cg;
});

// let btn = document.getElementsByTagName("button");
// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", () => {
//         if (cg)
//             document.body.style.backgroundColor = "black";
//         else
//             document.body.style.backgroundColor = "white";

//         cg = !cg;

//     });
// }

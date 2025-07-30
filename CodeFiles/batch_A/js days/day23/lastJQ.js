//get methods
//1. It only returns the text between the opening
//and the closing of the element targeted
let x = $("p").text();
//2. It returns the text with the html elements between the opening
//and the closing of the element targeted
let y = $("p").html();
//3. It returns the value mentioned of the argument passed
//in the attr() method
let z = $("p").attr("class");


//creating element
const h1 = $("<h1></h1>").text("it's a heading");


//adding the newly created element to the dom
$("body").prepend(h1);

//creating and adding at the same time
$("body").append("<h3>Hello, I am h3</h3>");

//just creating a empty paragraph element
const p = $("<p></p>");

//now adding the html inside that element
p.html("Hello, My name is <strong>Vaibhav</strong>");


//adding it to the dom
$("body").append(p);

$("button").on("click", () => {
    console.log($(".para").last().val());
});
$("button").attr("class", "btn");

//if you forgot then remember the softy 
//outside the D-mart

//empty method
//empty method means just eating the ice-cream
$("ul").remove();
//remove method
//remove method means eating ice-cream with the cone
$("ul").remove();


//playing with class

// $("div").addClass("girls");

// $("div").removeClass("girls")
// $("div").addClass("boys");

$("button").on("click",()=>{
    $("div").toggleClass("boys");
})

let div = $("div");

// alert(div.outerHeight(true))


// $("strong").parent().css("text-align","justify")

console.log($("strong").parentsUntil("body"));

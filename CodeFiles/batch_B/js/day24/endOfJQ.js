//get methods

//this is for getting only text in between
//opening and closing of tag p
const textContent = $("p").text();

//this is for getting text and html in between
//opening and closing of tag p
const htmlContent = $("p").html();

//this is for getting the value
$("#getValue").on("click", function(){
    $(this).after($("input").val())
})

//this is to get a particular attribute of a particular element
const attribute = $("input").attr("type");
// alert(attribute)


//set methods
let content = "Hello, <i>everyone</i>";
//set method for setting text
// $("p").text(content);
//output:- Hello, <i>everyone</i>

//set method for setting html
// $("p").html(content);
//output:- Hello, everyone
//but the everyone keyword will seem italic

//val() method in the form set
$("input").val("Anonymous user")

//implementation set method of attr();
let flag = true;
$("#see").on('click', () => {
    flag ? $("input").attr("type", "text") : $("input").attr("type", "password");
    flag = !flag;
});

let h1 = $("<h1></h1>").text("Learning jquery")

$("body").prepend(h1);

$("p").append("!");
$("p").after("just checking");

$("p").prepend("&nbsp; &nbsp; &nbsp; ")
$("p").before("just checking one again")


$("body").append("<h3>We will learn React</h3>")


//remove and empty

//empty
//everything is deleted
//in between opening and closing of 
//the targeted element
$("#parent").empty();


//element itself is deleted with it's content
$("#parent").remove();


$("button").remove("#see");
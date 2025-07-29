// $("button, input:button").on("click", ()=>alert("clicked"));
// $(":button").on("click", function(){
//     $(this).hide();
// });

// $(':button:even').css("background-color","brown")

$("input[type='button'").css("background-color","brown")

function abc() {
    $(this).hide();
}

$(":button").on("click", abc);
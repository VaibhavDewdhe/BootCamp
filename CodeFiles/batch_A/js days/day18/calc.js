let inps = document.getElementsByTagName("input");

let btns = document.getElementsByTagName("button");

let hd = document.getElementsByTagName("h1")[0];

btns[0].addEventListener("click", function (){
    let sum = parseFloat(inps[0].value) + parseFloat(inps[1].value);

    hd.textContent = sum;
});


btns[1].addEventListener("click", function (){
    let sum = inps[0].value - inps[1].value;

    hd.textContent = sum;
});

btns[2].addEventListener("click", function (){
    let sum = inps[0].value * inps[1].value;

    hd.textContent = sum;
});

btns[3].addEventListener("click", ()=>{
    let sum = inps[0].value / inps[1].value;

    hd.textContent = sum;
});
let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let list = document.getElementById("list");

btn.addEventListener("click", ()=>{
    let val = inp.value;

    let li = document.createElement('li');

    li.textContent = val;

    list.append(li);
});
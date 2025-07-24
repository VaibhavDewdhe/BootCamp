const inps = document.getElementsByTagName("input");

// console.log(inps);
// inps.map(e => console.log(e)
// )
const msg = document.getElementById("msg");
for (let i = 0; i < inps.length; i++) {
    inps[i].addEventListener("change", () => {
        let num = parseInt(inps[i].value);

        if (isNaN(num)) {
            msg.innerText = "plz, enter valid inp"
        } else
            msg.innerText = ""

    })

}
let sum = "";

const btns = document.getElementsByTagName("button");
const hd = document.getElementsByTagName("h1")[0];

console.log(btns);

btns[0].addEventListener("click", () => {
    sum = parseInt(inps[0].value) + parseInt(inps[1].value);
    hd.innerText = sum;
});





btns[1].addEventListener("click", () => {
    sum = inps[0].value - inps[1].value;
    hd.innerText = sum;
});

btns[2].addEventListener("click", () => {
    sum = inps[0].value * inps[1].value;
    hd.innerText = sum;
});

btns[3].addEventListener("click", () => {
    sum = inps[0].value / inps[1].value;
    hd.innerText = sum;
});






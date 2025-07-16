//LONG BUT EASY

for (let i = 1; i <= 10; i++) {
    let s = '';
    for (let j = 1; j <= 10; j++) {
        if (i <= 5) {
            if (j <= i || j >= 11 - i)
                s = s + "* ";
            else
                s = s + "  ";
        } else {
            if (j >= i || j <= 11 - i)
                s = s + "* ";
            else
                s = s + "  ";
        }
    }
    console.log(s);
}



//SHORT BUT A LIL BIT DIFFICULT TO READ OR UNDERSTAND
for (let i = 1; i <= 10; i++) {
    let s = '';
    for (let j = 1; j <= 10; j++) {
        if ((i <= 5 && (j <= i || j >= 11 - i)) || (i > 5 && (j >= i || j <= 11 - i)))
            s = s + "* ";
        else
            s = s + "  ";
    }
    console.log(s);
}

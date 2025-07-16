for (let i = 1; i <= 5; i++) {
    let s = '';
    for (let j = 1; j <= 5; j++) {
        if (j >= i) {
            s = s + "* ";
        } else {
            s = s + "  ";
        }
    }

    console.log(s);

}
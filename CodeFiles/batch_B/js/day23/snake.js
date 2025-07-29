$("#parent").on("click", () => {
    const snake = $("#snake");
    snake.css({
        top: "",
        bottom: "",
        left : "",
        right: ""
    });
    snake.animate({
        width: "100%",
        right: 0
    });

    snake.animate({
        width: "50px",
    });
    snake.animate({
        height: "100%",
        bottom: 0
    });

    snake.animate({
        height: "50px",
    });

    snake.animate({
        width: "100%",
        left: 0,
    });

    snake.animate({
        width: "50px",
    });

    snake.animate({
        height: "100%",
        top: 0,
    });

    snake.animate({
        height: "50px",
    });
});
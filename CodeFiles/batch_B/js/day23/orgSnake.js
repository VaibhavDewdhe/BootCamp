$("#parent").on("click", function () {
    const snake = $("#snake");
    const parent = $("#parent");

    const parentWidth = parent.width();
    const parentHeight = parent.height();
    const snakeWidth = snake.width();
    const snakeHeight = snake.height();

    // Ensure starting position
    snake.stop(true, true).css({ top: 0, left: 0 });

    // Move Right
    snake.animate({ left: parentWidth - snakeWidth }, 2000, function () {
        // Move Down
        snake.animate({ top: parentHeight - snakeHeight }, 2000, function () {
            // Move Left
            snake.animate({ left: 0 }, 2000, function () {
                // Move Up
                snake.animate({ top: 0 }, 2000);
            });
        });
    });
});

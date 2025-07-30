$(document).ready(function () {
    const gameBox = $("#game-box");
    let direction = "right";
    const step = 20;
    const speed = 100;
    const snake = [{ top: 0, left: 0 }];

    // Create initial snake segment
    function drawSnake() {
        gameBox.empty();
        snake.forEach((segment, i) => {
            const seg = $("<div class='snake-segment'></div>");
            seg.css({
                top: segment.top + "px",
                left: segment.left + "px",
                backgroundColor: i === 0 ? "darkgreen" : "green"
            });
            gameBox.append(seg);
        });
    }

    // Keyboard direction control
    $(document).keydown(function (e) {
        if (e.key === "ArrowUp" && direction !== "down") direction = "up";
        if (e.key === "ArrowDown" && direction !== "up") direction = "down";
        if (e.key === "ArrowLeft" && direction !== "right") direction = "left";
        if (e.key === "ArrowRight" && direction !== "left") direction = "right";
    });

    // Movement logic
    setInterval(() => {
        let head = { ...snake[0] };

        switch (direction) {
            case "right": head.left += step; break;
            case "left": head.left -= step; break;
            case "up": head.top -= step; break;
            case "down": head.top += step; break;
        }

        snake.unshift(head);         // Add new head
        snake.pop();                 // Remove tail
        drawSnake();
    }, speed);
});

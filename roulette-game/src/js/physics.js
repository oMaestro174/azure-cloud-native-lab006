function applyGravity(ball) {
    ball.velocity.y += ball.gravity; // Apply gravity to the ball's vertical velocity
}

function updateBallPosition(ball) {
    ball.position.x += ball.velocity.x; // Update horizontal position
    ball.position.y += ball.velocity.y; // Update vertical position

    // Check for ground collision
    if (ball.position.y >= ball.groundLevel) {
        ball.position.y = ball.groundLevel; // Reset position to ground level
        ball.velocity.y *= -ball.bounceFactor; // Reverse velocity for bounce
    }
}

function applyFriction(ball) {
    ball.velocity.x *= ball.friction; // Apply friction to horizontal velocity
    ball.velocity.y *= ball.friction; // Apply friction to vertical velocity
}

function simulateBallMovement(ball) {
    applyGravity(ball); // Apply gravity
    updateBallPosition(ball); // Update position based on velocity
    applyFriction(ball); // Apply friction to slow down the ball
}
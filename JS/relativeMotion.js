function relativeMotion(){
    if(ball.isTouching(breakPad)){
        bounce.play();
        ball.velocityY = ball.velocityY * -1;
        relativeX = ball.x - breakPad.x;
        ball.velocityX = 0.3 * relativeX;
    }
}
function ballLimitations(){
    if(ball.y < 5){
        ball.velocityY = ball.velocityY * -1;
        }
    if(ball.y > 570){
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.y = breakPad.y - 10;
        launch = 0;
        lives = lives - 1;
        if(lives != 0){
            loseLife.play();
        }
        }
    if(ball.x < 5){
        ball.velocityX = ball.velocityX * -1;
        }
    if(ball.x > 395){
        ball.velocityX = ball.velocityX * -1;
        }
    if(launch == 0){
            ball.x = breakPad.x;
          }
}
function situationCheck(){
    if(destroyedEnemies == 100){
      if(soundPlayed == 0){
        winSound.play();
        soundPlayed = 1;
      }
        breakPad.destroy();
        ball.destroy();
        stat.visible = true;
        stat.addImage(win);
        stat.scale = 0.5;
        makeCode();
        window.open("https://studio.code.org/projects/applab/FBN5Wlw4ZnKSmS8StcjOrJrBJhBxsLfDDQtqJLly3qc/");
      }
    if(lives == 0){
      if(soundPlayed == 0){
        loseSound.play();
        soundPlayed = 1;
      }
        heart1.visible = false;
        heart2.visible = false;
        heart3.visible = false;
        breakPad.destroy();
        ball.destroy();
        stat.visible = true;
        stat.addImage(lose);
        stat.scale = 0.37;
        }
}
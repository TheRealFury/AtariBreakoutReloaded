function showLives(){
    if(lives == 3){
        heart1.visible = true;
        heart2.visible = true;
        heart3.visible = true;
      }
    if(lives == 2){
        heart1.visible = true;
        heart2.visible = true;
        heart3.visible = false;
      }
    if(lives == 1){
        heart1.visible = true;
        heart2.visible = false;
        heart3.visible = false;
      }
}
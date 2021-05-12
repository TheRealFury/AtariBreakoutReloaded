function makeCode(){
    if(destroyedEnemies*lives >= 0 && destroyedEnemies*lives <= 100){
        code = "C" + destroyedEnemies*lives;
    }
    else if(destroyedEnemies*lives >= 100 && destroyedEnemies*lives <= 200){
        code = "B" + destroyedEnemies*lives;
    }
    else if(destroyedEnemies*lives >= 200 && destroyedEnemies*lives <= 300){
        code = "C" + destroyedEnemies*lives;
    }
    text(code, 170, 540);
}
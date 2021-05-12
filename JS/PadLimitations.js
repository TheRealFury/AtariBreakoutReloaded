function PadLimitations(){
    if(keyIsDown(RIGHT_ARROW) && mode == "key"){
        breakPad.x += 5;
        if(justMoved == 0){
          justMoved = 1;
        }
      }
    if(keyIsDown(LEFT_ARROW) && mode == "key"){
        breakPad.x -= 5;
        if(justMoved == 0){
          justMoved = 1;
        }
      }
    if(mode == "mouse"){
        breakPad.x = mouseX;
      }
    if(breakPad.x > 374){
        breakPad.x = 375;
      }
    if(breakPad.x < 26){
        breakPad.x = 25;
      }
}
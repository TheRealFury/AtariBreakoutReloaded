function CreateButton(){
    documentation = createButton("How to play?")
    documentation.position(450,305);
    if(documentation.mousePressed(function(){
        window.open("https://therealfury.github.io/BreakoutDocs/");
     }));
}

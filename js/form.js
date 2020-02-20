class Form {
    constructor()  {

    }
    display() {
        var title = createElement('h2');
        title.html("Car racing game");
        title.position(130,0);
        var input = createInput("Name");
        var button = createButton('Play');
        input.position(130,160);        
        button.position(250,200);
        var greeting = createElement('h3');
        button.mousePressed(function() {
            input.hide();
            button.hide();
            var name = input.value();
            player_count = player_count  + 1;
            player.update(name);
            player.updateCount(player_count);
            greeting.html("Hello"+ name);
            greeting.position(130,160); 
        });
    }
}
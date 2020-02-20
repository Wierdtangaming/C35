class Player {
    constructor()  {

    }
    getCount() {
        var playercountref = database.ref('player_count');
        playercountref.on("value",function(data){
            player_count = data.val();
        });
    }

    updateCount(count) {
        database.ref('/').update({
            player_count : count
        }) ;
    }
    update(Name){
        var PlayerIndex = "player" + player_count;
        database.ref(PlayerIndex).set({
            name : Name
        });
    }
}
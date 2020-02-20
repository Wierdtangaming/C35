var  database;
var gameState,player_count;
var form,game,player;
gameState = 0;
player_count = 0;   
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();


}

function draw(){
  background("white");

}

'use strict'

 //globals (visable to all function)
 var game = new Phaser.game(320,568,Phaser.AUTO,'game'
  {preload:preload,create,update:update,render:render
 var background
 var flappers

 function preload() {
   game.load.image("background","assets/background.gif");
   game.load.image("flappers","assets/flappers.gif");

 }

 function create() {

 // turn on the background 
 background = game.add.tileSprite(0,0,320,568,"background");
 background.autoScroll(-100,0);

 // turn on physics, gravity, worldbounds
 game.physics.startSystem(Phaser.Physics.ARCADE);
 game.physics.enable(flappers, Phaser.Physics.ARCADE);
 flappers.body.gravity.y = 1000;
 flappers.body.collideWorldBounds = true;

 // spam space to flap
 game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
   .onDown.add(function () {
     flappy.body.velocity.y = -400;
 });
}

 function update() { }

 function render() { }

(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var Game = Hanoi.Game = function () {
    this.towers = [[3, 2, 1], [], []];
    this.startTowerIdx = undefined;
  };

  Game.prototype.isWon = function () {
    // move all the discs to the last tower
    return (this.towers[2].length == 3) || (this.towers[1].length == 3);
  };

  Game.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
    var startTower = this.towers[startTowerIdx];
    var endTower = this.towers[endTowerIdx];

    if (startTower.length === 0) {
      return false;
    } else if (endTower.length == 0) {
      return true;
    } else {
      var topStartDisc = startTower[startTower.length - 1];
      var topEndDisc = endTower[endTower.length - 1];
      return topStartDisc < topEndDisc;
    }
  };

  Game.prototype.move = function (startTowerIdx, endTowerIdx, callback) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());  
			callback();    
      return true;
    } else {
      return false;
    }
  };


  Game.prototype.takeTurn = function (start,end, callback){
    var game = this;

    if (game.move(start,end, callback)) {
      console.log(game.towers);
    } else {
      console.log("Invalid move!")
    }

    if (game.isWon()) {
      console.log("You win!");
    }
  }

})(this);


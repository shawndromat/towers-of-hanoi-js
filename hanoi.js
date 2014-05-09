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

  Game.prototype.move = function (startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      $disc = $("[data-id='"+(startTowerIdx)+"'] > .disc")[0];
      console.log($disc);
      $disc.remove();
      $("[data-id='"+(endTowerIdx)+"'] .pole").after($disc);
      this.renderDiscs();
      return true;
    } else {
      return false;
    }
  };

  // Game.prototype.run = function () {
  //   var game = this;
  //
  //   READER.question("Enter a starting tower: ",function (start) {
  //     var startTowerIdx = parseInt(start);
  //     READER.question("Enter an ending tower: ", function (end) {
  //       var endTowerIdx = parseInt(end);
  //       game.takeTurn(startTowerIdx,endTowerIdx);
  //     });
  //   });
  // };

  Game.prototype.renderDiscs = function () {
    console.log("Rendering Discs..")
    for(var i = 0; i < this.towers.length; i++) {
      var offset = this.towers[i].length * -50;
      // $('[data-id="1"] .disc').css('top', '-50px');
      $('[data-id="' + (i) + '"] .disc').css('top', offset + 'px');
    }
  }

  Game.prototype.takeTurn = function (start,end){
    var game = this;

    console.log(start+":"+end)
    if (game.move(start,end)) {
      console.log(game.towers);
    } else {
      console.log("Invalid move!")
    }

    if (game.isWon()) {
      console.log("You win!");
    }
  }

  Game.prototype.setUpHandlers = function () {
    var game = this;

    $('.tower').click(function () {
      if (game.startTowerIdx !== undefined) {
        game.takeTurn(game.startTowerIdx, parseInt($(this).data('id')));
        game.startTowerIdx = undefined;
      } else {
        game.startTowerIdx = parseInt($(this).data('id'));
        console.log(game.startTowerIdx);
      }
    });
  }


})(this);

// this.Hanoi.Game is a constructor function, so we instantiate a new object, then run it.

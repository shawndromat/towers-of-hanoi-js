(function(root) {
	
	var Hanoi = root.Hanoi = (root.Hanoi || {});
	
	var UI = Hanoi.UI = function (game) {
		this.game = game;
		this.startTowerIdx = undefined;
	}
	
	UI.prototype.setUpHandlers = function () {
	  var ui = this;

	  $('.tower').click(function () {
			var towerIdx = parseInt($(this).data('id'));
			
	    if (ui.startTowerIdx !== undefined) {
	      ui.game.takeTurn(ui.startTowerIdx, towerIdx, function () {
		      $disc = $("[data-id='"+ ui.startTowerIdx +"'] > .disc")[0];
		      $disc.remove();
		      $("[data-id='"+ towerIdx +"'] .pole").after($disc);
	      });
	      ui.startTowerIdx = undefined;
	    } else {
	      ui.startTowerIdx = towerIdx;
	      console.log(ui.startTowerIdx, towerIdx);
	    }
			ui.renderDiscs();
	  });
	}
	
  UI.prototype.renderDiscs = function () {
    console.log("Rendering Discs..")
    for(var i = 0; i < this.game.towers.length; i++) {
      var offset = this.game.towers[i].length * -50;
      $('[data-id="' + (i) + '"] .disc').css('top', offset + 'px');
    }
  }
	
}(this));


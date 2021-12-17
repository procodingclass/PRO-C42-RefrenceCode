class Player {
  constructor() {
    this.name = null;
    this.index = 0;
    this.distance = 0;
    this.positionX = 0;
    this.positionY = 600;
    this.rank = 0;
   }

  getCount() {
    var playerCountref = database.ref("playerCount");
    playerCountref.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }


  addPlayer() {
    var playerIndex = "players/player" + this.index;
    
    if (this.index === 1) {
      this.positionX = width / 2 - 320;
    } else if (this.index === 2) {
      this.positionX = width / 2 - 150;
    } else if (this.index === 3) {
      this.positionX = width / 2 + 150;
    } else if (this.index === 4) {
      this.positionX = width / 2 + 320;
    }
  
    console.log(playerIndex);
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      distance: this.distance,
    });
}

//Create a Static function to get all player's information

static getPlayersInfo() {
  var playerinforef = database.ref("players");
  playerinforef.on("value", data => {
    allplayers = data.val();
    console.log(allplayers)
  });
}

}

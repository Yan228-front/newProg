function createElement(tag, className) {
  const $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}
const iterator = (array) => {
  let index = 0;

  return () => {
    const value = array[index];

    if (index < array.length) {
      index++;
    }

    return value;
  };
}

class Players {

  constructor(playersCount = 4){
    this.playersCount = playersCount;
    this.activePlayer = 0;
    this.players = [];
    
  }

  
  updetePoints(){
    const activePlayer = this.getActivePlayer();
    let sum =0;
    for(let i = 0; i < activePlayer.hand.length; i++){ 
      
      sum+=activePlayer.hand[i].weight;
    }
    
    
   
    activePlayer.points = sum;
    //console.log(activePlayer);
  }

  nextPlayer(){
   
    return this.activePlayer++;
  }

  setCard(card){
    const activePlayer = this.getActivePlayer();
    activePlayer.hand.push(card);
  }

  getActivePlayer(){
    return this.players.find(p => p.id === this.activePlayer +1)
  }
  createPlayers(){
    for(let i = 0; i < this.playersCount; i++){
      this.players = [
        ...this.players,
        {id: i+1, hand: [], points: 0}
      ];
    }
  }
}



class Deck {
  constructor(){
    this.value = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
    this.suits = ["Diamonds", "Hearts", "Clubs", "Spades"];
    this.deck = [];
  }
  
  shuffle(){
    let j, temp;

    for(let i = this.deck.length - 1 ; i> 0 ; i--){
      
      j= Math.floor(Math.random() * (i + 1));
      temp = this.deck[j];
      this.deck[j] = this.deck[i];
      console.log(this.deck[i] = temp);
    }
    
  }

  getCart(){
    return this.deck.pop()
  }



  getWeight(value){
    switch (value){
      case "J":
      case "Q":
      case "K":
        return 10;
      case "A":
        return 11;
      default:
        return value;
    }
    
  }
  createDeck(){
    for(let i = 0; i<this.suits.length; i++){
      for(let j = 0; j<this.value.length; j++){
        
        this.deck = [
          ...this.deck,
          {suits: this.suits[i],
          value: this.value[j],
          weight: this.getWeight(this.value[j])}
        ] 
      }
    }
  }
}

class Game {
  constructor(){
    this.deck = new Deck();
    this.playersInstance = new Players(4);
    
    
  }

  // playerRender() {
  //   //const activePlayer = this.playersInstance.getActivePlayer();
  //   let players = this.playersInstance.players;

  //   const rootPlayer = document.getElementById("rootPlayers");
       
  
  //   let  playersDiv = createElement("div", "players");
  //   let  playersUl = createElement("ul");
  //   let  playerLi = createElement("li", 'player');

      
  //   players.forEach((player)=> {
  //     player.innerHTML = `<p>${player.id}<p>`;
  //   })
    
  //   playerLi.appendChild(players);
  //   playersUl.appendChild(playerLi);
  //   playersDiv.appendChild(playersUl);
  //   rootPlayer.appendChild(playersDiv);
      
    
  // }
  

  renderCard(item){
    let player = createElement("div", "player");
    player.id = item;
    
    playerTitle = createElement("p" ,"playerTitle");
    pleyerTitle.textContent = `player ${player.id}`;
    
    player.appendChild(playerTitle);
    
  }

  startGame(){
    
    this.deck.createDeck();
    this.deck.shuffle();
    this.playersInstance.createPlayers(this.deck);
    this.playersInstance.setCard(this.deck.getCart());
    console.log(this.playersInstance.players);
   
  }

  gameMore(){
    const activePlayer = this.playersInstance.getActivePlayer();

    this.playersInstance.setCard(this.deck.getCart());
    this.playersInstance.updetePoints();
    //console.log(this.playersInstance.length);
    
    
      if(activePlayer.points > 21){
       
        this.playersInstance.nextPlayer();
        
  
      }
    
  
    //console.log(this.playersInstance.getActivePlayer());
  }

  gameStay(){
    this.playersInstance.nextPlayer();
  }
}






const game = new Game();

game.startGame();
game.gameMore();

game.gameStay();
game.gameMore();
game.gameStay();
game.gameMore();



game.playerRender();








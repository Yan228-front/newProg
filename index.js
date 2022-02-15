function createElement(tag, className) {
  const $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

class Player {

  constructor(playerCount = 4){
    this.playerCount = playerCount;
    this.playerId = null;
    this.playerCart = null;
    this.activePlayer = null;
    this.player = null;
    this.activePlayer = null;
  }

  
  updetePoints(cartValue){
    let sum = 0;

    for(let i = 0; i<this.playerCart; i++){
      sum+=cartValue;
      
      if(sum > 21){
        console.log("GameOver");
      }
      else {
        
        return sum;
        
      }
    }
    console.log(sum);
  }
  createPlayer(playerCart){
    
    let players = [];

    for(let i = 0; i < this.playerCount; i++){
      this.player = {playerId: this.playerId++, playerCart: playerCart}
      players.push(this.player);
     
    }
    console.log(players);
  }
}

class RenderUi {
  constructor() {
    this.player = player;
  }

  playerRender() {
    let rootPlayer = document.querySelector("rootPlayers");

    let  players = createElement("div", "players");
    let  playersUl = createElement("ul");
    let  player = createElement("li", 'player');

    players.appendChild(playersUl);
    playersUl.appendChild(player);
    rootPlayer.appendChild(players);

    

  }
}

class Deck {
  constructor(){
    this.value = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
    this.suits = ["Diamonds", "Hearts", "Clubs", "Spades"];
    this.deck = [];
  }
  
  shuggle(){
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






const deck = new Deck();
deck.createDeck();
console.log(deck);


const player = new Player();
player.createPlayer(deck.getCart());
player.updetePoints(deck.getWeight());


const renderPlayer = new RenderUi();
renderPlayer.playerRender();

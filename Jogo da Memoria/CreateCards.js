const front="front"
const back="verso"
const ICON='icon'



start()

function start(){
    var cartas=game.creatnewCard();
    game.embaralhar(cartas)
    gerarcartas(cartas)
}



function gerarcartas(carta){
    let board=document.getElementById("gameboard")
        board.innerHTML=""
        carta.forEach(cartas=> {
        let cardElement=document.createElement('div')
        cardElement.id=cartas.id
        cardElement.classList.add('card') 
        cardElement.dataset.icon=cartas.icon
        creatCardContent(cartas,cardElement)

        cardElement.addEventListener('click',flip)
        board.appendChild(cardElement)
         

    });
}



function  creatCardContent(card,cardElement){
    creatCardFace(front,card,cardElement)
    creatCardFace(back,card,cardElement)
}



function creatCardFace(face,card,element){
let cardElementFace=document.createElement('div')
cardElementFace.classList.add(face)

if(face===front){
    let iconElement=document.createElement('img')
    iconElement.classList.add(ICON)
    iconElement.src="images/"+card.icon+".png"
    cardElementFace.appendChild(iconElement)
   //console.log(cardElementFace)
}else{
    cardElementFace.innerHTML='&lt/&gt'
}
    element.appendChild(cardElementFace)
}




function creatnewCard(techs){
 let cards=[]
 for(let tech of techs){
    cards.push(game.createDetailsTech(tech))
 }
 return cards.flatMap(pair => pair)
}




function createnewId(tech){
    return tech+parseInt(Math.random()*1000)
}



function flip(){
    
    if(game.setCards(this.id)) {

        this.classList.add("flip")
    if(game.secondCard){
        if(game.checkMatch()){
            game.clearCards()
            if(game.checkGameOver()){
                let gameover=document.getElementById("gameOver")
                gameover.style.display="flex" 
            }
        }else{
            setTimeout(()=>{
            let firstCardView = document.getElementById(game.firstCard.id)

            let secondCardView = document.getElementById(game.secondCard.id)

            firstCardView.classList.remove("flip")
            secondCardView.classList.remove("flip")
            game.unflippedCard()
              },650)
            }} 
                    
    }}

    function restart(){
        game.clearCards()
        start()
        let gameover=document.getElementById("gameOver")
        gameover.style.display="none"
    }
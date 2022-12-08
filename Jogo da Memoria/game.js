
let game={

    techs:[
        "bootstrap",
        "javaScript",
        "css",
        "html",
        "mongodb",
        "jquery",
        "electron",
        "react",
        "nodejs",
        "firebase"
    ],
    cartas:null,



    lockMode:false,



    firstCard:null,



    secondCard:null,



    setCards:function(id){
        let card=this.cards.filter(cards=>cards.id===id)[0]
        console.log(card)
        if(card.flipped || this.lockMode){
            return false
        }
        if(!this.firstCard){
            this.firstCard=card
            this.firstCard.flipped=true
            return true
        }else{
            this.secondCard=card
            this.secondCard.flipped=true
            this.lockMode=true
            return true
        }
    },



    checkMatch:function(){
        if(!this.firstCard || !this.secondCard){
            return false
        }
        return this.firstCard.icon===this.secondCard.icon
        
    },



    clearCards:function(){
        this.firstCard=null
        this.secondCard=null
        this.lockMode=false
    },
    

    
    unflippedCard:function(){
        this.firstCard.flipped=false
        this.secondCard.flipped=false
        this.clearCards()
    },



    checkGameOver:function(){

       return this.cards.filter(card=>!card.flipped)==0
    },
    
    

    creatnewCard:function (){
        this.cards=[]
        this.techs.forEach((tech)=> {
           this.cards.push(this.createDetailsTech(tech))
        })
        this.cards=this.cards.flatMap(pair => pair)
        this.embaralhar()
        return this.cards
},


    createDetailsTech:function(tech){
    return[
        {id:this.createnewId(tech),
        icon:tech,
        flipped:false},

        {id:this.createnewId(tech),
        icon:tech,
        flipped:false}
    ]
}, 



    createnewId:function(tech){
    return tech+parseInt(Math.random()*1000)
},


embaralhar:function (cards){
    let currentIndex=this.cards.length
    let ramdonIndex=0

    
    while(currentIndex !== 0){
        ramdonIndex=Math.floor(Math.random() * currentIndex)
        currentIndex--

        [this.cards[ramdonIndex] , this.cards[currentIndex]] = [this.cards[currentIndex] , this.cards[ramdonIndex]]
    }
    
    
}

    
}


var cards=document.querySelectorAll('.card-1')
var texts=document.querySelectorAll('.texts')
var currentCard=cards[0]

cards.forEach((card)=>{
    card.addEventListener('click', ()=>{
        var show=card.querySelector('.texts')
        if(card==currentCard){
            show.classList.remove('show')
        }
        else{
            texts.forEach((text)=>{
                text.classList.remove('show')
            })
            
            show.classList.add('show')
            currentCard=card
        }
        
    })
})

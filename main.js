

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

var form = document.getElementById("trial-form");
var confirmationMessage = document.getElementById("confirmation-message");


form.addEventListener("submit", function (event) {
    event.preventDefault(); 

   
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;
    const launch = document.getElementById("launch").value;

    if (company && email && launch) {
       
        confirmationMessage.style.display = "block";

       
        form.style.display = "none";
    }
});
const contactForm = document.getElementById("contact-us");
const confirmation = document.getElementById("contact-success");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

  
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const launch = document.getElementById("launch").value;
    const message = document.getElementById("message").value;

    
    if (name && phone && email && launch && message) {
        
        confirmation.style.display = "block";

        
        contactForm.style.display = "none";
    } 
});

// Variables

const quoteBtn = document.querySelector("button");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [{
    quote: ` "It is important to keep an inner sense of calm. When dark stormy clouds of doubts, anger and worry are
            creeping in, always remind yourself that nothing lasts. Every storm shall pass. The almighty is testing you
            and wii continue to do so until you lay your trust in him." `,
    person: `Mufti Menk`        
},
{
    quote: `"If exposure of the body is modernism, then animals are more modern than humans."`,
    person: `Dr Zakir Naik`
},
{
    quote: `"When ignorance is passed down for along time without giving it a second thought, 
            it leads to evil because you are doing it without knowledge."`,
    person: `Nouman Ali Khan`        
},
{
    quote: `"Decisions become easier when your will to please Allah outweighs your will to please the world." `,
    person: `Khalid Yasin`
},
{
    quote: `"Do not be a slave to others when Allah has created you free."`,
    person:`Ibn Taymiyyah`
},
{
    quote: `"The soul will never become pious and purified except it undergoes afflictions.
            Therfore, it is in the best interest of the soul that the commanding self should break,
            and the person should be afflicted with trials."`,
    person: `Ibn Qayyim al-Jazwiyya`
},
{
    quote: `"Knowledge enlivens the soul."`,
    person: `Imam Ghazali`
},
{
    quote: `"The first step of aquisition of knowledge is silence, the second listening, the third memory,
            the fourth practice, and the fifth teaching others."`,
    person: `Ibn Sina (Avicenna)`        
},
{
    quote: `"Ignorance leads to fear, fear leads to hatred, hatred leads to violence. This is the equation."`,
    person: `Ibn Rushud (Averroes)`
},
{
    quote: `"A strong person is not the good wrestler. Rather, a strong person is the one who controls himself
            when he is angry."`,
    person: `Imam Nawawi`        
},];


quoteBtn.addEventListener("click", function(){
     let random = Math.floor(Math.random() * quotes.length);


     quote.innerText = quotes[random].quote;
     person.innerText = quotes[random].person;
})
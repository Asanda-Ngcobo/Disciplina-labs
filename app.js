
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let textArea = document.querySelector('.text-area');

const quotes = [{
    quote: `"Education is the most powerful weapon which you can use to change the world."`,
    person: `Nelson Mandela`
},
{
    quote: `"Education is our passport to the future, for tomorrow belongs to the people who prepare for it today."`,
    person: `Malcolm X`
},
{
    quote: ` "The beautiful thing about learning is that no one can take it away from you."`,
    person: `NB.B. King`
},

{
    quote: ` "Education is not the learning of facts, but the training of the mind to think."`,
    person: `Albert Einstein`
},
{
    quote: ` "Education is the key to unlocking the world, a passport to freedom."`,
    person: `Maya Angelou`
},
{
    quote: ` "Do not train children in learning by force and harshness, but direct them to it by what amuses their minds, so that you may be better able to discover with accuracy the peculiar bent of the genius of each."`,
    person: `Plato`
},
{
    quote: ` "Education is not the filling of a pail, but the lighting of a fire."`,
    person: `William Butler Yeats`
},
{
    quote: `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
    person: `Mahatma Gandhi`
},

{
    quote: ` "Educating the mind without educating the heart is no education at all."`,
    person: `Aristotle`
},

]

setInterval(function() {

    let random = Math.floor(Math.random() *quotes.length);
    quote.innerText =quotes[random].quote;
    person.innerText =quotes[random].person;
   
}, 6000)


//Creating and inserting elements

const message = document.createElement('div'); //create a div elemetnt
message.classList.add('announcement-message');

message.innerHTML = `<p>It is true, Practice makes perfect. Try
<a href="https://disciplina.co.za/" class="disciplina_link" target="_blank"> Disciplina</a>
today to learn and practice math and physics problems for free!!</p>`;

const header = document.querySelector('.header');

//insert at the top
header.prepend(message);


//Insert at the bottom
// header.append(message);


//Smooth scrolling

const desciplina = document.querySelector('.desciplina');
// desciplina.addEventListener('wheel', function(e){
//     const s1coords = desciplina.getBoundingClientRect();
//     console.log(s1coords); //X/Y coordinates of desciplina from the top

//     const headerCoords = header.getBoundingClientRect()
//     console.log(headerCoords); 
//     console.log(e.target.getBoundingClientRect()) //X/Y coordinates of header from the top

//     console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//     console.log('height/width viewpoint',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth);

//     //scrolling

//     // window.scrollTo(
//     //     s1coords.left + window.pageXOffset,
//     //     window.top + window.pageYOffset,
//     // );

//     window.scrollTo({
//         left: s1coords.left + window.pageXOffset,
//         top: window.top + window.pageYOffset,
//         behavior: 'smooth',
        
// });
        
// // desciplina.scrollIntoView({behavior: 'smooth'});
// })

// const randomInt = (min, max) => 
// Math.floor(Math.random() * (max - min +1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)} )`

// document.querySelector('.nav__link').addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('LINK')
// })


//Passing 'argument' into handler

const nav = document.querySelector('.nav');
// nav.addEventListener('mouseover', handleHover.bind(0.5));
// nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky navigation
// const initialCoords = desciplina.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function(){
// console.log(window.scrollY);


// if(window.scrollY > initialCoords.top) //if window.scrollY > initialCoords.top (800)
//     nav.classList.add('sticky');
// else nav.classList.remove('sticky');

// });

//The intersection of serve API

// const obsCallBack = function (entries, observer){
//     entries.forEach(entry => {
//         console.log(entry)
//     });
// }
// const obsOptions = {
//     root: null,
//     threshold: [0, 0.2],
// }
// const observer = new IntersectionObserver(obsCallBack, obsOptions);

// observer.observe(desciplina);

const stickyNav = function(entries){
    const [entry] = entries;
    console.log(entries);

    if(!entry.isIntersecting)
    nav.classList.add('sticky');
else nav.classList.remove('sticky');
}
const headerObserver = new IntersectionObserver(stickyNav,{
    root: null,
    threshold: 0.8,
});
headerObserver.observe(header)

//reveal sections

const allSections = document.querySelectorAll('.section');
const revealSection = function(entries, observer){
const [entry] = entries;

entry.target.classList.remove('section--hidden');
}

const sectionObserver = new IntersectionObserver(revealSection, {
root: null,
threshold: 0.15,
})
allSections.forEach(function(section){
sectionObserver.observe(section)
});

let thisYear = new Date().getFullYear();

document.querySelector(".current_year").textContent = thisYear;

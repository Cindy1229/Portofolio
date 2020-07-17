const hero=document.querySelector(".hero");
const slider=document.querySelector("#particles-js");
const logo=document.querySelector("#logo");
const headline=document.querySelector(".headline");

const proc=document.querySelector(".project");
const contact=document.querySelector(".contact");
const about=document.querySelector(".about");


const tl=new TimelineMax({onComplete:function(){
    //this.restart();
}});

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: '100%'}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: '-100%'}, {x: '0%',ease: Power2.easeInOut},'-=1.2')
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 0.8, x: 0})
.fromTo(proc, 0.5, {opacity: 0, x: 30}, {opacity:0.8, x:0}, '-=0.5')
.fromTo(contact, 0.5, {opacity: 0, x: 30}, {opacity:0.8, x:0}, '-=0.5')
.fromTo(about, 0.5, {opacity: 0, x: 30}, {opacity:0.8, x:0}, '-=0.5')

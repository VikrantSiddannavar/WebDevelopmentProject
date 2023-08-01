// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnime(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            y: '0',
            ease: Expo.easeInOut,
            duration:1.5,
            delay: -1,
            stagger: .2
        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.3,
            ease: Expo.easeInOut,
            delay: -1
        })
        
}

// var timeout;
// function mouseChaptaKaro(){
//     //define defalut scale value
//     var xscale = 1;
//     var yscale = 1;
//     var xprev = 0;
//     var yprev = 0;

//     window.addEventListener("mousemove", function(dets){
//         // clearTimeout(timeout);
//         // xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
//         // yscale = gsap.utils.clamp(.8, 1.2, dets.clienty - yprev);
//         // xprev = dets.clientX;
//         // yprev = dets.clienty;

//         circleMouseFollower(xscale, yscale);
//     //     timeout = setTimeout(function() {
//     //         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
//     //     }, 100);
//     });
// }

// mouseChaptaKaro();

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
circleMouseFollower();
firstPageAnime();

// teeno element ko select karo, uske baad teeno per ek mousemove lagao,
// jab mousemove ho toh ye pata karo ki mouse kaha per hai, jiske matlab hai
// mouse ki x & y position pata karo, ab mouse ki x,y position ke badle uss
// image ko show karo & uss image ko move karo, move karte waqt rotate karo,
// and jaise jaise mouse tez chale waise waise rotation bhi ho jaye...

document.querySelectorAll(".elem")
.forEach(function(elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5
        });
    })    
    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffrot * 0.5)
        });
    })    
});
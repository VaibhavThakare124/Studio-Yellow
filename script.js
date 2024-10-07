// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotiveAnimation()



function toplogoAnimation(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 10%",
            end: "top -5%",
            scrub: 2,
            // markers: true,
        }
    })

    tl.from("#topLogo img", {
        z: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        scale: 3,
        transformOrigin: "50% 50%",
        
    })
}

toplogoAnimation()

function page1Animation(){
    gsap.from("#bg-video img",{
        z: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        scale: 3,
        transformOrigin: "50% 50%",
    })
}
page1Animation()



function page2Animation(){
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 10%",
            end: "top -5%",
            scrub: 2,
            // markers: true,
            
        }
    })

    tl1.from("#page2 h1",{
        y: 50,
        scale: 0.1,
        transformOrigin: "50% 50%",
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
    })

    tl1.from("#page2-part2 p",{
        y: 50,
        scale: 0.1,
        transformOrigin: "50% 50%",
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
    })
}

page2Animation()

function videoCursor(){
    var main = document.querySelector("#main")
    var cursor = document.querySelector("#cursor");
    var page3div = document.querySelector("#page3");


    main.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
            left: dets.x,
            top: dets.y,
            duration: 0.6,
        });
    });

    page3div.addEventListener("mouseenter", function(){
        cursor.innerHTML = "PLAY"
        gsap.to(cursor,{
            scale: 3,
            backgroundColor: "#ffffff8a"
        });
    });

    page3div.addEventListener("mouseleave", function(){
        cursor.innerHTML = ""
        gsap.to(cursor,{
            scale: 1,
            backgroundColor: "#fff"
        });
    });

    

}
videoCursor()

function page4Animation(){

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 10%",
            end: "top -5%",
            scrub: 2,
            // markers: true,
        }
    })

    tl2.from("#page4-part1 h1",{
        x: -100,
        opacity: 0,
        duration: 0.5,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        // stagger: 0.05,
    })

    tl2.from("#page4-part1 p",{
        x: 100,
        opacity: 0,
        duration: 0.5,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        // stagger: 0.05,
    })

}
page4Animation()


function page4box1part2Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top -70%",
            end: "top -70%",
            scrub: 2,
            // markers: true,
        }
    })

    tl3.from("#page4-part2 #box1 h3",{
        x: -100,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        opacity: 0,
        duration: 0.5,
        // stagger: 0.05,
    })

    tl3.from("#page4-part2 #box1 p",{
        x: -100,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        opacity: 0,
        duration: 0.5,
        // stagger: 0.05,
    })

    tl3.from("#page4-part2 #box1 #viewbutton",{
        x: 100,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        opacity: 0,
        duration: 0.5,
        // stagger: 0.05,
    })
}
page4box1part2Animation()


function page4box2part2Animation(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top -70%",
            end: "top -70%",
            scrub: 2,
            // markers: true,
        }
    })

    tl4.from("#page4-part2 #box2 h3",{
        x: -100,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        opacity: 0,
        duration: 0.5,
        // stagger: 0.05,
    })

    tl4.from("#page4-part2 #box2 p",{
        x: -100,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        opacity: 0,
        duration: 0.5,
        // stagger: 0.05,
    })

    tl4.from("#page4-part2 #box2 #viewbutton2",{
        x: 100,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        opacity: 0,
        duration: 0.5,
        // stagger: 0.05,
    })
}
page4box2part2Animation()


function page5Animation(){

    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            start: "top 10%",
            end: "top -5%",
            scrub: 2,
            // markers: true,
        }
    })

    tl5.from("#para #paraP1 p",{
        x: -100,
        opacity: 0,
        duration: 0.5,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        stagger: 1,
    })

    tl5.from("#para #paraP2 p",{
        x: 100,
        opacity: 0,
        duration: 0.5,
        scale: 0.1,
        transformOrigin: "50% 50%",
        // stagger: 0.05,
    })

}
page5Animation()


function page6Animation(){

    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            start: "top 10%",
            end: "top -5%",
            scrub: 2,
            // markers: true,
        }
    })

    tl6.from("#page6-part1 h1",{
        x: -100,
        opacity: 0,
        duration: 0.5,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        // stagger: 0.05,
    })

    tl6.from("#page6-part1 p",{
        x: 100,
        opacity: 0,
        duration: 0.5,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        // stagger: 0.05,
    })

}
page6Animation()




function page7Animation() {

    var tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page7",
            scroller: "#main",
            start: "top 10%",
            end: "top -5%",
            scrub: 2,
            // markers: true,
        }
    })

    tl7.from("#page7-part1 h1",{
        x: -100,
        opacity: 0,
        duration: 0.5,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        // stagger: 0.05,
    })

    tl7.from("#page7-part1 p",{
        x: 100,
        opacity: 0,
        duration: 0.5,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        // stagger: 0.05,
    })


    var line1Ani = document.querySelector("#line1");
    
    // Ensure you are calculating the scrollWidth from the correct element
    var trackWidth = line1Ani.scrollWidth;

    gsap.to(line1Ani, {  // Use the variable directly, not as a string
        x: -trackWidth / 2, // Move the track to the left
        duration: 50,       // Duration of the animation
        repeat: -1,         // Infinite repeat
        ease: "none",       // Linear movement
    });
}

page7Animation();



function page8Animation() {

    var tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page8",
            scroller: "#main",
            start: "top 10%",
            end: "top -5%",
            scrub: 2,
            // markers: true,
        }
    })

    tl8.from("#page8-part1 h1",{
        x: -100,
        opacity: 0,
        duration: 0.5,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        // stagger: 0.05,
    })

    tl8.from("#page8-part1 p",{
        x: 100,
        opacity: 0,
        duration: 0.5,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        // stagger: 0.05,
    })
}
page8Animation()


function page9Animation(){

    var tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page9",
            scroller: "#main",
            start: "top 10%",
            end: "top -5%",
            scrub: 2,
            // markers: true,
        }
    })

    tl9.from("#page9-part1 h1",{
        x: -100,
        opacity: 0,
        duration: 0.5,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        // stagger: 0.05,
    })

    tl9.from("#page9-part1 p",{
        x: 100,
        opacity: 0,
        duration: 0.5,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        // stagger: 0.05,
    })

    


}
page9Animation()

function page9part2Animation(){

    var tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page9",
            scroller: "#main",
            start: "top 10%",
            end: "top -5%",
            scrub: 2,
            // markers: true,
        }
    })

    tl9.from("#page9-part2 p",{
        x: -150,
        opacity: 0,
        duration: 2,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        stagger: 1,
    })

}
page9part2Animation()

function page10Animation(){

    var tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page10",
            scroller: "#main",
            start: "top 30%",
            end: "top 20%",
            scrub: 2,
            // markers: true,
        }
    })

    tl10.from("#page10",{
        y: 100,
        opacity: 0,
        duration: 1,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        stagger: 1,
    })

}

page10Animation()


function page11Animation(){

    var tl11 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page11",
            scroller: "#main",
            start: "top 50%",
            end: "top 50%",
            scrub: 2,
            // markers: true,
        }
    })

    tl11.from("#page11 p",{
        y: 100,
        opacity: 0,
        duration: 1,
        scale: 0.1,
        transformOrigin: "50% 50%",
        stagger: 0.1,
    })

}

page11Animation()


function lastpageAnimation(){

    var tl12 = gsap.timeline({
        scrollTrigger: {
            trigger: "#lastpage",
            scroller: "#main",
            start: "top 10%",
            end: "top 10%",
            scrub: 2,
            // markers: true,
        }
    })

    tl12.from("#lastpage #part1 img",{
        y: 80,
        opacity: 0,
        duration: 0.5,
        // scale: 0.1,
        // transformOrigin: "50% 50%",
        // stagger: 0.1,
    })

}

lastpageAnimation()











// ctrl D for select same word at the same time 
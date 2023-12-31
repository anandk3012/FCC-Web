

gsap.registerPlugin(ScrollTrigger);
gsap.from(".titlecard", { 
    duration: 1,
     y: "40", 
     opacity: 0 })
gsap.from(".horizon-card", { 
    duration: 1, 
    y: "40",
     opacity: 0 })
gsap.from(".quote-span", { 
    duration: 1, 
    y: "40",
    opacity: 0,
    stagger: 0.5,
scrollTrigger:'.quote' })
gsap.from(".arrow", { 
    duration: 1, 
    x: "-60", 
    y: "60",
    opacity: 0, 
    scrollTrigger:'.quote'
})




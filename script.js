var tl = gsap.timeline()

tl.from(" #nav, #btn2, #btn3, #btn4, #nav h3,#nav h4 , #nav button",{
  y:-100,
  duration:1,
  delay:1,
  opacity:0,
  stagger:0.5
})

tl.from("#box h1",{
  y:200,
 
  opacity:0,
 
  stagger:0.3,
})
tl.from(" #btn2, #btn3, #btn4",{
  scale:0,
  stagger:0.3
 
})

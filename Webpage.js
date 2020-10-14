const tl = gsap.timeline({default: {ease : "power1.out"}});//make the homepage fade in animation

tl.to('.text', {y: "0%", duration: 1, stagger: 0.3});
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.3});
tl.to('.intro', {y: "-100%", duration:1.5}, "-=1.4");
tl.fromTo('.words',{opacity:0},{opacity:1, duration: 1.2, delay:0.1}, "-=0.1");

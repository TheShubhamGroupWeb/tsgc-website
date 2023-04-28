
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

}


// XX responsive mobile navbars ends here XX



// change navbar style on scroll
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('window-scroll', window.scrollY > 100)
  })


gsap.from("#home-content-h", {duration: 2.5, x: -900, ease: "ease",
// repeat: -1,
delay: 1,
// yoyo: true,
// rotate:("30deg"),
fontWeight: 700,
margin: 2,
padding: 2
})



gsap.from("#of-companies", { 
    duration: 2.5,
    // backgroundColor: '#8d3dae',
    // rotate:("360deg"),
    x: -700,
    delay: 1.5,
    ease: "linear"

  });

// gsap.from('#home-content-h', {
//   duration: 2.5,
//   delay: 3.5,
//   x: 1500,
//   scale: 3,
//   color: green,
// })


gsap.from("#what-we-do", { 
    duration: 3.5,
    // backgroundColor: '#8d3dae',
    // rotate:("360deg"),
    x: -900,
    delay: 3.5,
    ease: "linear"
  });
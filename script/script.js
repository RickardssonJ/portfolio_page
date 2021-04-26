document.addEventListener("DOMContentLoaded", function (event) {
  const hamburger = document.getElementById("hamburger")
  const navMobile = document.querySelector(".navMobile")

  hamburger.addEventListener("click", () => {
    document.querySelector(".navMobile").classList.toggle("active")
  })

  //When cklicing on the the navMobile div the nav bar will unhide and hide
  navMobile.addEventListener("click", () => {
    document.querySelector(".navMobile").classList.toggle("active")
  })

  // When the user scrolls down, the function will hide the nav bar and when the user scrolls up the function will show the navbar

  let startScrollpos = window.pageYOffset

  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset
    if (startScrollpos > currentScrollPos) {
      document.getElementById("navBar").style.top = "0"
    } else {
      document.getElementById("navBar").style.top = "-50px"
    }
    startScrollpos = currentScrollPos
  }

  if (window.innerWidth > 400) {
    //Slide my name and webdeveloper
    gsap.from(".myNameIs", { duration: 1.5, x: "-100%", ease: "power4" })
    gsap.from(".webDeveloper", { duration: 1.5, x: "+100%", ease: "power4" })
    //ABout me page
    gsap.from(".knowledge", {
      duration: 1,
      scrollTrigger: ".knowledge",
      opacity: "0",
    })

    gsap.from(".knowledgeP", {
      duration: 1,
      scrollTrigger: ".knowledgeP",
      opacity: "0",
      stagger: 0.2,
    })

    gsap.from(".aboutMeText", {
      scrollTrigger: ".aboutMeText",
      x: "-150%",
      duration: 0.9,
      opacity: "0",
    })

    //Portfolio page

    gsap.from(".pOne", {
      scrollTrigger: ".pOne",
      x: "-150%",
      duration: 0.8,
    })

    gsap.from(".pTwo", {
      scrollTrigger: ".pTwo",
      opacity: 0,
      duration: 2,
    })

    gsap.from(".pThree", {
      scrollTrigger: ".pThree",
      x: "+150%",
      duration: 0.8,
    })

    //Contact

    gsap.from(".contactText", {
      duration: 1,
      scrollTrigger: ".contactText",
      opacity: "0",
      stagger: 0.2,
    })

    gsap.from(".gsapAnimation", {
      scrollTrigger: ".gsapAnimation",
      x: "-1000%",
      opacity: "0",

      stagger: 0.2,
    })
  }

  //////////////// Mobile nav animation ////////////////
  mobileAnimation = () => {
    let mobileNavLinks = document.getElementById("hamburger")
    let mobileLinks = document.getElementsByClassName("mobileLinks")
    let aTags = Array.from(mobileLinks)
    let bool = false
    let mobileNavToggler = () => {
      if (bool === false) {
        gsap.to(".one", {
          duration: 0.2,
          rotate: "45deg",
        })
        gsap.to(".two", {
          duration: 0.2,
          top: "4%",
          left: "15%",
          rotate: "-45deg",
        })
        gsap.to(".three", {
          duration: 0.2,
          opacity: 0,
        })
        gsap.from(".mobileLinks", {
          opacity: 0,
          duration: 1,
          delay: 0.3,
          stagger: 0.1,
        })
        bool = true
      } else {
        gsap.to(".one", {
          duration: 0.2,
          top: "45%",
          left: "22%",
          rotate: "0deg",
        })
        gsap.to(".two", {
          duration: 0.2,
          top: "25%",
          left: "22%",
          rotate: "0deg",
        })
        gsap.to(".three", {
          duration: 0.2,
          top: "25%",
          left: "22%",
          opacity: 1,
        })
        bool = false
      }
    }
    //So the hamburger colapses when a link is clicked
    aTags.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNavToggler()
      })
    })
    mobileNavLinks.addEventListener("click", () => {
      mobileNavToggler()
    })
  }
  mobileAnimation()
  ////////////////////////////
})

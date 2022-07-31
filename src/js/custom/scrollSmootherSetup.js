// create the scrollSmoother before your scrollTriggers
let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    // normalizeScroll: true,   
    ignoreMobileResize: true,
    // smooth: 0.5,               // how long (in seconds) it takes to "catch up" to the native scroll position
    // effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});


ScrollTrigger.matchMedia({
    // Desktop
    "(min-width: 769px)": function() {
        smoother.effects(".infoCard", {
            speed: 1,
            lag: (i) => i*0.2
        })
    },
  
    // Mobile
    "(max-width: 768px)": function() {

    },
      
    // all 
    "all": function() {
        let findOutMoreBtn = document.querySelector(".findOutMoreBtn")
        findOutMoreBtn.addEventListener("click", () => smoother.scrollTo(".infoCard", true, "center center"));
    }
}); 
// self executing function here
(function() {
    // your page initialization code here
    // the DOM will be available here
 
     const elem = document.querySelector('.video__description')
     const video = document.querySelector('.video')
     console.log(video);
     
     function playVid() {
         video.play();
         console.log('Am just playing dawg');
     }
 
     function pauseVid() {
         video.pause();
         console.log('I am paused dawg');
     }
 
     elem.addEventListener('click', function () {
       // do something
       playVid();
       elem.classList.add('hide')
       console.log('It has been clicked')      
     })
 
     video.classList.add("hide");
 
     // Mobile Navigation
     let mainNav = document.querySelector('.main__nav');
     let navBarToggle = document.querySelector('.toggle');
     let viewFull = document.querySelector('.full');
     let viewCompact = document.querySelector('.compact');
     let componentSelector = document.querySelector('.component');
     
     
     navBarToggle.addEventListener('click', function () {
       console.log(mainNav);
       mainNav.classList.toggle('open');
     });
     
     navBarToggle.addEventListener('click', function () {
       console.log(mainNav);
       mainNav.classList.toggle('open');
     });
 
     viewCompact.addEventListener('click', function () {
       console.log(viewCompact)
       componentSelector.classList.add('compact');
 
       if (componentSelector.classList.contains("full")) {
         componentSelector.classList.remove('full');
       }
       
     });
 
     viewFull.addEventListener('click', function () {
       console.log(viewFull)
       componentSelector.classList.add('full');
       if (componentSelector.classList.contains("compact")) {
         componentSelector.classList.remove('compact');
       }
     });
 
 })();
 
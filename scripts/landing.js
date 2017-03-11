var pointsArray = document.getElementsByClassName('point');

var revealPoint = function() {
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
};
var animatePoints = function() {
    forEach(pointsArray, revealPoint);
};
    
window.onload = function() {
    // Automatically animate points on a tall screen scrolling can't trigger the animation
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
    
     window.addEventListener('scroll', function(event) {
         if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });
 } 
    
     

     
    
    
    
    
    
   

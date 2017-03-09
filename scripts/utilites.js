var pointsArray = document.getElementsByClassName('point');

function forEach(pointsArray, callback){
   for(var i = 0; i < pointsArray; i++){
       callback(pointArray[i]);
   } 
}

var revealPoint = function(index) {
        points[index].style.opacity = 1;
        points[index].style.transform = "scaleX(1) translateY(0)";
        points[index].style.msTransform = "scaleX(1) translateY(0)";
        points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
        for(var i = 0; i < points.length; i++){
            revealPoint(i);

forEach(pointsArray, revealPoints);
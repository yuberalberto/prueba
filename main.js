var button = document.getElementById("clickme"); 
var span = document.getElementById("counter"); 

//This code work as counter but has a problem: The global var can be modified by any other script or window.
/* var count = 0;
button.onclick = function() {
    counter += 1;
    span.innerHTML = " "+count;
}; */

//The code below is a safer way of implement counters and in general to implement private variables.
var add = (function () {
    var count = 0;
    return function () {
        count += 1; 
        return count;}
    })();

button.onclick = function(){
    span.innerHTML = add();
};
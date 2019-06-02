let names = ["Katrin","Nizar","Richard","Salva","Trine","Tom","Dennis","Adrian","Arturo","Joseph","Lara","Vassia","Johnny","Leonard","Nike"];

let i = 0;

//button elements & names display
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const headerOne = document.getElementById('headerNames');

// start button & name shuffle
startButton.addEventListener('click', function() {
	this.style.display = "none";
	stopButton.style.display = "block";
	intervalHandle = setInterval(function () {
		headerNames.textContent = names[i++ % names.length];
    }, 50);
});
// name pick & stop shuffle
stopButton.addEventListener('click', function() {
	this.style.display = "none";
	startButton.style.display = "block";
    clearInterval(intervalHandle);
});




//kick out already picked names & add them back if there are no more names

/*
for (let n = 0; n <= names.length; n++) {
    if ( names[n] === 0) {
        names.splice(n, 1); 
        n--;
      } else if ( names[n] === 1) {
        names.splice(n, 1); 
        n--;
      }else if ( names[n] === 2) {
        names.splice(n, 1); 
        n--;
      }else if ( names[n] === 3) {
        names.splice(n, 1); 
        n--;
      }else if ( names[n] === 4) {
        names.splice(n, 1); 
        n--;
      }else if ( names[n] === 5) {
        names.splice(n, 1); 
        n--;
      }else if ( names[n] === 6) {
        names.splice(n, 1); 
        n--;
      }else if ( names[n] === 7) {
        names.splice(n, 1); 
        n--;
      }else if ( names[n] === 8) {
        names.splice(n, 1); 
        n--;
      }else if ( names[n] === 9) {
        names.splice(n, 1); 
        n--;
      }else if ( names[n] === 10) {
        names.splice(n, 1); 
        n--;
      }else if ( names[n] === 11) {
        names.splice(n, 1); 
        n--;
      }else if ( names[n] === 12) {
        names.splice(n, 1); 
        n--;
      }else if ( names[n] === 14) {
        names.splice(n, 1); 
        n--;
      } 
      else{
          //add all the names back;
      }
        
} */  


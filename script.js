// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues333
const nextClueWaitTime = 1000; //1000how long to wait before starting playback of the clue sequence
var guessCounter = 0;
//Global Variables
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var rand = [];
var volume = 0.5;  //must be between 0.0 and 1.0

function generateRandom(min = 1, max = 8) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);
  

    // add with min value 
    rand = rand + min;

    return rand;
}
function startGame(){ 
  for (let i = 0; i < 8; i++) {
    rand.push(generateRandom()); 
  }
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden"); 
  playClueSequence(); 
}
function stopGame(){
    //initialize game variables
    gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden");
}
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 301.6,
  6: 399.6,
  7: 412,
  8: 536.2,
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0; 
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + rand[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,rand[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won, Hooray!");
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if(rand[guessCounter] == btn){
    if(guessCounter == progress) {
    if (progress == rand.length - 1) {
      winGame();
    } else {
      progress++;
      playClueSequence(); 
    }
  }
  else {
    guessCounter++;
    
  }
  }else {
      loseGame();
    }
  
  // add game logic here
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

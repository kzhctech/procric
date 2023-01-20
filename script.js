var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


var msg = new SpeechSynthesisUtterance();
function play(txt){
msg.text = txt;
window.speechSynthesis.speak(msg);
}


var bg = document.querySelector('html');


document.querySelector('#vcm').onclick = function Vcm() {
  recognition.start();
  console.log('Ready to receive a color command.');
  play('Say');
}



recognition.onresult = function(event) {
 var diagnostic;
  var textTold = event.results[0][0].transcript;
  diagnostic = 'Result received: ' + textTold + '.';
  play(textTold);
  console.log(diagnostic);
  
  var pitched;
  
  if(textTold.includes('inline') || textTold.includes('in line')){
    console.log('inline it is');
    pitched = "inline";
  }
  
  if(textTold.includes('leg') || textTold.includes('outside leg')){
    console.log('inline it is');
    pitched = "leg";
  }
  
  if(textTold.includes('of') || textTold.includes('outside of')){
    console.log('inline it is');
    pitched = "";
  }
  
  
  if(textTold.includes('your car')){
    console.log('ok');
    Yourker(pitched);
  }
  
  if(textTold.includes('plot') || textTold.includes('slot')){
    console.log('ok');
    Slot(pitched);
  }
  
  if(textTold.includes('length')){
    console.log('ok');
    Length(pitched);
  }
  
  if(textTold.includes('short')){
    console.log('ok');
    Short(pitched);
  }
  
  console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  console.log('no')
}

recognition.onerror = function(event) {
  console.log(event.error);
}

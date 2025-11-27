
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");


var lyricsData = [

];


function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);


    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
   
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}


setTimeout(ocultarTitulo, 216000);
var playButton = document.getElementById("playButton");
var audio = new Audio('music/dua-lipa-swan-song.mp3');
var isPlaying = false;
var myVideo=document.getElementById("video1"); 
// Array of characters
var characters = [
    { name: "Alita", role: "Protagonist" },
    { name: "Hugo", role: "Protagonist" },
    { name: "Dr. Dyson Ido", role: "Protagonist" },
    { name: "Vector", role: "Antagonist" },
    { name: "Zapan", role: "Antagonist" }
  ];
  var originalCharacters = JSON.parse(JSON.stringify(characters));

  // Function to filter characters based on role
  function filterCharacters(role) {
    var filteredCharacters = characters.filter(function(character) {
      return character.role === role;
    });

    displayCharacters(filteredCharacters);
  }
  function returnCharacters() {
    characters = JSON.parse(JSON.stringify(originalCharacters));
    displayCharacters(characters);
  }

  // Display the characters
  function displayCharacters(characters) {
    var resultElement = document.getElementById("result");

    // Build the HTML content
    var content = "<ul>";
    characters.forEach(function(character) {
      content += "<li>" + character.name + "</li>";
    });
    content += "</ul>";

    // Update the result element with the new content
    resultElement.innerHTML = content;
  }
  

  // Display all characters initially
  displayCharacters(characters);
  setTimeout(function() {
    alert('Привет! Добро пожаловать на сайт "Алита: Боевой ангел"!');
  }, 3000);
  
playButton.addEventListener("click", function() {
  if (isPlaying) {
    audio.pause();
    playButton.textContent = "Play Music";
  } else {
    audio.play();
    playButton.textContent = "Pause Music";
  }
  
  isPlaying = !isPlaying;
});
function playPause()
{ 
if (myVideo.paused) 
  myVideo.play(); 
else 
  myVideo.pause(); 
} 

function makeBig()
{ 
myVideo.width=560; 
} 

function makeSmall()
{ 
myVideo.width=320; 
} 

function makeNormal()
{ 
myVideo.width=420; 
} 

  
 


 

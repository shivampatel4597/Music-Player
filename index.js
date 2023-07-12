const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//  array of an object
const songs = [
  {
    name: "shiv-1",
    title: "Bewafaa",
    artist: "Imran khan",
  },
  {
    name: "shiv-2",
    title: "Lifestyle",
    artist: "Sidhu Moosewala",
  },
  {
    name: "shiv-3",
    title: "Legend",
    artist: "Sidhu Moosewala",
  },
  {
    name: "shiv-4",
    title: "Racks n Rounds",
    artist: "Sidhu Moosewala",
  },
  {
    name: "shiv-5",
    title: "Never Fold",
    artist: "Sidhu Moosewala",
  },
];

let isPlaying = false;

// for play functonality
const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

// for pause functionality
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  // if (isPlaying) {
  //   pauseMusic();
  // } else {
  //   playMusic();
  // }

  // You can also write above if else code simply one line
  isPlaying ? pauseMusic() : playMusic();
});

// changing music data

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "thapa/Songs/" + songs.name + ".mp3";
  img.src = "thapa/Images/" + songs.name + ".jpg";
};

songIndex = 0;
// loadSong(songs[4]);

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

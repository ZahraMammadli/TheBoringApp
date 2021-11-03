// Nabil's key: AIzaSyDocdKUc8vFu4Tv30BXxP8Immc17qgXjas
// Swapnil's key: AIzaSyDSvqHkiOyrUOr7LTw4D3tczbiBLBsRJR8

var key = "AIzaSyDocdKUc8vFu4Tv30BXxP8Immc17qgXjas";

// the youtube button
var youtubeButton = document.getElementById("demo-youtube");
var searchButton = document.getElementById("demo-search");

//the search terms
// const searchTerms = [
//   "funny%20dogs",
//   "funny%20cats",
//   "funny%20pets",
//   "funny%20kids",
//   "funny",
//   "fun%20stuff",
//   "cute%20dogs",
//   "cute%20cats",
//   "fun%20pranks",
// ];

//random youtube search terms
// let randomWordUrl = "https://random-word-api.herokuapp.com/word?number=33";

// async function getRandomWords() {
//   var pullWords = await fetch(randomWordUrl);
//   var searchTerm = await pullWords.json();

//   console.log("ticktock2");
//   localStorage.setItem("randomSearchTerms", searchTerm);
//   console.log("ticktock3");
// }

// getRandomWords();
// console.log("ticktock");

// var searchTerms = [localStorage.getItem("randomSearchTerms")];
// console.log(searchTerms);

// a function to get a random search term
// var getSearchTerm = () =>
//   searchTerms[Math.floor(Math.random() * searchTerms.length)];

// // a function to pull a random word from an API to use as a search term
// let randomWordUrl = "https://random-word-api.herokuapp.com/word?number=2";
// async function getSearchTerm() {
//   console.log("tick");
//   var pullWord = await fetch(randomWordUrl);
//   console.log("tock");
//   var searchTerm = await pullWord.json();
//   // return searchTerm;
//   console.log(searchTerm);
//   document.getElementById("search-terms").innerHTML = searchTerm;
//   localStorage.setItem("randomSearchTerm", searchTerm);
// }
// searchButton.addEventListener("click", getSearchTerm);

//url from YouTube docs modified for my random term and API key

// function renderVideo() {
//   //fetch function for a random youtube video
//   var randomSearchTerm = localStorage.getItem("randomSearchTerm");
//   var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${randomSearchTerm}&type=video&videoDuration=short&key=${key}`;
//   console.log(url);
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       // this console log allows us to see the video id of the random video displayed
//       // console.log(data.items[0].id.videoId);
//       // add the random video source into the video iframe on the html file
//       document.querySelector(
//         "#video-iframe"
//       ).src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
//     });
// }
let randomWordUrl = "https://random-word-api.herokuapp.com/word?number=2";
async function renderVideo() {
  var pullWord = await fetch(randomWordUrl);
  var searchTerm = await pullWord.json();
  console.log(searchTerm);
  document.getElementById("search-terms").innerHTML = searchTerm;
  // localStorage.setItem("randomSearchTerm", searchTerm);
  //fetch function for a random youtube video
  // var randomSearchTerm = localStorage.getItem("randomSearchTerm");
  var url =
    await `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchTerm}&type=video&videoDuration=short&key=${key}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // this console log allows us to see the video id of the random video displayed
      console.log(data.items[0].id.videoId);
      // add the random video source into the video iframe on the html file
      document.querySelector(
        "#video-iframe"
      ).src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
    });
}

// event listener for youtube button
youtubeButton.addEventListener("click", renderVideo);

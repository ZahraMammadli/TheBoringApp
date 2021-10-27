console.log("hello world");

// Nabil's key: AIzaSyDocdKUc8vFu4Tv30BXxP8Immc17qgXjas
// Swapnil's key: AIzaSyDSvqHkiOyrUOr7LTw4D3tczbiBLBsRJR8

// var key = "AIzaSyDSvqHkiOyrUOr7LTw4D3tczbiBLBsRJR8";

//the search terms
const searchTerms = [
    "funny%20dogs",
    "funny%20cats",
    "funny%20pets",
    "funny%20kids",
    "funny"
];

//a function to get a random search term
var getSearchTerm = () =>
searchTerms[Math.floor(Math.random() * (searchTerms.length))];

//url from YouTube docs modified for my random term and API key
var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${getSearchTerm()}&type=video&videoDuration=short&key=${key}`;

//fetch function following the aforementioned process
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


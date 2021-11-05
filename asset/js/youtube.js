// Nabil's key: AIzaSyDocdKUc8vFu4Tv30BXxP8Immc17qgXjas
// Swapnil's key: AIzaSyDSvqHkiOyrUOr7LTw4D3tczbiBLBsRJR8

var key = "AIzaSyDSvqHkiOyrUOr7LTw4D3tczbiBLBsRJR8";

// the search terms to retrieve random videos
const searchTerms = [
  "funny%20dogs",
  "funny%20cats",
  "funny%20pets",
  "funny%20kids",
  "funny",
  "fun%20stuff",
  "cute%20dogs",
  "cute%20cats",
  "fun%20pranks",
  "pranks",
  "jokes",
  "fun",
  "cute",
  "comedy",
  "comedy%20dogs",
  "comedy%20cats",
  "comedy%20kids",
  "doggo",
];

// the hard coded videos to be selected randomly if we consume the quota and get a 403
const hardCodedVideos = [
  "1HygThMLzGs",
  "ex8SM09QChw",
  "fB1PnrGuRwk",
  "cjtLgiUQqgY",
  "zp27FH9ohdU",
  "h5dQpfIpZR0",
  "3DJo-vG6hwA",
  "DrMB1Ow0N74",
];

//a function to get a random search term
var getSearchTerm = () =>
  searchTerms[Math.floor(Math.random() * (searchTerms.length - 1))];

//a function to get a random video from the list of hard coded videos
var getHardCodedRandomVideo = () =>
  hardCodedVideos[Math.floor(Math.random() * (hardCodedVideos.length - 1))];

//url from YouTube docs modified for my random term and API key
var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${getSearchTerm()}&type=video&videoDuration=short&key=${key}`;

//fetch function for a random youtube video
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // this console log allows us to see the video id of the random video displayed
    console.log(data.items[0].id.videoId);

    // add the random video source into the video iframe on the html file
    document.querySelector(
      "#video-iframe"
    ).src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
  })
  .catch(() => {
    // We will show hard-coded video
    var hardCodedRandomVideo = getHardCodedRandomVideo();
    document.querySelector(
      "#video-iframe"
    ).src = `https://www.youtube.com/embed/${hardCodedRandomVideo}`;
    console.log(
      "oopps! we have found a 403 error. We will still show you this video so you are not sad"
    );
    addConsolationMessage();

    function addConsolationMessage() {
      var consolationMsg = document.createElement("H4");
      consolationMsg.innerHTML =
        "Oops! Seems like we found a " +
        "<span>403 </span>" +
        "error." +
        "<br />" +
        "This means we " +
        "<span>ran out </span>" +
        "of the assigned " +
        "<span>YouTube quota</span>" +
        "." +
        "<br />" +
        "We will still show you some " +
        "<span>preselected videos </span>" +
        "of funny doggos so you are not sad";
      document.getElementById("youtube-container").appendChild(consolationMsg);
    }
  });

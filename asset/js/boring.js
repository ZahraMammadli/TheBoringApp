document.getElementById("search-youtube").style.display = "none";
document.getElementById("youtube-video").style.display = "none";
console.log("hello world");

//testing out bored API
// const activityDemo = $("#acitvity-demo");

// async function displayActivity() {
//   const retrievedActivity = `http://www.boredapi.com/api/activity`;
//   const activityDetails = await fetch(`${retrievedActivity}`);
//   //   return {
//   //     activity: activity,
//   //     type: type,
//   //     participants: pax,
//   //     price: price,
//   //     link: link,
//   //     key: key,
//   //     accessibility: accessibility,
//   //   };
//   console.log(activityDetails);
// }

//hide the youtube-search div on screen load

// demoButtonBoring.addEventListener("click", displayActivity);
let boredUrl = "https://www.boredapi.com/api/activity";
function displayActivity() {
  fetch(boredUrl).then((response) =>
    response.json().then((activityObject) => {
      if (activityObject.link != "") {
        document.getElementById("activity-card").innerHTML =
          activityObject.activity +
          "." +
          "<br>" +
          "<a href=" +
          activityObject.link +
          " target='_blank'>" +
          activityObject.link +
          "</a><br>" +
          "<iframe src='" +
          activityObject.link +
          "' width='100%' height='450'></iframe><br>";
        console.log(activityObject.activity);
        var searchTerm = activityObject.activity;
        console.log(searchTerm + "!");
        localStorage.setItem("searchterm", JSON.stringify(searchTerm));
        document.getElementById("search-youtube").style.display = "block";
      } else {
        document.getElementById("activity-card").innerHTML =
          activityObject.activity + "." + "<br>";
        console.log(activityObject.activity);
        var searchTerm = activityObject.activity;
        console.log(searchTerm + "!");
        localStorage.setItem("searchterm", JSON.stringify(searchTerm));
        document.getElementById("search-youtube").style.display = "block";
      }
    })
  );
}

displayActivity();
// demoButtonBoring.addEventListener("click", displayActivity);

//push bored activity into youtube search query

// Swapnil's key:
// var key = "AIzaSyDSvqHkiOyrUOr7LTw4D3tczbiBLBsRJR8";

// Nabil's key:
// var key = "AIzaSyDocdKUc8vFu4Tv30BXxP8Immc17qgXjas";

// Niko's key:
var key = "AIzaSyDTTzdwAgJf2vNOaAEcDumAALfWRgcnRxQ";

//url from YouTube docs modified for my random term and API key
// function searchYoutube() {
//   console.log(searchTerm);
// }

function searchYoutube() {
  var searchTerm = encodeURI(localStorage.getItem("searchterm"));
  var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchTerm}&type=video&videoDuration=short&key=${key}`;
  console.log(url);
  document.getElementById("search-youtube").style.display = "none";
  document.getElementById("youtube-video").style.display = "grid";
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

ytSearchButton.addEventListener("click", searchYoutube);

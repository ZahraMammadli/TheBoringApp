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

// demoButtonBoring.addEventListener("click", displayActivity);
let boredUrl = "https://www.boredapi.com/api/activity";
function displayActivity() {
  fetch(boredUrl).then((response) =>
    response.json().then((activityObject) => {
      if (activityObject.link != "") {
        document.getElementById("activity-demo").innerHTML =
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
      } else {
        document.getElementById("activity-demo").innerHTML =
          activityObject.activity + "." + "<br>";
      }
    })
  );
}

demoButtonBoring.addEventListener("click", displayActivity);

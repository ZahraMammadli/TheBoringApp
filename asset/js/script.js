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
    response
      .json()
      .then(
        (activityObject) =>
          (document.getElementById("activity-demo").innerHTML +=
            activityObject.activity + "." + "<br>")
      )
  );
}

demoButtonBoring.addEventListener("click", displayActivity);

// console.log("hello world");

// On click fetch a random boring activity
$("#blue-pill").click(function () {
  window.location.href = "boring.html";
  if (localStorage.getItem("bluepills") != null) {
    var bluepills = parseInt(localStorage.getItem("bluepills")) + 1;
    localStorage.setItem("bluepills", bluepills);
  } else {
    var bluepills = 1;
    localStorage.setItem("bluepills", bluepills);
  }
});

// On click fetch a random Youtube video
$("#red-pill").click(function () {
  window.location.href = "youtube.html";
  if (localStorage.getItem("redpills") != null) {
    var redpills = parseInt(localStorage.getItem("redpills")) + 1;
    localStorage.setItem("redpills", redpills);
  } else {
    var redpills = 1;
    localStorage.setItem("redpills", redpills);
  }
});

// Responsivess of the navbar
$(document).ready(function () {
  $(".sidenav").sidenav();
});

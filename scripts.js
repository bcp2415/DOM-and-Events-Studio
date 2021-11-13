// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", init);
let height = 0;
let bottomPosition = -10;
let leftPosition = 230;

function init() {
  const takeOff = document.getElementById("takeoff");
  const landing = document.getElementById("landing");
  const missionAbort = document.getElementById("missionAbort");
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
  const upButton = document.getElementById("upButton");
  const downButton = document.getElementById("downButton");
  const leftButton = document.getElementById("leftButton");
  const rightButton = document.getElementById("rightButton");
  takeoff.addEventListener("click", respondToTakeoff);
  landing.addEventListener("click", land);
  missionAbort.addEventListener("click", abortMission);
  const rocket = document.getElementById("rocket");
  upButton.addEventListener("click", respondToUpButton);
  downButton.addEventListener("click", respondToDownButton);
  leftButton.addEventListener("click", respondToLeftButton);
  rightButton.addEventListener("click", respondToRightButton);
}

function respondToTakeoff() {
  const response = window.confirm(
    "Confirm that the shuttle is ready for takeoff."
  );
  if (response) {
    flightStatus.innerText = "Shuttle in flight.";
    shuttleBackground.style.backgroundColor = "blue";
    height += 10000;
    spaceShuttleHeight.innerText = height;
    bottomPosition += 10;
    rocket.style.bottom = `${bottomPosition}px`;
  }
}

function land() {
  window.alert("The shuttle is landing. Landing gear engaged.");
  flightStatus.innerText = "The shuttle has landed.";
  shuttleBackground.style.backgroundColor = "green";
  height = 0;
  spaceShuttleHeight.innerText = height;
  bottomPosition = -10;
  rocket.style.bottom = `${bottomPosition}px`;
}

function abortMission() {
  const response = window.confirm(
    "Confirm that you want to abort the mission."
  );
  if (response) {
    console.log("abort fcn called");
    flightStatus.innerText = "Mission aborted.";
    shuttleBackground.style.backgroundColor = "green";
    height = 0;
    spaceShuttleHeight.innerText = height;
    bottomPosition = -10;
    rocket.style.bottom = `${bottomPosition}px`;
  }
}

function respondToUpButton() {
  bottomPosition += 10;
  if (bottomPosition > 250) {
    bottomPosition = 250;
  }
  rocket.style.bottom = `${bottomPosition}px`;
  height += 10000;
  spaceShuttleHeight.innerText = height;
}

function respondToDownButton() {
  bottomPosition -= 10;
  if (bottomPosition < -10) {
    bottomPosition = -10;
  }
  rocket.style.bottom = `${bottomPosition}px`;
  height -= 10000;
  spaceShuttleHeight.innerText = height;
}

function respondToLeftButton() {
  leftPosition -= 10;
  if (leftPosition < -20) {
    leftPosition = -20;
  }
  rocket.style.left = `${leftPosition}px`;
}

function respondToRightButton() {
  leftPosition += 10;
  if (leftPosition > 480) {
    leftPosition = 480;
  }
  rocket.style.left = `${leftPosition}px`;
}

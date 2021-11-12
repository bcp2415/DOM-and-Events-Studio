// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", init);
let height = 0;

function init() {
    declareConstants();
    takeoff.addEventListener("click", respondToTakeoff);
}

function declareConstants() {
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
}

function respondToTakeoff() {
    const response = window.confirm("Confirm that the shuttle is ready for takeoff.")
    if (response) {
        flightStatus.innerText = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        height += 10000;
        spaceShuttleHeight.innerText = height;
    }
}
// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", init);
let height = 0;

function init() {
    declareConstants();
    takeoff.addEventListener("click", respondToTakeoff);
    landing.addEventListener("click", land);
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

function land() {
    // When the "Land" button is clicked, the following should happen:

    // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
    // The flight status should change to "The shuttle has landed."
    // The background color of the shuttle flight screen should change from blue to green.
    // The shuttle height should go down to 0.
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerText = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    height = 0;
    spaceShuttleHeight.innerText = height;
}
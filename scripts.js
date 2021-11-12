// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", init);
let height = 0;

function init() {
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    
    const downButton = document.getElementById("downButton");
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");
    takeoff.addEventListener("click", respondToTakeoff);
    landing.addEventListener("click", land);
    missionAbort.addEventListener("click", abortMission);
    //const upButton = document.getElementById("upButton");
    //upButton.addEventListener("click", upButton);
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
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerText = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    height = 0;
    spaceShuttleHeight.innerText = height;
}

function abortMission() {
    const response = window.confirm("Confirm that you want to abort the mission.");
    if (response) {
        flightStatus.innerText = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        height = 0;
        spaceShuttleHeight.innerText = height;
    }
}

// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:

//     The rocket image should move 10 px in the direction of the button that was clicked.
//     If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
// function upButton() {
//     console.log("upButton pushed");
// }
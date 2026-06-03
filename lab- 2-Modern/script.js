let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;

let output = document.querySelector("#output");

if (health < 30 && enemyNearby === true) {
    output.textContent = "CRITICAL ALERT: Immediate Evacuation Required";
}

else if (ammo < 5 || shield === false) {
    output.textContent = "Warning: Low Resources";
}

else if (missionProgress >= 1 && missionProgress <= 70) {
    output.textContent = "Mission In Progress";
}

else if (missionProgress > 70 && enemyNearby === false) {
    output.textContent = "Approaching Mission Completion";
}

else if (missionProgress === 100) {
    output.textContent = "Mission Complete Successfully";
}

else {
    output.textContent = "System Stable";
}
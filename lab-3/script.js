async function startProgram() {
    console.log("Mission started");

        setMainLed({ r: 0, g: 0, b: 255 });

        // Move forward
        await roll(0, 60, 2);

        // Turn right
        await roll(90, 60, 1);

        // Move forward again
        await roll(0, 60, 2);

        // Turn left
        await roll(270, 60, 1);

        // Stop robot
        setSpeed(0);

        // Sensor output
        console.log("Heading: " + getHeading());
        console.log("Mission complete");
    }
}

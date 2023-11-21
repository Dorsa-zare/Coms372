/**
 * Assignment 3
 * Dorsa Zare
 */

"use strict";

let state = 0;

function preload() {
    // Load any necessary assets here
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop(); // Stop draw from continuously looping
}

function draw() {
    background(0); // Set background color to black
    textSize(30);
    textAlign(CENTER, CENTER);
    fill(255); // Set text color to white

    if (state === 0) {
        // Title Page
        text("Touch the screen\nwhich reflects you the best", width / 2, height / 2);
    } else if (state === 1) {
        // Part 1 of poem
        text("Part 1 of poem", width / 2, height / 2);
    } else if (state === 2) {
        // Part 2 of poem
        background(100, 50, 50); // Change background color for state 2
        text("Part 2 of poem", width / 2, height / 2);
    } else if (state === 3) {
        // Part 3 of poem
        background(50, 100, 50); // Change background color for state 3
        text("Part 3 of poem", width / 2, height / 2);
    } else if (state === 4) {
        // Part 4 of poem
        background(50, 50, 100); // Change background color for state 4
        text("Part 4 of poem", width / 2, height / 2);
    } else if (state === 5) {
        // Part 4 of poem
        background(120); // Change background color for state 5
        text("Part 5 of poem", width / 2, height / 2);
    }
}

function keyPressed() {
    if (state === 0) {
        // Transition to the next state when any key is pressed on the title page
        if (keyCode === RIGHT_ARROW) {
            state = 2; // Directly go to Part 2 if the right arrow key is pressed
        } else {
            state = 1; // Go to Part 1 for any other key
        }
        redraw();
    } else {
        // Handle key presses for other states
        if (keyCode === LEFT_ARROW) {
            state = 1;
        } else if (keyCode === RIGHT_ARROW) {
            state = 2;
        } else if (keyCode === UP_ARROW) {
            state = 3;
        } else if (keyCode === DOWN_ARROW) { 
            state = 4;
        } else if (key === ' ') {
            state = 5;
        }

        redraw(); // Redraw to update the canvas based on the new state
    }
}

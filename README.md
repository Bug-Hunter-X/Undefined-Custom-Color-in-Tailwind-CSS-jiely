# Undefined Custom Color in Tailwind CSS

This repository demonstrates a common error in Tailwind CSS: using a custom color that's not properly defined in your `tailwind.config.js` file.

## The Bug

The `bug.js` file shows an attempt to use a custom color `custom-blue` without defining it correctly. This leads to the color not being applied correctly, potentially rendering as the default color or causing an error.

## The Solution

The `bugSolution.js` file demonstrates the corrected way to define a custom color in the `tailwind.config.js` file.  Make sure that your custom colors are defined within the `extend` object and the `colors` property.

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies (if applicable).
3. Open the `bug.js` and `bugSolution.js` files to see the bug and its solution.

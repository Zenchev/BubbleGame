function numberOfBallsOnScreen(ballsObject) {
    return ballsObject.lines.length;
}

//     numberOfTotalBalls(bubbleGame)
-----------

function numberOfBallsWithSpecificColor(bubbleGame, ballColor) {
    let totalBalls = 0;

    // Iterate over each row in the lines array
    for (let row = 0; row < bubbleGame.lines.length; row++) {
        // Access the bubbles array for the current row
        let bubbles = bubbleGame.lines[row].bubbles;

        // Ensure bubbles is defined and iterate over its elements
        if (bubbles && bubbles.length > 0) {
            for (let bubble = 0; bubble < bubbles.length; bubble++) {
                // Check if bubbles[bubble] is defined and has _type property
                if (bubbles[bubble] && bubbles[bubble]._type === ballColor) {
                    totalBalls++;
                }
            }
        }
    }

    return totalBalls;
}

//numberOfBallsWithSpecificColor(bubbleGame, "red")
-----------

function compareBubbles(bubbleGame) {
    const linesBubbles = extractBubbleTypesFromLines(bubbleGame.lines);
    const gridBubbles = extractBubbleTypesFromGrid(bubbleGame.gridContainer.children);

    // Compare the lengths first
    if (linesBubbles.length !== gridBubbles.length) {
        return false;
    }

    // Compare each bubble type
    for (let i = 0; i < linesBubbles.length; i++) {
        if (linesBubbles[i] !== gridBubbles[i]) {
            return false;
        }
    }

    return true;
}

function extractBubbleTypesFromLines(lines) {
    const bubbleTypes = [];
    lines.forEach(line => {
        line.bubbles.forEach(bubble => {
            bubbleTypes.push(bubble._type);
        });
    });
    return bubbleTypes;
}

function extractBubbleTypesFromGrid(children) {
    const bubbleTypes = [];
    children.forEach(child => {
        // Check if child has texture (assuming based on the structure provided)
        if (child.texture && child.texture.baseTexture) {
            bubbleTypes.push(child.texture.baseTexture.textureCacheIds[0]);
        }
    });
    return bubbleTypes;
}
//compareBubbles(bubbleGame)
-------------
function assertRedBubblesExist(lines) {
    let redBubblesExist = false;

    // Iterate over each line in the lines array
    lines.forEach(line => {
        // Iterate over each bubble in the current line
        line.bubbles.forEach(bubble => {
            // Check if the current bubble is red
            if (bubble.bubbleView._type === 'red') {
                redBubblesExist = true;
                return; // Exit early if a red bubble is found
            }
        });

        // Exit early if a red bubble is found
        if (redBubblesExist) return;
    });

    // Assertion
    if (!redBubblesExist) {
        throw new Error('No red bubbles found in lines object');
    }

    return redBubblesExist;
}
//assertRedBubblesExist(bubbleGame.lines)


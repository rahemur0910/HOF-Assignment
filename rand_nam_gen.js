/*Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.*/


let delayInSeconds = 3;
let countdown = delayInSeconds;
let countdownInterval;

// Function to generate a random number
function generateRandomNumber()
{
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (max - min +1)+min);
}

//Function to display countdown messages

function displayCountdown()
{
    console.log(`Time remaining  ${countdown} seconds`);
    countdown --;

    if (countdown < 0)
    {
        clearInterval(countdownInterval);
        const randomNumner = generateRandomNumber();
        console.log(`Random number generated: ${randomNumner}`);
    }
}

countdownInterval = setInterval(displayCountdown, 1000);
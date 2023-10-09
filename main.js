
const messageGenerator = (userName, userAge, ageOfDeathQuery) => {
    
    // If statement to determine Balthazar's identifier
    
    const randAdject = Math.floor(Math.random() * 10)
    let adjective = ""

    if (randAdject === 0) {
        adjective = " the great"
    } else if (randAdject === 1) {
        adjective = " the insightful"
    } else if (randAdject === 2) {
        adjective = " the softly-spoken"
    } else if (randAdject === 3) {
        adjective = " the magnanimous"
    } else if (randAdject === 4) {
        adjective = " the mildly neurotic"
    } else if (randAdject === 5) {
        adjective = " the unattentive"
    } else if (randAdject === 6) {
        adjective = " the compulsive"
    } else if (randAdject === 7) {
        adjective = " the sweet-toothed"
    } else if (randAdject === 8) {
        adjective = " of the many spoons"
    } else if (randAdject === 9) {
        adjective = ", shade of a thousand suns"
    }

    // Logging introductory text

    console.log(`Hello ${userName} my name is Balthazar${adjective}.`)

    // Logging preamble text

    console.log("I will now reveal the answers to some of your life's greatest mysteries.")

    // If statement to determine happiness level
    
    const randAmount = Math.floor(Math.random() * 10)
    let amount = ""

    if (randAmount === 9) {
        amount = "a complete absence"
    } else if (randAmount === 8) {
        amount = "an almost insignificant amount"
    } else if (randAmount === 7) {
        amount = "a few breadcrumbs"
    } else if (randAmount === 6) {
        amount = "a mild amount"
    } else if (randAmount === 5) {
        amount = "a healthy amount"
    } else if (randAmount === 4) {
        amount = "a good deal"
    } else if (randAmount === 3) {
        amount = "exactly 14 quarks"
    } else if (randAmount === 2) {
        amount = "boatloads"
    } else if (randAmount === 1) {
        amount = "oceans"
    } else if (randAmount === 0) {
        amount = "an inconceivably high amount"
    }

    // Logging happiness level

    console.log(`Your life will be filled with ${amount} of happiness!`)

    // Logging no. of children

    console.log(`Through your years you will have ${randAmount} children!`)

    // Logging bad lucky number sentences

    console.log(`Always keep in mind that your lucky number is ${randAmount}!`)

    console.log("...")

    console.log("...hmmm...")

    console.log("That's the same number of children you'll have, let me just clean off my crystal ball and try again...")

    // RNG for lucky number

    let luckyNum = randAmount
    
    while (luckyNum === randAmount) {
        luckyNum = Math.floor(Math.random() * 101)
    }

    // Logging lucky number sentences

    console.log("--Balthazar slaps his murky ball a few times--")

    console.log(`Here we go, your lucky number is actually ${luckyNum}!`)

    console.log(`This is a big one... the age of your death...`)

    console.log(`Actually are you sure you want to know this?`)

    console.log("...")

    // Query if user wants to know age of death

    if (ageOfDeathQuery === "yes" || ageOfDeathQuery === "Yes" || ageOfDeathQuery === "YES") {
        console.log(`Very well you will die at ${userAge+(Math.floor(Math.random()*70))} years old`)
    } else {
        console.log(`I quite understand, some things are surely best left to the gods, well and Balthazar too`)
    }

    // RNG to find color

    const randColor = Math.floor(Math.random() * 20)
    let favColor = ""

    if (randColor < 5) {
        favColor = "blue"
    } else if (randColor < 10) {
        favColor = "red"
    } else if (randColor < 12) {
        favColor = "yellow"
    } else if (randColor < 14) {
        favColor = "green"
    } else if (randColor < 16) {
        favColor = "purple"
    } else if (randColor < 18) {
        favColor = "pink"
    } else if (randColor < 19) {
        favColor = "teal"
    } else if (randColor < 20) {
        favColor = "rainbow"
    }

    // Logging favorite color sentence

    console.log(`And just to prove all of my information is accurate I will now present your favorite color!`)

    console.log(`Your favorite color is ... ${favColor}`)
}

/*
To find your fortune, as arguments to messageGenerator input:
    - your name (as a string)
    - your age (as a number)
    - "yes" or "no" if you wish to learn age of death or not (as a string)
*/

messageGenerator("userName", 99, "no")
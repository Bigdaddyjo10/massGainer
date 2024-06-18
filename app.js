
const upgrades = [
    {
        name: 'protein shakes',
        cost: 5,
        gains: 10,
        quantity: 0
    },
    {
        name: 'eggs',
        cost: 10,
        gains: 25,
        quantity: 0
    },
    {
        name: 'rice',
        cost: 500,
        gains: 50,
        quantity: 0
    },
    {
        name: 'chicken',
        cost: 100,
        gains: 50,
        quantity: 0
    },
]

let gainMeter = 0
let growMuscle = 1



const massPureClickElement = document.getElementById("MassPureClick")


function buyingProtein() {
    const proteinShakesLabel = document.getElementById("proteinShakesElement")
    const massMeterElement = document.getElementById('massCounter')
    const proteinButton = document.getElementById("proteinShakesBtn")
    const protein = upgrades.find((upgrade) => upgrade.name == 'protein shakes')
    if (gainMeter >= protein.cost) {
        gainMeter -= protein.cost
        growMuscle += protein.gains
        massMeterElement.innerText = gainMeter
        protein.cost += 100
        proteinButton.innerText = protein.cost
        proteinShakesLabel.innerText++
        massPureClickElement.innerText = growMuscle
    }
}


function buyingEggs() {
    const eggsLabel = document.getElementById("eggsElement")
    const eggsButton = document.getElementById("eggsBtn")
    const massMeterElement = document.getElementById('massCounter')
    const eggs = upgrades.find((upgrade) => upgrade.name == 'eggs')
    if (gainMeter >= eggs.cost) {
        gainMeter -= eggs.cost
        growMuscle += eggs.gains
        massMeterElement.innerText = gainMeter
        eggs.cost += 100
        eggsButton.innerText = eggs.cost
        eggsLabel.innerText++
        massPureClickElement.innerText = growMuscle
    }

}

function buyingRice() {
    const autoClicks = document.getElementById("autoClicks")
    const riceLabel = document.getElementById("riceElement")
    const riceButton = document.getElementById("riceBtn")
    const rice = upgrades.find((upgrade) => upgrade.name == 'rice')
    if (gainMeter >= rice.cost) {
        rice.quantity += 1
        gainMeter -= rice.cost
        rice.cost += 900
        riceButton.innerText = rice.cost
        riceLabel.innerText = rice.quantity
        autoClicks.innerText = rice.gains * rice.quantity
    }
}

function buyingChicken() {
    const chickenLabel = document.getElementById("chickenElement")
    const chickenButton = document.getElementById('chickenBtn')
    const massMeterElement = document.getElementById('massCounter')
    const chicken = upgrades.find((upgrade) => upgrade.name == "chicken")
    if (gainMeter >= chicken.cost) {
        gainMeter -= chicken.cost
        growMuscle += chicken.gains
        massMeterElement.innerText = gainMeter
        chicken.cost += 10
        chickenButton.innerText = chicken.cost
        chickenLabel.innerText++
        massPureClickElement.innerText = growMuscle
    }

}

function growMass() {
    const massMeterElement = document.getElementById('massCounter')
    gainMeter += growMuscle
    massMeterElement.innerText = gainMeter
}

function addAutoRice() {
    const massMeterElement = document.getElementById('massCounter')

    const rice = upgrades.find((upgrade) => upgrade.name == "rice")
    if (rice.quantity > 0) {
        gainMeter += rice.gains * rice.quantity
        massMeterElement.innerText = gainMeter
    }
}
setInterval(addAutoRice, 1000)
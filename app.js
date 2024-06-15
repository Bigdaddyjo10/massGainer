const upgrades = [
    {
        name: 'protein shakes',
        cost: 50,
        gains: 10,
        ingested: false
    },
    {
        name: 'growth hormone',
        cost: 100,
        gains: 150,
        ingested: false
    },
    {
        name: 'STEROIDS',
        cost: 500,
        gains: 1000,
        ingested: false
    },
    {
        name: 'youth drink',
        cost: 1000,
        age: 50,
        ingested: false
    }
]

let age = 0
let gainMeter = 0
let growMuscle = 1
let pureClick = 1



const massPureClickElement = document.getElementById("MassPureClick")

function buyingProtein() {
    const proteinShakesLabel = document.getElementById("proteinShakesElement")
    const massMeterElement = document.getElementById('massCounter')
    const proteinButton = document.getElementById("proteinShakesBtn")
    const protein = upgrades.find((upgrade) => upgrade.name == 'protein shakes')
    if (gainMeter >= protein.cost) {
        protein.ingested = true
        gainMeter -= protein.cost
        gainMeter += protein.gains
        growMuscle += 10
        pureClick += 10
        massMeterElement.innerText = gainMeter
        protein.cost += 10
        proteinButton.innerText = protein.cost
        proteinShakesLabel.innerText++
        massPureClickElement.innerText = pureClick

    }

    if (gainMeter < protein.cost) {
        console.log("NOT");
    }
    gainMeter - protein.cost
}

const massGainer = 200
function buyingHormone() {
    const growthHormoneLabel = document.getElementById("growthHormoneElement")
    const hormoneButton = document.getElementById("hormoneBtn")
    const massMeterElement = document.getElementById('massCounter')
    const hormones = upgrades.find((upgrade) => upgrade.name == 'growth hormone')
    if (gainMeter >= hormones.cost) {
        hormones.ingested = true
        gainMeter -= hormones.cost
        gainMeter += hormones.gains
        growMuscle += 50
        pureClick += 50

        massMeterElement.innerText = gainMeter
        gainMeter += gainMeter
        hormones.cost += 75
        hormoneButton.innerText = hormones.cost
        growthHormoneLabel.innerText++
        massPureClickElement.innerText = pureClick


    }
    // setTimeout(() => {
    //     upgrades.filter((upgrade) => upgrade.name == "growth hormone")
    //     upgrades.forEach((upgrade) => {
    //         upgrade.ingested = false
    //     })
    // }, 3000)
}
function growMass() {
    // const totalMassElement = document.getElementById('totalMassCounter')
    const massMeterElement = document.getElementById('massCounter')
    gainMeter += growMuscle


    massMeterElement.innerText = gainMeter
}

function buyingSTEROIDS() {
    const steroidsLabel = document.getElementById("steroidsElement")
    const stonerButton = document.getElementById('steroidBtn')
    const massMeterElement = document.getElementById('massCounter')
    const roids = upgrades.find((upgrade) => upgrade.name == "STEROIDS")
    if (gainMeter >= roids.cost) {
        roids.ingested = true
        gainMeter -= roids.cost
        gainMeter += roids.gains
        massMeterElement.innerText = gainMeter
        roids.cost += 1000
        stonerButton.innerText = roids.cost
        steroidsLabel.innerText++

    }
    setTimeout(() => {
        upgrades.forEach((STEROIDS) => {
            STEROIDS.ingested = false
        })
    }, 5000)

}



const youthDrink = upgrades.find((upgrade) => upgrade.name == 'youth drink')
youthDrink.age = 0
const ageElement = document.getElementById("oldAgeMeter")

const massMeterElement = document.getElementById('massCounter')

function buyingYouth() {
    const youthLabel = document.getElementById("youthElement")

    const youthBin = document.getElementById('youthBtn')
    const massMeterElement = document.getElementById('massCounter')

    if (gainMeter >= youthDrink.cost) {
        youthDrink.ingested = true
        gainMeter -= youthDrink.cost
        youthDrink.age -= 20
        youthDrink.cost *= 2
        massMeterElement.innerText = gainMeter
        youthBin.innerText = youthDrink.cost
        youthLabel.innerText++
    }
}

function aging() {
    youthDrink.age += 1
    ageElement.innerText = youthDrink.age
    if (youthDrink.age >= 100) {
        window.alert('You are too old for gains!')
    }

}

function addUpGrade() {
    const massMeterElement = document.getElementById('massCounter')
    upgrades.forEach((upgrade) => {
        const protein = upgrades.find((upgrade) => upgrade.name == "STEROIDS")

        if (protein.name == 'protein shakes' && protein.ingested == true) {
            gainMeter++
            massMeterElement.innerText = gainMeter

        }
        const hormone = upgrades.find((upgrade) => upgrade.name == "STEROIDS")

        if (hormone.name == 'growth hormone' && upgrade.ingested == true) {
            gainMeter += hormone.gains
            massMeterElement.innerText = gainMeter

        }
        const roids = upgrades.find((upgrade) => upgrade.name == "STEROIDS")
        if (roids.name == 'STEROIDS' && roids.ingested == true) {
            gainMeter += roids.gains
            massMeterElement.innerText = gainMeter
        }
    })
    // console.log(massMeterElement.innerText = gainMeter);
}

setInterval(addUpGrade, 500)
setInterval(aging, 1000)
const upgrades = [
    {
        name: 'protein shakes',
        cost: 5,
        gains: 10,
        ingested: false
    },
    {
        name: 'growth hormone',
        cost: 10,
        gains: 100,
        ingested: false
    },
    {
        name: 'STEROIDS',
        cost: 50,
        gains: 1000,
        ingested: false
    }
]
let age = 0
let gainMeter = 0

const massMeterElement = document.getElementById('massCounter')




function buyingProtein() {
    const protein = upgrades.find((upgrade) => upgrade.name == 'protein shakes')
    if (gainMeter > protein.cost) {

        protein.ingested = true
        gainMeter += protein.gains
        massMeterElement.innerText = gainMeter

    }
    console.log(gainMeter)
}

function buyingHormone() {

    const hormone = upgrades.find((upgrade) => upgrade.name == 'growth hormone')
    if (gainMeter > hormone.cost) {

        hormone.ingested = true
        gainMeter += hormone.gains
        massMeterElement.innerText = gainMeter

    }
    setTimeout(() => {
        upgrades.filter((upgrade) => upgrade.name == "growth hormone")
        upgrades.forEach((upgrade) => {
            upgrade.ingested = false
        })
    }, 3000)

}
function buyingSTEROIDS() {
    // const massMeterElement = document.getElementById('massCounter')
    const STEROIDS = upgrades.find((upgrade) => upgrade.name == "STEROIDS")
    if (gainMeter > STEROIDS.cost) {

        STEROIDS.ingested = true
        gainMeter += STEROIDS.gains
        massMeterElement.innerText = gainMeter
    }
    setTimeout(() => {
        upgrades.forEach((upgrade) => {
            upgrade.ingested = false
        })
    }, 1000)

}

function addUpGrade() {
    upgrades.forEach((upgrade) => {
        if (upgrade.name == 'protein shakes' && upgrade.ingested == true) {
            gainMeter += upgrade.gains
            gainMeter++
            // massMeterElement.innerText += gainMeter

        }
        if (upgrade.name == 'growth hormone' && upgrade.ingested == true) {
            gainMeter += upgrade.gains
            gainMeter++
            // massMeterElement.innerText += gainMeter

        }
        if (upgrade.name == 'STEROIDS' && upgrade.ingested == true) {
            gainMeter += upgrade.gains
            gainMeter++
        }
        // const massMeterElement = document.getElementById('massCounter')
        massMeterElement.innerText = gainMeter
    })
}
function growMass() {
    // const massMeterElement = document.getElementById('massCounter')
    gainMeter++
}

setInterval(addUpGrade, 1000)
const upgrades = [
    {
        name: 'protein shakes',
        cost: 2,
        gains: 10,
        ingested: false
    },
    {
        name: 'growth hormone',
        cost: 5,
        gains: 200,
        ingested: false
    },
    {
        name: 'STEROIDS',
        cost: 10,
        gains: 1000,
        ingested: false
    }
]
let age = 0
let gainsMeter = 0



function buyingSTEROIDS() {
    const gear = upgrades.find((upgrade) => upgrade.ingested == true)
    if (gear.ingested == true) {
        gainsMeter = gear.gains
    }

    if (gainsMeter < gear.cost) {
        console.log("not buying gear");
    }
    else {
        gear.ingested = true
        console.log("Getting", gear.name);
    }

    if (gear.ingested == true) {
        gainsMeter += gear.gains
    }

    const massMeterElement = document.getElementById('massCounter')

    upgrades.forEach(gear => {
        gear.ingested == true
    });
    const upgrade = upgrades.find((upgrade) => upgrade.ingested == true)
    if (upgrade) {
    }
    console.log(gainsMeter)
    gainsMeter++
    massMeterElement.innerText = gainsMeter

}


function growMass() {
    const massMeterElement = document.getElementById('massCounter')
    gainsMeter += 1
    massMeterElement.innerText = gainsMeter
}


function buyingprotein() { }
function buyinghormone() { }

// upgrades.forEach((upgrade) => {
//     upgrade.ingested == true
// })





// setInterval(buyingGear, 1000)
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
        cost: 500,
        gains: 1000,
        ingested: false
    }
]
let age = 0
let gainsMeter = 0


function buyingGear(name) {
    const gear = upgrades.find((upgrade) => upgrade.name == name)

    if (gainsMeter < gear.cost) {
        // @ts-ignore
        console.log("not buying gear");
    }
    else {
        gear.ingested = true
        console.log("Getting juicy");
    }


}
function growMess() {
    const massMeterElement = document.getElementById('massCounter')
    const upGearElement = document.getElementById('upGear')
    upGearElement.forEach(())
    const gear = upgrades.find((upgrade) => upgrade.name == "protein shakes")
    // @ts-ignore
    massMeterElement.innerText = gainsMeter += 1
    if (gear.ingested == true) {
        gainsMeter += gear.gains
    }
    console.log(gainsMeter);
}

// marqueeElements.forEach((marqueeElement) => {
//     marqueeElement.scrollAmount = 2
// })
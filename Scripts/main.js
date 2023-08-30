document.addEventListener("DOMContentLoaded", function () {
    showStats();
});

//sets player stats as block scoped variables

let player = {
    stats: {
        "maxHp": 100,
        "currentHp": 100,
        "damage": 5,
        "damageM": 5,
        "defence": 0,
        "defenceM": 0,
        "critChance": 0,
        "dodgeChance": 0,
        "gold": 50,
    },
};

let enemy = {
    stats: {
        "maxHp": 100,
        "currentHp": 100,
        "damage": 10,
        "damageM": 10,
        "defence": 5,
        "defenceM": 5,
        "critChance": 0,
        "dodgeChance": 0,
        "gold": 50,
    }
}
console.log("Current Player Stats " , player.stats);

let headSlot = {
    runeMed: {
        "maxHp": 0,
        "currentHp": 0,
        "damage": 0,
        "damageM": 0,
        "defence": 7,
        "defenceM": 0,
        "critChance": 0,
        "dodgeChance": 0,
        "gold": 0,
    },
    thiefCap: {
        "maxHp": 0,
        "currentHp": 0,
        "damage": 0,
        "damageM": 0,
        "defence": 2,
        "defenceM": 2,
        "critChance": 2,
        "dodgeChance": 2,
        "gold": 0,
    },
    mageHood: {
        "maxHp": 0,
        "currentHp": 0,
        "damage": 0,
        "damageM": 2,
        "defence": 2,
        "defenceM": 3,
        "critChance": 0,
        "dodgeChance": 0,
        "gold": 0,
    },
};

let bodySlot = {
    mageRobe: {
        "maxHp": 0,
        "currentHp": 0,
        "damage": 0,
        "damageM": 3,
        "defence": 4,
        "defenceM": 4,
        "critChance": 0,
        "dodgeChance": 0,
        "gold": 0,
    },
    leatherTunic: {
        "maxHp": 0,
        "currentHp": 0,
        "damage": 0,
        "damageM": 0,
        "defence": 4,
        "defenceM": 6,
        "critChance": 0,
        "dodgeChance": 2,
        "gold": 0,
    },
    runeChain: {
        "maxHp": 0,
        "currentHp": 0,
        "damage": 0,
        "damageM": 0,
        "defence": 10,
        "defenceM": 0,
        "critChance": 0,
        "dodgeChance": 0,
        "gold": 0,
    },
};

//shortcuts
let stats = player.stats;

let elemMaxHp = document.getElementById('maxHp');
let elemBattleHpMax = document.getElementById('battleHpMax');
let elemCurrentHp = document.getElementById('currentHp');
let elemBattleHpCurrent = document.getElementById('battleHpCurrent');
let elemDamage = document.getElementById('damage');
let elemDamageM = document.getElementById('damageM');
let elemDefence = document.getElementById('defence');
let elemDefenceM = document.getElementById('defenceM');
let elemCritChance = document.getElementById('critChance');
let elemDodgeChance = document.getElementById('dodgeChance');
let elemGold = document.getElementById('gold');

let elemEnemyMaxHp = document.getElementById('enemyMaxHp');
let elemEnemyCurrentHp = document.getElementById('enemyCurrentHp');


// DISPLAY UPDATED STATS
//https://codereview.stackexchange.com/questions/189754/simple-rpg-game

function showStats() {
    elemMaxHp.textContent = stats.maxHp;
    elemCurrentHp.textContent = stats.currentHp;
    elemDamage.textContent = stats.damage;
    elemDamageM.textContent = stats.damageM;
    elemDefence.textContent = stats.defence;
    elemDefenceM.textContent = stats.defenceM;
    elemCritChance.textContent = stats.critChance;
    elemDodgeChance.textContent = stats.dodgeChance;
    elemGold.textContent = stats.gold;

    elemBattleHpCurrent.textContent = stats.currentHp;
    elemBattleHpMax.textContent = stats.maxHp;

    elemEnemyMaxHp.textContent = enemy.stats.maxHp;
    elemEnemyCurrentHp.textContent = enemy.stats.currentHp;


    console.log("Current Player Stats " , player.stats);
}

//resets stats to default
function resetStats() {
    player.stats.maxHp = 100;
    player.stats.maxHp = 100;
    player.stats.damage = 5;
    player.stats.damageM = 5;
    player.stats.defence = 0;
    player.stats.defenceM = 0;
    player.stats.critChance = 0;
    player.stats.dodgeChance = 0;
    player.stats.gold = player.stats.gold;
}

//adds head slot stats to player.stats
function headCalc() {
    if (head.options[head.selectedIndex].value == "mage-hood"){
        stats.damage = stats.damage + headSlot.mageHood.damage;
        stats.damageM = stats.damageM + headSlot.mageHood.damageM;
        stats.defence = stats.defence + headSlot.mageHood.defence;
        stats.defenceM = stats.defenceM + headSlot.mageHood.defenceM;
        stats.critChance = stats.critChance + headSlot.mageHood.critChance;
        stats.dodgeChance = stats.dodgeChance + headSlot.mageHood.dodgeChance;
    }
    else if (head.options[head.selectedIndex].value == "thief-cap"){
        stats.damage = stats.damage + headSlot.thiefCap.damage;
        stats.damageM = stats.damageM + headSlot.thiefCap.damageM;
        stats.defence = stats.defence + headSlot.thiefCap.defence;
        stats.defenceM = stats.defenceM + headSlot.thiefCap.defenceM;
        stats.critChance = stats.critChance + headSlot.thiefCap.critChance;
        stats.dodgeChance = stats.dodgeChance + headSlot.thiefCap.dodgeChance;
    }
    else if (head.options[head.selectedIndex].value == "rune-med"){
        stats.damage = stats.damage + headSlot.runeMed.damage;
        stats.damageM = stats.damageM + headSlot.runeMed.damageM;
        stats.defence = stats.defence + headSlot.runeMed.defence;
        stats.defenceM = stats.defenceM + headSlot.runeMed.defenceM;
        stats.critChance = stats.critChance + headSlot.runeMed.critChance;
        stats.dodgeChance = stats.dodgeChance + headSlot.runeMed.dodgeChance;
    }
    else {
        return;
    }
}

//adds body slot stats to player.stats
function bodyCalc() {
    if (body.options[body.selectedIndex].value == "mage-robe"){
        stats.damage = stats.damage + bodySlot.mageRobe.damage;
        stats.damageM = stats.damageM + bodySlot.mageRobe.damageM;
        stats.defence = stats.defence + bodySlot.mageRobe.defence;
        stats.defenceM = stats.defenceM + bodySlot.mageRobe.defenceM;
        stats.critChance = stats.critChance + bodySlot.mageRobe.critChance;
        stats.dodgeChance = stats.dodgeChance + bodySlot.mageRobe.dodgeChance;
    }
    else if (body.options[body.selectedIndex].value == "leather-tunic"){
        stats.damage = stats.damage + bodySlot.leatherTunic.damage;
        stats.damageM = stats.damageM + bodySlot.leatherTunic.damageM;
        stats.defence = stats.defence + bodySlot.leatherTunic.defence;
        stats.defenceM = stats.defenceM + bodySlot.leatherTunic.defenceM;
        stats.critChance = stats.critChance + bodySlot.leatherTunic.critChance;
        stats.dodgeChance = stats.dodgeChance + bodySlot.leatherTunic.dodgeChance;
    }
    else if (body.options[body.selectedIndex].value == "rune-chain"){
        stats.damage = stats.damage + bodySlot.runeChain.damage;
        stats.damageM = stats.damageM + bodySlot.runeChain.damageM;
        stats.defence = stats.defence + bodySlot.runeChain.defence;
        stats.defenceM = stats.defenceM + bodySlot.runeChain.defenceM;
        stats.critChance = stats.critChance + bodySlot.runeChain.critChance;
        stats.dodgeChance = stats.dodgeChance + bodySlot.runeChain.dodgeChance;
    }
    else {
        return;
    }
}

//calculates stats as base stats + equipment stats
function calcStats() {
    resetStats();
    console.log(head.options[head.selectedIndex].value);
    console.log(body.options[body.selectedIndex].value);
    console.log(legs.options[legs.selectedIndex].value);
    console.log(mainHand.options[mainHand.selectedIndex].value);
    console.log(offHand.options[offHand.selectedIndex].value);
    console.log(ring.options[ring.selectedIndex].value);
    console.log(amulet.options[amulet.selectedIndex].value);

    headCalc();
    bodyCalc();

    showStats();
}
//on click/on change function triggers from html

//pulls select elements as variables for addEventListeners
const head = document.getElementById("head");
const body = document.getElementById("body");
const legs = document.getElementById("legs");
const mainHand = document.getElementById("main-hand");
const offHand = document.getElementById("off-hand");
const ring = document.getElementById("ring");
const amulet = document.getElementById("amulet");

//detects changes in select elements
//pulls select values and recalcs stats upon any changes
head.addEventListener('change', function handleChange(event) {
    calcStats();
});
body.addEventListener('change', function handleChange(event) {
    calcStats();
});
legs.addEventListener('change', function handleChange(event) {
    calcStats();
});
mainHand.addEventListener('change', function handleChange(event) {
    calcStats();
});
offHand.addEventListener('change', function handleChange(event) {
    calcStats();
});
ring.addEventListener('change', function handleChange(event) {
    calcStats();
});
amulet.addEventListener('change', function handleChange(event) {
    calcStats();
});

//pulls values from outside of event handlers
console.log(head.options[head.selectedIndex].value);
console.log(body.options[body.selectedIndex].value);
console.log(legs.options[legs.selectedIndex].value);
console.log(mainHand.options[mainHand.selectedIndex].value);
console.log(offHand.options[offHand.selectedIndex].value);
console.log(ring.options[ring.selectedIndex].value);
console.log(amulet.options[amulet.selectedIndex].value);


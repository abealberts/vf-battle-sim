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

console.log("Current Player Stats " , player.stats);

//shortcuts
let stats = player.stats;

let elemMaxHp = document.getElementById('maxHp');
let elemCurrentHp = document.getElementById('currentHp');
let elemDamage = document.getElementById('damage');
let elemDamageM = document.getElementById('damageM');
let elemDefence = document.getElementById('defence');
let elemDefenceM = document.getElementById('defenceM');
let elemCritChance = document.getElementById('critChance');
let elemDodgeChance = document.getElementById('dodgeChance');
let elemGold = document.getElementById('gold');

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
}


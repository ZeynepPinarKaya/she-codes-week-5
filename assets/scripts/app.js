const ATTACK_VALUE = 110;

let chosenMaxLife = 500;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);

    currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', attackHandler);
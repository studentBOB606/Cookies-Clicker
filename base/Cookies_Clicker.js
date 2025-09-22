let count = 0;
const countDiv = document.getElementById('count');
const btn = document.getElementById('cookieBtn');
const shopBtn = document.getElementById('shopBtn');
const multiplierBtn = document.getElementById('multiplierBtn');
const cpsDiv = document.getElementById('cps');
const AutoRate = 1000; // elke seconde
let multiplier = 1;
let multiplierCost = 10;
let autoClickerCost = 5;
let autoClickerCount = 0; // Track number of autoclickers

// Cookie button
btn.addEventListener('click', function() {
    count += multiplier;
    updateCount();
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 200);
});

// Shop button -> koop AutoClicker (meerdere keren mogelijk)
shopBtn.addEventListener('click', function() {
    if (count >= autoClickerCost) {
        count -= autoClickerCost;
        updateCount();

        autoClickerCount++; // Increment autoclicker count
        updateCPS(); // Update CPS display

        // Start een nieuwe interval voor deze autoclicker
        setInterval(() => {
            count += multiplier;
            updateCount();
        }, AutoRate);

        // Prijs verdubbelt
        autoClickerCost *= 2;
        shopBtn.textContent = `🛒 Koop AutoClicker (${autoClickerCost})`;

        alert("Nieuwe AutoClicker gekocht!");
    } else {
        alert("Je hebt minimaal " + autoClickerCost + " cookies nodig!");
    }
});

// Multiplier button -> verdubbelt multiplier
multiplierBtn.addEventListener('click', function() {
    if (count >= multiplierCost) {
        count -= multiplierCost;
        multiplier *= 2;
        multiplierCost *= 2;
        updateCount();

        multiplierBtn.textContent = `✨ Koop Multiplier (${multiplierCost})`;
        alert("Multiplier gekocht! Je cookies tellen nu x" + multiplier);
    } else {
        alert("Je hebt minimaal " + multiplierCost + " cookies nodig!");
    }
});

// Handige functie
function updateCount() {
    countDiv.textContent = count;
}

// Update CPS display
function updateCPS() {
    cpsDiv.textContent = "per second: " + (autoClickerCount * multiplier);
}

// Initialize CPS display
updateCPS();



const input = document.getElementById('playerName');

  input.addEventListener('input', () => {
    if (!input.value.endsWith(" bakery")) {
      input.value = input.value.replace(/ bakery$/, '') + " bakery";
    }
  });
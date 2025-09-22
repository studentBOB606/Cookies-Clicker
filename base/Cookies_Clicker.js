let count = 0;
const countDiv = document.getElementById('count');
const btn = document.getElementById('cookieBtn');
const shopBtn = document.getElementById('shopBtn');
const multiplierBtn = document.getElementById('multiplierBtn');
const cpsDiv = document.getElementById('cps');
const AutoRate = 1000; // every second
let multiplier = 1;
let multiplierCost = 100;
let autoClickerCost = 25;
let autoClickerCount = 0;

// Cookie button
btn.addEventListener('click', function() {
    count += multiplier;
    updateCount();
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 200);
});

// Shop button -> buy AutoClicker (multiple purchases possible)
shopBtn.addEventListener('click', function() {
    if (count >= autoClickerCost) {
        count -= autoClickerCost;
        updateCount();

        autoClickerCount++;
        updateCPS();

        // Start a new interval for this autoclicker
        setInterval(() => {
            count += multiplier;
            updateCount();
        }, AutoRate);

        // Price increases
        autoClickerCost = Math.floor(autoClickerCost * 1.15);
        shopBtn.innerHTML = `🤖 Auto Clicker<br><small>Clicks the cookie automatically<br>Cost: ${autoClickerCost} cookies</small>`;

        alert("New Auto Clicker purchased!");
    } else {
        alert("You need at least " + autoClickerCost + " cookies!");
    }
});

// Multiplier button -> doubles multiplier
multiplierBtn.addEventListener('click', function() {
    if (count >= multiplierCost) {
        count -= multiplierCost;
        multiplier *= 2;
        multiplierCost = Math.floor(multiplierCost * 2.5);
        updateCount();

        multiplierBtn.innerHTML = `✨ Click Multiplier<br><small>Doubles your clicking power<br>Cost: ${multiplierCost} cookies</small>`;
        alert("Multiplier purchased! Your cookies now count x" + multiplier);
    } else {
        alert("You need at least " + multiplierCost + " cookies!");
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
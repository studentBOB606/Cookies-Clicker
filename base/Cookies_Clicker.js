let count = 0;
const countDiv = document.getElementById('count');
const btn = document.getElementById('cookieBtn');
const shopBtn = document.getElementById('shopBtn');
const multiplierBtn = document.getElementById('multiplierBtn');
const cpsDiv = document.getElementById('cps');
const AutoRate = 1000; // every second
let multiplier = 1;
let multiplierCost = 50;
let autoClickerCost = 250;
let autoClickerCount = 0;

// Cookie button
btn.addEventListener('click', function() {
    count += multiplier;
    updateCount();
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 200);
});

// Multiplier button -> doubles multiplier
multiplierBtn.addEventListener('click', function() {
    if (count >= multiplierCost) {
        count -= multiplierCost;
        multiplier *= 2;
        multiplierCost *= 2.9;
        updateCount();
        multiplierBtn.innerHTML = `Multiplier<br><small>Doubles your clicking power<br>Cost: ${multiplierCost} cookies</small>`;
        alert("Multiplier bought! Your cookies now counts x" + multiplier);
        updateCPS();
    } else {
        alert("You need minimum " + multiplierCost + " cookies!");
    }
});

// Shop button -> buy AutoClicker (multiple purchases possible)
shopBtn.addEventListener('click', function() {
    if (count >= autoClickerCost) {
        count -= autoClickerCost;
        updateCount();

        autoClickerCount += 0.5; // Increase by 0.5
        updateCPS();

        // Start a new interval for this autoclicker
        setInterval(() => {
            count += 0.5 * multiplier;
            updateCount();
        }, AutoRate);

        autoClickerCost *= 2.9;
        shopBtn.innerHTML = `Grandma<br><small>Produces cookies automatically<br>Cost: ${autoClickerCost} cookies</small>`;
        alert("Grandma bought!");
    } else {
        alert("You need minimum " + autoClickerCost + " cookies!");
    }
});

// Handige functie
function updateCount() {
    countDiv.textContent = count;
}

// Update CPS display
function updateCPS() {
    cpsDiv.textContent = "per second: " + (autoClickerCount * multiplier).toFixed(1);
}

// Initialize CPS display
updateCPS();
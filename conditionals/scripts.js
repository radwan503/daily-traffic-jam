const select = document.getElementById('weather');
const temp = document.getElementById('temperature')

const p = document.querySelector('p');

select.addEventListener('change', weather)
temp.addEventListener('change', weatherBasedOnTemp)

function weather() {
    const choice = select.value
    console.log(choice);
    if (choice === 'sunny') {
        p.innerText = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.'
    } else if (choice === 'rainy') {
        p.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.'
    } else if (choice === 'snowing') {
        p.innerHTML = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.'
    } else if (choice === 'overcast') {
        p.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        p.textContent = ''
    }
}


function weatherBasedOnTemp() {
    const tempValue = temp.value;
    if (tempValue > 85) {
        p.innerText = tempValue
    }
}




let cheese = 'Cheddar';

if (cheese) {
    console.log('Yay! Cheese available for making cheese on toast.');
} else {
    console.log('No cheese on toast for you today.');
}

let shoppingDone = false;
let childsAllowance;

if (shoppingDone) { // don't need to explicitly specify '=== true'
    console.log(childsAllowance = 10)
} else {
    childsAllowance = 5;
    console.log(childsAllowance)
}
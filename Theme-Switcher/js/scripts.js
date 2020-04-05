const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');
const solarBtn = document.getElementById('solar');
const body = document.body;

//Apply cached theme on reload

const theme = localStorage.getItem('theme');

//buttons

darkBtn.onclick = () => {
    body.classList.replace('light', 'dark');
};

lightBtn.onclick = () => {
    body.classList.replace('dark', 'light');
};

solarBtn.onclick = () => {
    
    if (body.classList.contains('solar')) {
        body.classList.remove('solar');
        solarBtn.style.cssText = `
            --bg-solar: var(--yellow);
        `

        solarBtn.innerText = 'solarize';

    }else {
        body.classList.add('solar');

        solarBtn.style.cssText = `
            --bg-solar: var(white);
        `
        solarBtn.innerText = 'normalize';
    }
};
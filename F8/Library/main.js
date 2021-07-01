/* import html from "./core.js";

const cars = ['BMW', 'Honda', 'VinFast'];
const output = html`
    <h1>${true}</h1>
    <ul>
        ${cars.map(car => `<li>${car}</li>`).join('')}
    </ul>`;
console.log(output); */
import { attach } from "./store.js";
import app from "./Component/app.js";

attach(app, document.getElementById('root'));
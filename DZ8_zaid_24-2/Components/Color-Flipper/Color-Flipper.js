import chroma from "chroma-js";

export default function ColorFlipper() {
    let color = chroma.random();
    color = color.toString().toUpperCase();

    return `
    <div class="color-block" style="background-color: ${color}">
    <div class="color__text">
    <h2 data-type="copy" style="color: white;">Background: ${color}</h2>
    </div>
    <button data-type="switch" id="click">Click</button>
    </div>`;
}
import ColorFlipper from "./Components/Color-Flipper/Color-Flipper";

const appElement = document.querySelector("#app");


const generateColor = () => {
    appElement.innerHTML = ColorFlipper() ;
};

generateColor()

document.body.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const action = clickedElement.dataset.type;
    if(!action) return;
    switch (action) {
        case "switch":
            generateColor()
            break;
    } 
})

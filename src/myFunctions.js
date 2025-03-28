import { Button } from './myButton.js';
import { ColorButton } from './myColorButton.js';
import { arrTexts, arrColors } from './myArrays.js';

const arrButtons = [];
export function createButtons() {
    

    arrTexts.forEach((text, index) => {
        const btnTitle = `${text} is shown on the ${arrColors[index]} background`;
        arrButtons.push(new Button(text, arrColors[index], btnTitle));
    });
    return arrButtons;
}

export function displayButtonsWithDelay(arrButtons, delay = 1000) {
    arrButtons.forEach((button, index) => {
        setTimeout(() => {
            button.show();
        }, index * delay);
    });
}

export function createColorButton() {
    const colorButton = new ColorButton("Color Button", "Purple", "This is a color button", "White");
    arrButtons.push(colorButton);
}   
import { Button } from './myButton.js';

export class ColorButton extends Button {
    constructor(btnText, btnBgColor, btnTitle, fColor) {
        super(btnText, btnBgColor, btnTitle);
        this.fColor = fColor;
    }

    show() {
        document.write(`
            <button 
                style="background-color: ${this.btnBgColor}; color: ${this.fColor}; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin: 5px;" 
                title="${this.btnTitle}"
            >
                ${this.btnText}
            </button>
        `);
    }
}
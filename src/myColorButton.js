import { Button } from './myButton.js';

export class ColorButton extends Button {
    constructor(btnText, btnBgColor, btnTitle, fColor) {
        super(btnText, btnBgColor, btnTitle);
        this.fColor = fColor;
    }

    getButtonStyles() {
        return `${super.getButtonStyles()} color: ${this.fColor};`;
    }

    show() {
        document.write(`
            <button 
                style="${this.getButtonStyles()}" 
                title="${this.btnTitle}"
            >
                ${this.btnText}
            </button>
        `);
    }
}
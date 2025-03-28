export class Button {
    constructor(btnText, btnBgColor, btnTitle) {
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        this.btnTitle = btnTitle;
    }

    getButtonStyles() {
        return `background-color: ${this.btnBgColor}; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin: 5px;`;
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
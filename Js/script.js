class Button{
    constructor(btnText,btnBgColor,btnTitle){
        this.btnText = btnText
        this.btnBgColor = btnBgColor
        this.btnTitle = btnTitle
    }

    show(){
        document.open()
        document.write(`
            <div id="container">
                <button style=background-color:${this.btnBgColor};>${this.btnText}</button>                
            </div>`
            )
        document.close()
    }
}

arrTexts = ["Save Progress","Click Me","Download","See More"]
arrColors = ["Green","Grey","Light","Red"]
arrButtons = []

arrTexts.forEach((element,index) => {
    arrButtons.push(new Button(element,arrColors[index],`${element}
        is shown on the ${arrColors[index]} background`))
});

arrButtons.forEach(element => {
    element.show(); 
});
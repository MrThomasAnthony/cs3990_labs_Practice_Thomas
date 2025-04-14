let hannaShop = [
    {
    group: "Coffee beans",
    name: "Colombian Supremo Coffee",
    price: 21.89,
    image:
    "images/coffebeans.png"
    },
    {
    group: "Coffee beans",
    name: "Ethiopian Sidamo Coffee",
    price: 23.49,
    image: "https://www.ethiocoffee.ca/img/p/3/7/37-large_default.jpg",
    },
    {
    group: "Coffee and Tea Accessories",
    name: "Milk Frother",
    price: 13.97,
    image: "https://m.media-amazon.com/images/I/41woZkL5CKL._AC_US100_.jpg",
    },
    {
    group: "Coffee makers",
    name: "Braun Drip Coffee Maker",
    price:
    139,
    image: "https://m.media-amazon.com/images/I/41N4HzzYZfL._AC_US100_.jpg",
    },
    ];

let checkBoxes = []

class Item{
    constructor(group,name,price,image){
        this.group = group
        this.name = name
        this.price = price
        this.image = image
    }

    render(){
        let product_div = document.createElement('div')
        product_div.id = 'product';

        let product_group = document.createElement('h2')
        product_group.textContent = this.group;

        let product_img = document.createElement('img')
        product_img.src = this.image;

        let product_price = document.createElement('p')
        product_price.textContent = this.price;

        $('#itemsGallery').append(product_div)
        $('#product').append(product_group)
        $('#product').append(product_img)
        $('#product').append(product_price)
    }
}

class CheckBox{
    constructor(id, type, checked){
        this.id = id
        this.type = type
        this.checked = checked
    }

    render(){
        let checkBox = document.createElement('input')
        checkBox.type = this.type
        checkBox.id = this.id
        checkBox.checked = this.checked

        $('#n_items').append(checkBox)
    }

    set_check(checked){
        this.checked = checked
    }
}

// Define the function to generate the desired number of instances and fill itemsGallery section. 
// The first N items from your data will be displayed. Use the following template.   

function generateItems(n){

    $('#itemsGallery').empty()

    for (let index = 0; index < n; index++) {
        let product = hannaShop[index]
        let item = new Item(product['group'],product['name'],product['price'],product['image'])
        item.render()
        console.log(item.group)
    }
}

function generateCheckBoxes(n){
    for (let index = 0; index < n; index++) {
        let checkBox = new CheckBox(index,'checkbox',false)
        checkBox.render()
        checkBoxes.push(checkBox)
        console.log(checkBoxes)
    }
}

$('h3').append('<span class = before> - Click to </span>')

$('#itemsGroups').click(function(){
    $('span').toggleClass('after')
})

generateCheckBoxes(4)
console.log(checkBoxes[0].checked)
$('#0').click(function(){
    generateItems(1)
    for (let index = 0; index < 1; index++) {
        checkBoxes[index].set_check(true);
    }
})

$('#1').click(function(){
    generateItems(2)
    for (let index = 0; index < 2; index++) {
        checkBoxes[index].set_check(true);
    }
})


$('#2').click(function(){
    generateItems(3)
    for (let index = 0; index < 3; index++) {
        checkBoxes[index].set_check(true);
    }
})

$('#3').click(function(){
    generateItems(4)
    for (let index = 0; index < 4; index++) {
        checkBoxes[index].set_check(true);
    }
})
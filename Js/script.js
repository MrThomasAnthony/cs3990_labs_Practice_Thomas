document.getElementById('loginBtn').addEventListener('click', function() {
    const user = prompt("Enter your role (admin, student, or other):").toLowerCase();
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    switch (user) {
        case 'admin':
            contentDiv.innerHTML = `
                <button id="sayHiBtn">Say Hi</button>
                <button id="favAnimalBtn">Favorite Animal</button>
            `;
            document.getElementById('sayHiBtn').addEventListener('click', task1);
            document.getElementById('favAnimalBtn').addEventListener('click', task2);
            break;
        case 'student':
            contentDiv.innerHTML = `<button id="sayHiBtn">Say Hi</button>`;
            document.getElementById('sayHiBtn').addEventListener('click', task1);
            break;
        default:
            contentDiv.innerHTML = `<p>I don't know you</p>`;
    }
});

function task1() {
    const lang = prompt("Enter the abbreviation of your language (Eng, Fr, De, Spa):").toLowerCase();
    let greeting;

    switch (lang) {
        case 'eng':
            greeting = 'Hello';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        case 'de':
            greeting = 'Hallo';
            break;
        case 'spa':
            greeting = 'Hola';
            break;
        default:
            greeting = 'Sorry, but I do not speak your language.';
    }

    alert(greeting);
}

function task2() {
    const birthYear = parseInt(prompt("Enter your year of birth:"));
    const age = new Date().getFullYear() - birthYear;

    if (age > 55) {
        document.getElementById('content').innerHTML = `
            <p>Much like mathematics, programming is a logico-deductive system. And I think the important point that I am making is that in a purely logico-deductive system there is no philosophy - everything is known. However, insofar as there is art in mathematics, there is philosophy in mathematics. Insofar as there is art in programming, there is philosophy in programming.</p>
        `;
    } else if (age >= 18 && age <= 55) {
        const animal = prompt("Enter your favorite animal (Cat, Dog, Frog, Mouse):").toLowerCase();
        let imageUrl;

        switch (animal) {
            case 'cat':
                imageUrl = 'cat.jpg';
                break;
            case 'dog':
                imageUrl = 'dog.jpg';
                break;
            case 'frog':
                imageUrl = 'frog.jpg';
                break;
            case 'mouse':
                imageUrl = 'mouse.jpg';
                break;
            default:
                imageUrl = 'default.jpg';
        }

        document.getElementById('content').innerHTML = `<img src="${imageUrl}" alt="${animal}">`;
    } else {
        alert("Content is not available due to age restrictions");
    }
}
const login = function() {
    const user = prompt("Enter your login (Admin, Designer, Tester):").toLowerCase();
    let passwordAttempts = 0;
    let password;

    if (user === 'admin') {
        password = generatePassword();
        while (passwordAttempts < 2) {
            const enteredPassword = prompt("Enter your password (6 digits):");
            if (enteredPassword === password) {
                step2Admin();
                return;
            } else {
                passwordAttempts++;
                alert("Incorrect password. Attempts left: " + (2 - passwordAttempts));
            }
        }
        alert("Access denied.");
    } else if (user === 'designer' || user === 'tester') {
        password = user === 'designer' ? '111' : '222';
        while (passwordAttempts < 3) {
            const enteredPassword = prompt("Enter your password:");
            if (enteredPassword === password) {
                user === 'designer' ? step2Designer() : step2Tester();
                return;
            } else {
                passwordAttempts++;
                alert("Incorrect password. Attempts left: " + (3 - passwordAttempts));
            }
        }
        alert("Access denied.");
    } else {
        alert("No such user.");
    }
};

function generatePassword() {
    let password = '';
    for (let i = 0; i < 6; i++) {
        password += Math.floor(Math.random() * 10);
    }
    console.log(password)
    return password;
}

function step2Admin() {
    const age = parseInt(prompt("Enter your age:"));
    const admissionYear = parseInt(prompt("Enter your year of admission to NWP:"));
    const graduationYear = admissionYear + 4;
    const ageAtGraduation = age + (graduationYear - new Date().getFullYear());
    alert(`You will be ${ageAtGraduation} years old and will graduate in ${graduationYear}.`);
}

function step2Designer() {
    const portfolios = parseInt(prompt("Enter the number of available portfolios:"));
    const birthYear = parseInt(prompt("Enter your year of birth:"));
    const age = new Date().getFullYear() - birthYear;

    if (age >= 14 && age <= 18 && portfolios >= 5 && portfolios <= 10) {
        alert("You get a 10% discount on an optional course on Adobe XD.");
    } else if (age > 18 && portfolios >= 10 && portfolios <= 20) {
        alert("You get a 7% discount on an optional course on Adobe XD.");
    } else {
        alert("No discount available.");
    }
}

function step2Tester() {
    const portfolios = parseInt(prompt("Enter the number of available portfolios:"));
    const birthYear = parseInt(prompt("Enter your year of birth:"));
    const age = new Date().getFullYear() - birthYear;

    if (age >= 14 && age <= 18 && portfolios >= 5 && portfolios <= 10) {
        alert("You get a 10% discount on the 'QA Pro' course.");
    } else if (age > 18 && portfolios >= 10 && portfolios <= 20) {
        alert("You get a 7% discount on the 'QA Pro' course.");
    } else {
        alert("No discount available.");
    }
}

document.getElementById('loginBtn').addEventListener('click', login);
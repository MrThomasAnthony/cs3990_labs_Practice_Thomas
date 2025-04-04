
class NumberGenerator {
    constructor() {
        this.number = 0;
        this.newsCount = 0;
        this.element = this.createComponent();
        this.generateNewsBlock();
    }
    
    createComponent() {
        const container = document.createElement('div');
        container.className = 'number-generator';
        
        const title = document.createElement('h3');
        title.textContent = 'Number Generator';
        container.appendChild(title);
        
        const display = document.createElement('div');
        display.className = 'number-display';
        display.textContent = this.number;
        container.appendChild(display);
        
        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'button-group';
        
        const lessBtn = document.createElement('button');
        lessBtn.textContent = '← Less';
        lessBtn.addEventListener('click', () => this.changeNumber(-1));
        
        const generateBtn = document.createElement('button');
        generateBtn.textContent = 'Generate';
        generateBtn.addEventListener('click', () => this.generateRandomNumber());
        
        const greaterBtn = document.createElement('button');
        greaterBtn.textContent = 'Greater →';
        greaterBtn.addEventListener('click', () => this.changeNumber(1));
        
        buttonGroup.appendChild(lessBtn);
        buttonGroup.appendChild(generateBtn);
        buttonGroup.appendChild(greaterBtn);
        container.appendChild(buttonGroup);
        
        return container;
    }
    
    generateRandomNumber() {
        this.number = Math.floor(Math.random() * 101);
        this.updateDisplay();
        this.updateNewsBlock();
    }
    
    changeNumber(amount) {
        this.number += amount;
        this.number = Math.max(0, Math.min(100, this.number));
        this.updateDisplay();
        this.updateNewsBlock();
    }
    
    updateDisplay() {
        this.element.querySelector('.number-display').textContent = this.number;
    }
    
    generateNewsBlock() {
        this.newsContainer = document.createElement('div');
        this.newsContainer.className = 'news-container';
        
        const title = document.createElement('h3');
        title.className = 'news-block-header'
        title.textContent = 'News Block';
        this.newsContainer.appendChild(title);
        
        this.newsList = document.createElement('div');
        this.newsContainer.appendChild(this.newsList);
        
        document.body.appendChild(this.newsContainer);
        this.updateNewsBlock();
    }
    
    updateNewsBlock() {
        // Only update if number has changed
        if (this.newsCount === this.number) return;
        this.newsCount = this.number;
        
        // Delete the existing news
        this.newsList.innerHTML = '';
        
        // Generate new news items
        for (let i = 0; i < this.number; i++) {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            
            const title = document.createElement('h4');
            title.textContent = `Title #${i + 1}`;
            newsItem.appendChild(title);
            
            const content = document.createElement('p');
            content.textContent = 'Lorem ipsum originated as early as 45 BC when Roman scholar Marcus Tullius Geron wrote by Fattoria Bonorum et Maiorum (On the Boundaries of Good and Evil). This treatise discusses various philosophical topics including ethics and politics.';
            newsItem.appendChild(content);
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => {
                newsItem.remove();
                this.number--;
                this.updateDisplay();
            });
            newsItem.appendChild(removeBtn);
            
            this.newsList.appendChild(newsItem);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const numberGenerator = new NumberGenerator();
    app.appendChild(numberGenerator.element);
});
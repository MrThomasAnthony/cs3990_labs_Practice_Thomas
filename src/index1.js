// Array of news resources
const arrResources = [
    {
      srcImg: '/Images/cat.jpg',
      newsTitle: 'title1',
      newsContent: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'
    },
    {
      srcImg: '/Images/default.jpg',
      newsTitle: 'title2',
      newsContent: 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.'
    }
  ];
  
  // News class implementation
  class News {
    constructor(srcImg, newsTitle, newsContent) {
      this.srcImg = srcImg;
      this.newsTitle = newsTitle;
      this.newsContent = newsContent;
      this.likes = 0;
      this.isHidden = false;
    }
  
    // Method to render the news block
    render() {
      const newsBlock = document.createElement('article');
      newsBlock.className = 'news-item';
      
      // Title
      const title = document.createElement('h2');
      title.textContent = this.newsTitle;
      newsBlock.appendChild(title);
      
      // Image
      const img = document.createElement('img');
      img.src = this.srcImg;
      img.alt = this.newsTitle;
      newsBlock.appendChild(img);
      
      // Content paragraph
      const content = document.createElement('p');
      content.textContent = this.newsContent;
      newsBlock.appendChild(content);
      
      // Like counter as stars
      const likeCounter = document.createElement('div');
      likeCounter.className = 'like-counter';
      likeCounter.textContent = '★'.repeat(this.likes);
      newsBlock.appendChild(likeCounter);
      
      // Like button
      const likeBtn = document.createElement('button');
      likeBtn.className = 'like-button';
      likeBtn.textContent = 'LIKE';
      likeBtn.onclick = () => this.incLikes(likeCounter);
      newsBlock.appendChild(likeBtn);
      
      // Hide button
      const hideBtn = document.createElement('button');
      hideBtn.className = 'hide-button';
      hideBtn.textContent = 'HIDE';
      hideBtn.onclick = () => this.hide(newsBlock, likeBtn);
      newsBlock.appendChild(hideBtn);
      
      return newsBlock;
    }
  
    // Method to increment likes
    incLikes(likeCounter) {
      if (!this.isHidden) {
        this.likes++;
        likeCounter.textContent = '★'.repeat(this.likes);
      }
    }
  
    // Method to hide/show the news
    hide(newsBlock, likeBtn) {
      this.isHidden = !this.isHidden;
      
      if (this.isHidden) {
        newsBlock.style.opacity = '0.7';
        newsBlock.style.color = 'darkgray';
        newsBlock.style.backgroundColor = 'lightgray';
        likeBtn.disabled = true;
      } else {
        newsBlock.style.opacity = '1';
        newsBlock.style.color = '';
        newsBlock.style.backgroundColor = '';
        likeBtn.disabled = false;
      }
    }
  
    // Method to display the news in a container
    show(container) {
      const newsElement = this.render();
      container.appendChild(newsElement);
    }
  }
  
  // Function to generate news items
  function generateNews() {
    const contentDiv = document.getElementById('content');
    const paragraphs = contentDiv.querySelectorAll('p');
    
    paragraphs.forEach((paragraph, index) => {
      if (index < arrResources.length) {
        const resource = arrResources[index];
        const newsItem = new News(resource.srcImg, resource.newsTitle, resource.newsContent);
        newsItem.show(paragraph);
      }
    });
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    generateNews();
    
    // Optional: Add click handler for the existing button
    document.getElementById('myBtn').addEventListener('click', () => {
      alert('Button clicked!');
    });
  });
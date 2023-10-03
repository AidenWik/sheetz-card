import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class SheetzCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css` 
  .card-wrapper {
  display: inline-block;
  max-width: 400px; /* Set the maximum width of the card */
  width: 100%; /* Make the card responsive within the parent container */
  padding: 20px; /* Add padding for spacing */
  border: 1px solid #ccc;
  text-align: center;
  position: relative;
  margin-bottom: 200px;
}
.card-wrapper:hover {
  background-color: lightblue;
  transition: background-color 0.3s;
}

.card-wrapper img {
  width: 100%; /* Set the width of the image to 100% to fit the card width */
  max-height: 300px; /* Set a fixed maximum height for the image */
  object-fit: cover; /* Maintain aspect ratio and cover the entire image area */
}

/* Media query to scale the card on screens smaller than 500px */
@media (max-width: 500px) {
  .card-wrapper {
    max-width: 100%; /* Expand the card to the full width of the viewport */
    padding: 10px; /* Adjust padding for smaller screens if needed */
  }
}

.Sheetz label {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin: 0;
  font-size: 50px;
  color: white;
  background: red;
}
.directions label {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin: 0;
  color: Black;
}
.Favorites label {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 30px;
  color: white;
  background: black;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px auto;
}
.btn-wrapper button {
  font-size: 40px;
  color: blue;
  background-color: white;
}
.btn-wrapper button:hover {
  color: white;
  background-color: blue;
}
.images {
  display: flex;
  justify-content: center;
  align-items: center;
}
.images img {
  height: auto;
  max-width: 30%;
}

.paragraphs {
  display: flex;
  justify-content: center;
  align-items: center;
}
.paragraphs p {
  /* Styles for the first paragraph */
  padding-right: 20px;
  padding-bottom: 20px;
}
.card-wrapper .detailsBtn button {
  position: absolute;
  bottom: 0px;
  right: 0px;
  font-size: 14px;
  padding: 8px 16px;
  background-color: blue;
  cursor: pointer;
  color: white;
}
.detailsBtn button:hover {
  color: blue;
  background-color: white;
}

.duper button {
  color: white;
  background-color: blue;
}
.duper button:focus {
  color: blue;
  background-color: white;
}
/* Show the details button between 500px and 800px */
@media (max-width: 800px) {
  .detailsBtn button {
    display: none;
  }
}
.card-wrapper.alt-bg {
  background-color: lightblue;
}
.card-wrapper.alt-bg2 {
  background-color: lightgreen;
}
.hidden {
  display: none;
}
  `;

  constructor() {
    super();
    this.header = 'My app';
  }
  dupeCard(){
    //BTOPROS DUPE CARD
    /*duplicateCard() {
  const cards = this.shadowRoot.querySelectorAll('.container');
  const clone = cards[0].cloneNode(true);
  clone.querySelector('.toggle-button').classList.remove('hidden');
  this.shadowRoot.querySelector('.wrapper').appendChild(clone);

  const toggleDescriptionButton = clone.querySelector('.toggle-button');
  const cardDescription = clone.querySelector('.description');
  toggleDescriptionButton.addEventListener('click', () => {
    cardDescription.classList.toggle('hidden');
  });
}
*/ 
    const cardContainer = document.querySelector('sheetz-card').shadowRoot.querySelector('.card-container');
    const cardWrapperClone = document.querySelector('sheetz-card').shadowRoot.querySelector('.card-container').cloneNode(true);
  
    // Add unique classes to the cloned elements
    
    cardWrapperClone.classList.add('cloned-card');
  
    cardContainer.appendChild(cardWrapperClone);
    // Set up event listeners for the cloned button
    const clonedToggleDetailsButton = cardWrapperClone.querySelector('.detailsBtn');
    const clonedParagraphsSection = cardWrapperClone.querySelector('.paragraphs');
  
     //clonedParagraphsSection.classList.toggle('hidden');
  }
  deleteCard(){
    // Code for deleting the last card
    const cardContainer = document.querySelector('sheetz-card').shadowRoot.querySelector('.card-container');
    const cardWrappers = document.querySelector('sheetz-card').shadowRoot.querySelectorAll('.card-wrapper');
    // Check if there's at least one card to delete
    if (cardWrappers.length > 1) {
      const lastCard = cardWrappers[cardWrappers.length - 1];
      cardContainer.removeChild(lastCard);
    }
    }
    changeTitle(){
        const headings = document.querySelector('sheetz-card').shadowRoot.querySelectorAll('.sheetzLbl'); // Corrected class name
        headings.forEach((heading) => {
        heading.textContent = "something else";
        });
    }
  
    changeBackground(){
      const cardWrappers = document.querySelector('sheetz-card').shadowRoot.querySelectorAll('.card-wrapper');
      /* loop to change each existing iteration*/
      cardWrappers.forEach((cardWrapper) => {
      cardWrapper.classList.toggle('alt-bg');
      });
      }
  detailsToggle(){
    // JavaScript to toggle visibility of the paragraph descriptions
// const details = document.querySelector('sheetz-card').shadowRoot.querySelector('.toggle-details');
const toggleDetailsButtons = document.querySelector('sheetz-card').shadowRoot.querySelectorAll('.detailsBtn');
console.log(toggleDetailsButtons);
toggleDetailsButtons.forEach((button, index) => { 
  console.log(toggleDetailsButtons);
  const paragraphsSections = document.querySelector('sheetz-card').shadowRoot.querySelectorAll('.paragraphs');
  paragraphsSections[index].classList.toggle('hidden');
  });
}
  render() {
    return html`
    <head>
      <title>Homework IST 256 Sheetz</title>
    </head>
    <body>
      <div class="card-container">
        <div class="card-wrapper">
        <div class="Sheetz">
          <label class="sheetzLbl">Sheetz</label>
        </div>
          <div class="directions">
            <label id="directionsLbl">Directions</label>
          </div>
            <div class="Favorites">
              <label id="Favoriteslbl">Favorites</label>
            </div>
              <div class="btn-wrapper">
                <button>Hotdog</button>
                <button>Fries</button>
                <button>Shake</button>
              </div>
                <div class="images">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png" alt="A beautiful landscape">
                  <img src="https://pngimg.com/uploads/fries/fries_PNG73.png">
                  <img src="https://gofericecream.com/wp-content/uploads/2021/06/shake-.png">
                </div>
                  <div class="detailsBtn">
                    <button class="detailsBtn" @click="${this.detailsToggle}">Details</button>
                  </div>
                    <div class="paragraphs">
                      <p>$1.99 <br>A food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. </p>
                      <p>$0.99 <br>Side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips. </p>
                      <p>$5.99 <br> A sweet beverage made by blending milk, ice cream, and flavorings or sweeteners. </p>
                    </div>
          </div>
        </div>
  <div class="duper">
    <button id="duper" @click="${this.dupeCard}">Button for duplication</button>
  </div>
  <div class="background" @click="${this.changeBackground}">
    <button id="background">Change Background</button>
  </div>
  <div class="title">
    <button id="title" @click="${this.changeTitle}">Change Title</button>
  </div>
  <div class="delete">
    <button id="deleteLastCard" @click="${this.deleteCard}">Delete Last Card</button>
  </div>
     </body>
    `;
  }

}


customElements.define('sheetz-card', SheetzCard);


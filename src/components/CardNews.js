class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const author = document.createElement("span");
    author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

    const linkTItle = document.createElement("a");
    linkTItle.textContent = this.getAttribute("title");
    linkTItle.href = this.getAttribute("link-url");
    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTItle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");

    const newsImage = document.createElement("img");
    newsImage.src =
      this.getAttribute("photo") || "assets/photo-deafult(perso).png";
    newsImage.alt = this.getAttribute("alt-text") || "Foto da Notícia";
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  style() {
    const style = document.createElement("style");

    style.textContent = `
    
    .card {
      width: 80vw;
      box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.75);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    .card_left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 1rem;
    }
    
    .card_left > span {
      font-weight: 400;
    }
    
    .card_left > a {
      font-weight: bold;
      margin-top: 1rem;
      font-size: 25px;
      text-decoration: none;
    }
    
    .card_left > p {
      color: rgb(90, 90, 90);
    }
    
    
    `;

    return style;
  }
}

customElements.define("card-news", Cardnews);

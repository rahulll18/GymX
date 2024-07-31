const productsContainer = document.getElementById("productsContainer");

 // getElementById
 productsList.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.setAttribute("class", "productDiv");

    const productHeading = document.createElement("h2");
    productHeading.innerHTML = product.pHeading;
    productElement.append(productHeading);

    const imageContainer = document.createElement("img");
    imageContainer.setAttribute("class", "productImg");
    imageContainer.src = product.imgUrl;
    productElement.append(imageContainer);

    const pDescription = document.createElement("p");
    pDescription.innerHTML = product.description;
    productElement.append(pDescription);

    const price = document.createElement("div");
    price.setAttribute("class", "entirePrice");
    productElement.append(price);

    const mainPrice = document.createElement("div");
    mainPrice.setAttribute("class", "mainPrice");
    mainPrice.innerHTML = product.price;
    price.append(mainPrice);

    const strikePrice = document.createElement("div");
    strikePrice.setAttribute("class", "strikePrice");
    strikePrice.innerHTML = product.strikePrice;
    price.append(strikePrice);

    const offerPrice = document.createElement("div");
    offerPrice.setAttribute("class", "offerPrice");
    offerPrice.innerHTML = product.offerPrice;
    price.append(offerPrice);

    const button = document.createElement("button");
    button.setAttribute("class", "buy-btn");
    button.innerHTML = "Buy Now";
    productElement.append(button);

    productsContainer.append(productElement);
  });
const products = [];

const contrusctProduct = (product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("card");
  productCard.innerHTML = `
     <div class="card-img">
      <img
        src="${product.image}"
        alt="${product.title}"
      />
    </div>
    <div class="card-title">${
      product.title.length > 19
        ? product.title.slice(0, 20) + "..."
        : product.title
    }</div>
    <div class="card-description">
      <div class="card-desc-text">
        ${product.description.slice(0, 40)}...
      </div>
      <div class="card-desc-icon">
        <i class="fa-regular fa-heart"></i>
      </div>
    </div>
  `;

  return productCard;
};

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    products.forEach((product) => {
      const productCard = contrusctProduct(product);
      document.querySelector(".cards").appendChild(productCard);
    });
  });

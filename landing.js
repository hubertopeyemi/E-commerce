let url = "https://fakestoreapi.com/products";
let root = document.getElementById("root");
async function getProducts() {
  const response = await fetch(url);
  let products = await response.json();
  console.log(products);
  let display = products
    .map((product) => {
      return `<div class="box">
        <div class="img-card">
            <img src=${product.image} alt="man" class="box-img">
        </div>
        <div>
            <p>${product.id}</p>
            <p>${product.title.substr(0, 16)}</p>
            <p>${product.price}</p>
            <p>${product.description.substr(0,30)}</p>
            <p>${product.category}</p>
            

        </div>
    </div>`;
    })
    .join("");

  root.innerHTML = display;
}

getProducts();
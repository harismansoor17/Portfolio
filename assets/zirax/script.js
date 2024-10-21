// Cart
const cartNav = document.querySelector("#cartNav");

function showCart() {
  cartNav.style.right = "0";
}

function hideCart() {
  cartNav.style.right = "-400px";
}

let cart = []; 

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) {
    return; 
  }

  
  const existingProduct = cart.find((item) => item.id === productId);
  
  if (existingProduct) {
    
    existingProduct.quantity++;
    document.getElementById(`quantity-${productId}`).value = existingProduct.quantity;
  } else {
    
    cart.push({ ...product, quantity: 1 });

    
    const { image, title, price } = product;
    document.getElementById("cartItems").innerHTML += `
      <div class="w-full text-black bg-white border-blue-700 border-b-2 border-l-2 relative flex justify-evenly items-center" id="cart-item-${productId}">
        <button
          onclick="removeFromCart(${productId})"
          class="absolute top-0 right-0 m-2 text-xl hover:scale-110 transition-all duration-300 delay-150"
        >
          <i class="fa-regular fa-rectangle-xmark"></i>
        </button>
        <div class="flex justify-evenly w-full">
        <div class="w-24 rounded-xl">
        <img style="height:100px; width:100px; border-radius:12px; margin:1rem;" src="${image}" alt="${productId} Product Image" />
        </div>
        <div class=" flex flex-col justify-center">
        <span class="text-md font-bold">${title}</span>
        <input style="color:white; background-color:#1d4ed8; font-size:12px; outline:none; border-radius:12px; width:50px; padding:4px;" sty id="quantity-${productId}" type="number" value="1" min="1" onchange="updateQuantity(${productId}, this.value)">
        <span class="text-xl font-semibold">price: <span class="price">${price}$</span></span>
        </div>
        </div>
      </div>`;
  }

  updateCartTotal();
  updateItemsInCart(); 
}

function removeFromCart(productId) {
  
  cart = cart.filter((item) => item.id !== productId);

  
  const cartItemElement = document.getElementById(`cart-item-${productId}`);
  if (cartItemElement) {
    cartItemElement.remove();
  }

  updateCartTotal();
  updateItemsInCart();
}

function updateQuantity(productId, newQuantity) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity = parseInt(newQuantity, 10);
  }

  updateCartTotal();
}
function updateCartTotal() {
  const cartTotal = document.getElementById("cartTotal");
  let total = 0;
  cart.forEach((product) => {
    total += product.price * product.quantity;
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
}


function updateItemsInCart() {
  const itemsInCart = document.getElementById('itemsInCart');

  itemsInCart.textContent = cart.length;
}
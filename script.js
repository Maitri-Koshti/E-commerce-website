document.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products') // FakeStoreAPI endpoint
      .then(response => response.json())
      .then(products => {
        displayProducts(products);
      })
      .catch(error => console.error('Error fetching data:', error));
  });

  function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart('${product.title}')">Add to Cart</button>
      `;
      productsContainer.appendChild(productElement);
    });
  }

  function addToCart(productName) {
    alert(`Added ${productName} to cart.`);
  }

  function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase();

    fetch('https://fakestoreapi.com/products') // FakeStoreAPI endpoint
      .then(response => response.json())
      .then(products => {
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(query));
        displayProducts(filteredProducts);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
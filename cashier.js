document.addEventListener('DOMContentLoaded', function() {
  const productButtons = document.querySelectorAll('.product-btn');
  const cartItemsList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const incomeTotal = document.getElementById('income-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  const receipt = document.getElementById('receipt');

  let cart = [];
  let income = 0;

  // Function to update cart display
  function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;
      cartItemsList.appendChild(listItem);
      total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
  }

  // Function to update income display
  function updateIncome() {
    incomeTotal.textContent = income.toFixed(2);
  }

  // Event listeners for product buttons
  productButtons.forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));
      cart.push({ name, price });
      income += price;
      updateCart();
      updateIncome();
    });
  });

  // Checkout button event listener
  checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
      const receiptContent = cart.map(item => `${item.name} - ₱${item.price.toFixed(2)}`).join('<br>');
      receipt.innerHTML = `<h2>Receipt</h2>${receiptContent}<hr>Total: ₱${cartTotal.textContent}`;
      receipt.style.display = 'block';
      alert('Checkout completed. Thank you for your purchase!');
      cart = [];
      income = 0;
      updateCart();
      updateIncome();
    } else {
      alert('Your cart is empty. Please add some products before checkout.');
    }
  });
});

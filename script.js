document.addEventListener('DOMContentLoaded', function () {
    const chocolates = [
      { id: 1, name: 'Cadburry Dairy Milk', price: 2.50 },
      { id: 2, name: 'Dark Chocolate', price: 3.00 },
      { id: 3, name: 'Ferrero Rocher', price: 2.75 },
      { id: 4, name: 'Hazelnut Chocolate', price: 3.50 },
      { id: 5, name: 'Caramel Chocolate', price: 3.25 },
      { id: 6, name: 'Raspberry Chocolate', price: 3.75 },
      { id: 7, name: 'Mint Chocolate', price: 3.20 },
      { id: 8, name: 'Snackers Chocolate', price: 3.40 },
      // Add more chocolates as needed
    ];
  
    const chocolateList = document.getElementById('chocolate-list');
    const totalPriceElement = document.getElementById('price');
    let totalPrice = 0;
  
    chocolates.forEach(chocolate => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = chocolate.price;
      checkbox.id = `chocolate-${chocolate.id}`;
      checkbox.className = 'chocolate-item';
      checkbox.addEventListener('change', updateTotalPrice);
  
      const label = document.createElement('label');
      label.htmlFor = `chocolate-${chocolate.id}`;
      label.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
  
      chocolateList.appendChild(checkbox);
      chocolateList.appendChild(label);
    });
  
    function updateTotalPrice() {
      const selectedChocolates = document.querySelectorAll('.chocolate-item:checked');
      totalPrice = Array.from(selectedChocolates).reduce((sum, checkbox) => sum + parseFloat(checkbox.value), 0);
      totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }
  });
  
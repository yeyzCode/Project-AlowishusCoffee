// Alpine js Data
document.addEventListener('alpine:init', () => {
  Alpine.data( 'products', () => ({
    open: false,
    
    items: [
      { id: 1, name: 'Double Espresso', img: 'product-img-coffee.png', price: 20000 },
      
      { id: 1, name: 'Caramel Frappe', img: 'product-img-coffee.png', price: 20000 },
      
      { id: 1, name: 'Latte Cream', img: 'product-img-coffee.png', price: 20000 },
      
      { id: 1, name: 'Royal Beans', img: 'product-img-coffee.png', price: 20000 },
      
      { id: 1, name: 'Velvet Coffee', img: 'product-img-coffee.png', price: 20000 },
      
      { id: 1, name: 'Vanilla Dream', img: 'product-img-coffee.png', price: 20000 },
      
      { id: 1, name: 'Choco Latte', img: 'product-img-coffee.png', price: 20000 },
      
      { id: 1, name: 'Iced Coffee', img: 'product-img-coffee.png', price: 20000 },
    ]
  }));
});
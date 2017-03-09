var cart = [];
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
];

function listProducts() {
  for (var key in products) {
    console.log("Name: " + products[key].name);
    console.log("Price: " + products[key].price);
    console.log("Description: " + products[key].description);
    console.log("Image Title: " + products[key].imageTitle);
  }
}

function compareProductsByName(a, b) {
  var cmpVal = 0;
  var aName = a.name.toLowerCase();
  var bName = b.name.toLowerCase();
  if (aName < bName) {
    cmpVal = -1;
  }
  else if (aName > bName) {
    cmpVal = 1;
  }
  return cmpVal;
}

function compareProductsByPrice(a, b) {
  return a.price - b.price;
}

function sortProducts(filter) {
  event.preventDefault();
  console.log("Selected Filter is: " + filter.value);
  switch (filter.value) {
    case 'name':
      products.sort(compareProductsByName);
      break;
    case 'price':
      products.sort(compareProductsByPrice);
      break;
    default:
      console.log("Invalid Filter Value: " + filter.value);
  }
  listProducts();
}

function cartPrice(selectedProducts) {
  var totalPrice = 0;
  for (var ix = 0; ix < selectedProducts.length; ix++) {
    if (selectedProducts[ix].price) {
      totalPrice += selectedProducts[ix].price;
    }
  }
  return totalPrice
}

/* 
 Add the productName to the shopping cart.
 */
function addToCart(productName) {
  // if product name is in product list
  if (findProduct(productName) >= 0) {
    // if product is not already in the cart add it
    if (findNameInCart(productName) < 0) {
      cart.push(productName);
    }
  }
  console.log(cart);
}

/*
 Remove the product name from the shopping cart
 */
function removeFromCart(productName) {
  var ix = findNameInCart(productName);
  if (ix >= 0) {
    cart.splice(ix, 1);
  }
  console.log(cart);
}

/*
 Returns the productName index in the shopping cart; otherwise it returns -1
 */
function findNameInCart(productName) {
  var productIndex = -1;
  if (productName != null) {
    productIndex = cart.indexOf(productName);
  }
  return productIndex;
}

/*
 This function returns the product index if productName is found in the product list; otherwise it returns -1.
 */
function findProduct(productName) {
  var productIndex = -1;
  if (productName != null) {
    for (var ix = 0; ix < products.length; ix++) {
      if (products[ix].name === productName) {
        productIndex = ix;
        break;
      }
    }
  }
  return productIndex;
}
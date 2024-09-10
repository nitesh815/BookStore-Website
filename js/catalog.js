let product = document.getElementById("cata");

let basket = JSON.parse(localStorage.getItem("data")) || [];

// ------------------------ display items from data.js file---------------------
let display_item = (id_tab) => {
  product.innerHTML = productsData.map((x) => {
    
      let { id, name, price, author, Publication, img ,subject} = x;
      // console.log(x)
      console.log(id_tab);

      if (id_tab == subject) {
        return `
            <div class="shop_item" id="item_id${id}">
                <div class="img" id="img_id">
                    <img src=${img} />
                </div>
                <div class="product_info">
                    <h2 class="name">${name}</h2>
                    <p class="details">Author : ${author}</p>
                    <p class="details">Publication : ${Publication}</p>
                </div>
                <p class="price"><span>₹</span>${price}</p>
                <button class="btn-add" onclick="add_to_cart('${id}','${name}','${price}','${img}')">Add to Cart</button>
            </div>
            `;
      } 
      else if (id_tab == subject) {
        return `
            <div class="shop_item" id="item_id${id}">
                <div class="img" id="img_id">
                    <img src=${img} />
                </div>
                <div class="product_info">
                    <h2 class="name">${name}</h2>
                    <p class="details">Author : ${author}</p>
                    <p class="details">Publication : ${Publication}</p>
                </div>
                <p class="price"><span>₹</span>${price}</p>
                <button class="btn-add" onclick="add_to_cart('${id}','${name}','${price}','${img}')">Add to Cart</button>
            </div>
            `;
      } 
      else if (id_tab == subject) {
        return `
            <div class="shop_item" id="item_id${id}">
                <div class="img" id="img_id">
                    <img src=${img} />
                </div>
                <div class="product_info">
                    <h2 class="name">${name}</h2>
                    <p class="details">Author : ${author}</p>
                    <p class="details">Publication : ${Publication}</p>
                </div>
                <p class="price"><span>₹</span>${price}</p>
                <button class="btn-add" onclick="add_to_cart('${id}','${name}','${price}','${img}')">Add to Cart</button>
            </div>
            `;
      }
      else if (id_tab == subject) {
        return `
            <div class="shop_item" id="item_id${id}">
                <div class="img" id="img_id">
                    <img src=${img} />
                </div>
                <div class="product_info">
                    <h2 class="name">${name}</h2>
                    <p class="details">Author : ${author}</p>
                    <p class="details">Publication : ${Publication}</p>
                </div>
                <p class="price"><span>₹</span>${price}</p>
                <button class="btn-add" onclick="add_to_cart('${id}','${name}','${price}','${img}')">Add to Cart</button>
            </div>
            `;
      }
      else if (id_tab == null  ) {
        return `
            <div class="shop_item" id="item_id${id}">
                <div class="img" id="img_id">
                    <img src=${img} />
                </div>
                <div class="product_info">
                    <h2 class="name">${name}</h2>
                    <p class="details">Author : ${author}</p>
                    <p class="details">Publication : ${Publication}</p>
                </div>
                <p class="price"><span>₹</span>${price}</p>
                <button class="btn-add" onclick="add_to_cart('${id}','${name}','${price}','${img}')">Add to Cart</button>
            </div>
            `;
      }

      // return `
      // <div class="shop_item" id="item_id${id}">
      // <div class="img" id="img_id">
      // <img src=${img} />
      // </div>
      // <div class="product_info">
      // <h2 class="name">${name}</h2>
      // <p class="details">Author : ${author}</p>
      // <p class="details">Publication : ${Publication}</p>
      // </div>
      // <p class="price"><span>₹</span>${price}</p>
      // <button class="btn-add" onclick="add_to_cart('${id}','${name}','${price}','${img}')">Add to Cart</button>
      // </div>
      // `

      // console.log(x);
    })
    .join("");
};

// ------------------adding items to local storage-------------
console.log(basket);
let add_to_cart = (id, name, price, img) => {
  let selectedItem_id = id;
  let search = basket.find((ele) => ele.id == selectedItem_id);
  // firstly element if not added then add
  if (search === undefined) {
    basket.push({
      id: id,
      item: 1,
      name: name,
      price: price,
      img: img,
    });
  } else {
    search.item++;
  }
  console.log(search);
  localStorage.setItem("data", JSON.stringify(basket));

  cart_items_count();
  // console.log(id)
};

// ---------------- cart icon element count------------
let cart_items_count = () => {
  let cart_icon_items = document.getElementById("lblCartCount");
  let count = Number(0);
  for (let x of basket) {
    count += x.item;
  }
  cart_icon_items.innerHTML = count;

  console.log(basket);
  console.log(count);
};

cart_items_count();
// display_item()
// window.onload=cart_items_count()
// window.onclick=count_cart_items()


// -----------------to Dsplay Specific Books as required-------------------
let tabs = document.getElementById("subject");
display_item(null);
tabs.addEventListener("click", (element) => {
    
    let id_tab = element.target.id;
    console.log(id_tab);
    display_item(id_tab);
});




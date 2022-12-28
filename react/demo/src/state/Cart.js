import React, {useState} from 'react'

var products = 
  [{ name: 'Bose Headphones', price: 20000 },
   { name: 'Logitech Mouse', price: 10000 }];


export default function Cart() {
    var [items, setItems] = useState([])

    function addItem(product, qty) {
        setItems( [...items, {product:product, qty :qty}])  
        console.log(items)
    }

    return (
        <>
            <div>Cart</div>
            <AddItem products={products} addItem={addItem}  />
            <ShowCart products={products} items={items} />
        </>
    )
}


function AddItem({ products, addItem }) { 
  var [qty, setQty] = useState()
  var [product, setProduct] = useState(0)

  function updateQty(e) {
     setQty(e.target.value)
  }

  function updateProduct(e) {
    setProduct(e.target.selectedIndex)
    console.log(e.target.selectedIndex)
 }

  function addItemToCart(e) {
     e.preventDefault()
     addItem(product, qty)
  }

  return(
    <>
       <form onSubmit={addItemToCart}>
        Product 
        <select onChange={updateProduct}  value={product}>
            {
                products.map( (p,idx) => 
                    <option key={idx}  value={p.price}>{p.name}</option>)
            }
        </select>
        Qty : <input type="number"  value={qty} 
           onChange = {updateQty} />
        <button>Add</button>
       </form>
    </>

  )
}

function showCart({products, items}) {
    
    return (
        <>
         <table>
            <thead>
            <tr><th>Product Name</th><th>Price</th><th>Qty</th><th>Amount</th></tr>
            </thead>
            <tbody>
                {
                 cartItems = []
                 items.map( item =>  {
                     var prod = products[item.product]
                     carItems.push(
                     <tr>
                      <td>{prod.name}</td>
                      <td>{prod.price}</td>
                      <td>{item.qty}</td>
                      <td>{item.qty * prod.price}</td>
                    </tr>
                    )
                     }
                 )
                    
                 return cartItems;
                     }                               
            </tbody>
         </table>
            
        </>
    )
}
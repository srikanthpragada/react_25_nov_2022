import React, { useState } from 'react'

var products =
    [{ name: 'Bose Headphones', price: 20000 },
     { name: 'Logitech Mouse', price: 10000 },
     { name: '2GB External Harddisk', price: 8000 },
     { name: '22 Inches ViewSonic  Monitor', price: 20000 }
];


export default function Cart() {
    var [items, setItems] = useState([])

    function addItem(product, qty) {
        // if item is already present then add qty to existing qty 
        var pos = items.findIndex(item => item.product === product)
        if (pos === -1)  //not found 
            setItems([...items, {product: product, qty: qty }])
        else {
            items[pos].qty += parseInt(qty)
            setItems([...items])
        }
    }

    return (
        <>
            <h1>Cart</h1>
            <AddItem products={products} addItem={addItem} />
            <p></p>
            <ShowCart products={products} items={items} />
        </>
    )
}


function AddItem({ products, addItem }) {
    var [qty, setQty] = useState(1)
    var [product, setProduct] = useState(0)

    function updateQty(e) {
        setQty(e.target.value)
    }

    function updateProduct(e) {
        setProduct(e.target.selectedIndex)
    }

    function addItemToCart(e) {
        e.preventDefault()
        addItem(product, parseInt(qty))
    }

    return (
        <>
            <form onSubmit={addItemToCart}>
                Product
                &nbsp;
                <select onChange={updateProduct}>
                    {
                        products.map((p, idx) =>
                            <option key={idx} value={p.price}>{p.name}</option>)
                    }
                </select>
                &nbsp;
                Qty : <input type="number" value={qty} onChange={updateQty} />
                &nbsp;
                <button>Add</button>
            </form>
        </>

    )
}

function ShowCart({ products, items }) {
    var total = 0;
    return (
        <>
            {items.length === 0 ? <h3>Empty Cart</h3> : (
                <table className="table table-bordered">
                    <thead>
                        <tr><th>Product Name</th><th>Price</th><th>Qty</th><th>Amount</th></tr>
                    </thead>
                    <tbody> 
                        {
                            items.map((item, idx) => {
                                var prod = products[item.product]
                                total += prod.price * item.qty
                                return (<tr key={idx}>
                                    <td>{prod.name}</td>
                                    <td className="text-end">{prod.price}</td>
                                    <td className="text-end">{item.qty}</td>
                                    <td className="text-end">{item.qty * prod.price}</td>
                                </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Total</td>
                            <td className="text-end">{total}</td>
                        </tr>
                    </tfoot>
                </table>
            )

            }
        </>
    )
}
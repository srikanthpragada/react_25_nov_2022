import React from 'react'

export default function DiscountCalculator() {

    function calculate(e) {
        //console.log(e)
        e.preventDefault() // prevent default operation (form submission)

        var price = document.getElementById("price").value
        var disRate = document.getElementById("disrate").value
        var discount = price * disRate / 100
        alert(`Discount = ${discount}`)
    }

    return (
        <>
            <h2>Discount Calculator</h2>
            <form onSubmit={calculate}>
                Price <br />
                <input type="number" id="price"  required />
                <p></p>
                Discount Rate <br />
                <input type="number" id="disrate" max="50"  required />
                <p></p>
                <button>Calculate Discount</button>
            </form>
        </>
    )
}

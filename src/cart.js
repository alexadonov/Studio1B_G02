
import React, { Component } from 'react';
import CartItem from "./components/cartitem";
import TopBar from "./components/TopBar";

const dummyItems = [
    {
        id: "44887",
        productName: "Ducky One 2 Mini RGB Mechanical Keyboard Cherry Silver",
        price:159,
        quantity: 1
    },
    {
        id: "47639",
        productName: "Logitech G903 HERO Lightspeed Wireless Gaming Mouse",
        price: 219,
        quantity: 1
    },
    {
        id: "47036",
        productName: "ASUS GeForce RTX 2060 Dual EVO OC 6GB",
        price: 599,
        quantity: 2
    },
]

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: dummyItems
        }
    }

    deleteItem = (itemId) => {
        console.log('DELETE THIS!!', itemId);
        const newItems = this.state.items.filter((item) => item.id !== itemId);
        this.setState({items: newItems});
    };

    render() {
        return (
            <div>
                <TopBar/>
                <h1>Cart</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.items.map((item) => {
                            return <CartItem item={item} deleteItem={this.deleteItem}/>;
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

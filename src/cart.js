import React, {Component} from 'react';
import CartItem from "./components/cartitem";
import Menu from "./components/Menu";
import StripeCheckout from 'react-stripe-checkout';

const dummyItems = [
    {
        id: "44887",
        productName: "Ducky One 2 Mini RGB Mechanical Keyboard Cherry Silver",
        price: 159,
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
            <div class="content rounded">
                <div class="jumbotron1 rounded">
                    <Menu/>
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
                    <StripeCheckout
                      label="Pay with 💳"
                      amount="500" //This should change
                      billingAddress
                      description="Computers & Stuff" //This should change
                      locale="auto"
                      name="Loren Ipsum"
                      stripeKey="pk_test_amIsnVcb4dXtUFh2vbL9EKNo00BAkY8kZo"
                      token={this.onToken}
                      zipCode
                    />
                </div>
            </div>
        );
    }
}

import React, {Component} from 'react';
import CartItem from "./components/cartitem";
import Menu from "./components/Menu";
import StripeCheckout from 'react-stripe-checkout';

const dummyItems = [
    {
        _id: "5d78877668c1611ab0b924bb",
        retailerId: "5d93de2a1c9d440000a88790",
        name: "Car",
        price: 10000000,
        quantity: 1
    },
    {
        id: "5d8da5453bf18a429041283e",
        retailerId: "5d93de2a1c9d440000a88790",
        name: "Toughpad",
        price: 456,
        quantity: 1
    },
    {
        id: "5d943d4a1c9d440000a88792",
        retailerId: "5d93de2a1c9d440000a88790",
        productName: "an item",
        price: 20,
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
                    <br/>
                    <br/>

                    <button onClick="" >Save to Database</button>

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
                      name=""
                      stripeKey="pk_test_amIsnVcb4dXtUFh2vbL9EKNo00BAkY8kZo"
                      token={this.onToken}
                      zipCode
                    />
                </div>
            </div>
        );
    }
}

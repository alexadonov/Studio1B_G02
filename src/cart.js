import React, {Component} from 'react';
import CartItem from "./components/cartitem";
import Menu from "./components/Menu";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import NumberFormat from 'react-number-format';

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
            items: [],
            retailerId: String,
            customerId: String,
            name: String,
            price: String,
            total: 0
        }
    }

    componentDidMount() {
      var m = 0
      var items2 = [];
      axios.get('http://localhost:4000/cart')
        .then((res) => {
          for(var p = 0; p <= res.data.length; p++) {
            if(res.data[p].customerId === localStorage.getItem('userid')) {
              items2[m] = res.data[p];
              this.setState({items: items2})
              this.state.total +=parseInt(res.data[p].price, 10);
              m++;
            }
          }
        })
        .catch(function (error){
          console.log('What happened? ' + error);
        })

      }

    render() {
        return (
            <div class="content rounded">
                <div class="jumbotron1 rounded">
                    <Menu/>
                    <h1>Cart</h1>
                    <br/>
                    <br/>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.items.map(function(item)  {
                                return (
                                  <CartItem item={item}/>

                                )
                            })
                        }

                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td><NumberFormat value={this.state.total} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} /></td>
                          <td>                    <StripeCheckout
                                                label="Pay with 💳"
                                                amount="500" //This should change
                                                billingAddress
                                                description="Computers & Stuff" //This should change
                                                locale="auto"
                                                name=""
                                                stripeKey="pk_test_amIsnVcb4dXtUFh2vbL9EKNo00BAkY8kZo"
                                                token={this.onToken}
                                                zipCode
                                                onClick={function(){
                                                  axios.post('http://localhost:4000/history', this.state.items)
                                                    .then((res) => {})
                                                    .catch(function (error){
                                                      console.log('What happened? ' + error);
                                                    })
                                                    for(var i = 0; i < this.state.items.length; i++) {
                                                      axios.delete('http://localhost:4000/cart/' + this.state.items[i]._id)
                                                        .then((res) => {
                                                          console.log("deleted");
                                                        })
                                                    }
                                                }}
                                              /></td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

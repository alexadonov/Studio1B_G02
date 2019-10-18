import React, {Component} from 'react';
import CartItem from "./components/cartitem";
import Menu from "./components/Menu";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';

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
            productId: String,
            name: String,
            price: String,
            total: 0
        }

        this.saveHistory = this.saveHistory.bind(this);
    }

    componentDidMount() {
      var m = 0
      var items2 = [];
      axios.get('http://localhost:4000/cart')
        .then((res) => {
          for(var p = 0; p <= res.data.length; p++) {
            if(res.data[p].customerId === localStorage.getItem('currentUserId')) {
              items2[m] = res.data[p];

              this.state.total +=parseInt(res.data[p].price, 10);
                this.setState({items: items2})
              m++;
            }
          }
        })
        .catch(function (error){
          console.log('What happened? ' + error);
        })

      }

      saveHistory() {
        for(var q = 0; q < this.state.items.length; q++) {
          var newHistory = {
            customerId: this.state.items[q].customerId,
            retailerId: this.state.items[q].retailerId,
            name: this.state.items[q].name,
            price: this.state.items[q].price,
            productId: this.state.items[q].productId
          }
          console.log(this.state.items[q])
          axios.post('http://localhost:4000/history/add', newHistory)
            .then((res) => {
              for(var i = 0; i < this.state.items.length; i++) {
                console.log(this.state.items[i]._id);
                axios.delete('http://localhost:4000/cart/' + this.state.items[i]._id)
                  .then((res) => {
                    console.log("deleted");
                    window.location = '';
                  })
              }
            })
            .catch(function (error){
              console.log('What happened? ' + error);
            })
        }
      }

    render() {
        return (
            <div class="content rounded">
                <div class="jumbotron1 rounded">
                    <Menu/>
                    <div class="mx-3 row">
        <a class="btn-default2 btn-lg"><u><b>Cart</b></u></a>
        </div>
                    <table class="table table-bordered table-striped text-center">
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

                          <td><b>Total</b></td>
                          <td>
                              <b><CurrencyFormat value={this.state.total} displayType="text" thousandSeparator={true} prefix="$" />.00</b>
                          </td>
                        </tr>
                        </tbody>

                    </table>

                    <StripeCheckout
                      label="Pay with 💳"
                      amount="500" //This should change
                      billingAddress
                      description="Computers & Stuff" //This should change
                      image="/logo.svg"
                      locale="auto"
                      name="Loren Ipsum"
                      stripeKey="pk_test_amIsnVcb4dXtUFh2vbL9EKNo00BAkY8kZo"
                      token={this.onToken}
                      zipCode
                    />
<button class="btn black-background white b-s my-3" onClick={this.saveHistory}>Make a Purchase</button>
                </div>
            </div>
        );
    }
}

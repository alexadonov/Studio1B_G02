
import React, { Component } from 'react';
import axios from 'axios';


export default class CartItem extends Component {

deleteItem = () => {
  axios.delete('http://localhost:4000/cart/' + localStorage.getItem('deleteId'))
    .then((res) => {
      console.log("deleted");
    })
}


    render() {
        const {item} = this.props;
        return (

            <tr id={item.id}>
                <td>{item.name}</td>
                <td>${item.price}.00</td>
                <td onClick={function() {
                  axios.delete('http://localhost:4000/cart/' + item._id)
                    .then((res) => {
                      console.log("deleted");
                    })
                    window.location.reload();
                }}>X</td>
            </tr>
        );
    }
}

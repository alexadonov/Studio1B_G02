
import React, { Component } from 'react';


export default class CartItem extends Component {
    render() {
        const {item} = this.props;
        return (

            <tr id={item.id}>
                <td onClick={() => this.props.deleteItem(item.id)}>X</td>
                <td>{item.productImg}</td>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.price* item.quantity}</td>

            </tr>
        );
    }
}

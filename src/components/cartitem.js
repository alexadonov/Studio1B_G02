
import React, { Component } from 'react';


export default class CartItem extends Component {
    render() {
        const {item} = this.props;
        return (

            <tr id={item.id}>
                <td>{item.productName}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.price* item.quantity}</td>
                <td onClick={() => this.props.deleteItem(item.id)}>X</td>
            </tr>
        );
    }
}

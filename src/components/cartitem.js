
import React, { Component } from 'react';


export default class CartItem extends Component {
    render() {
        const {item} = this.props;

      //  const into = [1,2,3,4,5]

        //for(var io in into){
      //    console.log(into);
      //  }

        return (

            <tr id={item.id}>
              <td onClick={() => this.props.deleteItem(item.id)}>X</td>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.price* item.quantity}</td>

            </tr>



        );
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const User = props => (
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.password}</td>
        <td>
            <Link to={"/edit/"+props.user._id}>Edit</Link>
        </td>
    </tr>
)

export default class UserList extends Component {
  constructor(props) {
     super(props);
     this.state = {users: []};
 }

  componentDidMount() {

        axios.get('http://localhost:4000/users/')
            .then(response => {
              console.log(response.data);
                this.setState({ users: response.data });
            })
            .catch(function (error){
                console.log('What happened? ' + error);
            })



  }

    userList() {
        return this.state.users.map(function(currentUser, i){
            return <User user={currentUser} key={i} />;
        })
    }

    render() {
        return (
          <div>
                         <h3>User List</h3>
                         <table className="table table-striped" style={{ marginTop: 20 }} >
                             <thead>
                                 <tr>
                                     <th>Username</th>
                                     <th>Password</th>
                                </tr>
                             </thead>
                             <tbody>
                                 { this.userList() }
                             </tbody>
                         </table>
                     </div>
        )
    }
}

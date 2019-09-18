import React, { Component } from 'react';
import axios from 'axios';


export default class CreateUser extends Component {

  constructor(props) {
     super(props);

     this.onChangeUsername = this.onChangeUsername.bind(this);
     this.onChangePassword = this.onChangePassword.bind(this);
     this.onSubmit = this.onSubmit.bind(this);

     this.state = {
         username: String,
         password: String
     }
 }

 onChangeUsername(e) {
    this.setState({
        username: e.target.value
    });
}
onChangePassword(e) {
   this.setState({
       password: e.target.value
   });
}

onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`username: ${this.state.username}`);
        console.log(`Password : ${this.state.password}`);

        const newUser = {
          username: this.state.username,
          password: this.state.password
      };
        // axios.post('http://localhost:4000/users/add', newUser)
        //   .then(res => console.log(res.data))
        //   .catch(error => {console.log(error)});
        if(newUser.username === '' || newUser.password === '') {
          alert("GEt yo shit together");
        }

        axios.get('http://localhost:4000/users/')
            .then(response => {
              console.log(response.data);
              for(var i = 0; i < response.data.length; i++) {
                if(response.data[i].username === newUser.username && response.data[i].password === newUser.password  ) {
                    alert("YES");
                    return;
                  }
              }
              if(!(response.data.username === newUser.username) || !(response.data.password === newUser.password)) {
                alert("Wrong username and/or password");
                return;
              }
            })
            .catch(function (error){
                console.log('What happened? ' + error);
            })

          this.setState({
            username: '',
            password : ''
          })
    }
    render() {
        return (
          <div style={{marginTop: 10}}>
                          <h3>Create New User</h3>
                          <form onSubmit={this.onSubmit}>
                              <div className="form-group">
                                  <label>Username: </label>
                                  <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                              </div>
                              <div className="form-group">
                                  <label>Password: </label>
                                  <input type="text" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                              </div>

                              <div className="form-group">
                                  <input type="submit" value="Submit" className="btn btn-primary" />
                              </div>
                          </form>
                      </div>
        )
    }
}

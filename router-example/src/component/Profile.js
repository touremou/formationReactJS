import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    
    state={
        data:{}
    }

    componentDidMount() {
        const data= this.props.match.params.profileId;

        let payload = {
            token: "LRBjb7LnK3JPrv5Jm-9a_g",
            data: {
              name: "nameFirst",
              email: "internetEmail",
              phone: "phoneHome",
              _repeat: 10
            }
        };
        
        axios({
          method: "post",
          url: "https://app.fakejson.com/q",
          data: payload
        }).then(resp => {
            this.setState({
                data:resp.data[data]
            })
        });        
      
    }
    
    render() {

        const {name, email, phone}=this.state.data;
        return (
            <div className="container mt-3">
                <h1>Profile</h1>
                <hr/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <strong>Name: </strong> {name} </li>
                    <li className="list-group-item"> <strong>Email: </strong> {email} </li>
                    <li className="list-group-item"> <strong>phone: </strong> {phone} </li>
                </ul>
            </div>
        )
    }
}

export default Profile;

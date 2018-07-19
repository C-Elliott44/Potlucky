import React, { Component } from 'react';
import {Redirect, NavLink} from "react-router-dom";
import "./login.css";
import axios from "axios";

class Home extends Component{
constructor(props){
    super(props);
    this.state = {
        user: "",
        toNewEvent: false,
        potLuck: "will get there"
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.createPartyId = this.createPartyId.bind(this);
    this.GrabDatParty = this.GrabDatParty.bind(this);

}

    userqueryid = this.props.match.params.userid;

    componentDidMount(){
        axios.get(`/api/users/${this.userqueryid}`)
            .then(res=>this.setState(pvSt=>{
                console.log(res.data);
                console.log("this is the one for Steve" + this.props.match.params.userid);
                return {...pvSt,user: res.data};
            }))

            
    }
    GrabDatParty() {
        axios.get(`/api/parties/${this.userqueryid}`)
            .then(res=> {
                console.log("this is wok...")
            })
        };

    createPartyId() {
        console.log("Second Steve " +this);
        axios.post(`/api/parties`, {
            partyName: "",
            host: this.props.match.params.userid,
            address: "",
            date: "",
            time: "",
            limit: "",
            image: "",})
          .then(res => {
            console.log("the start");
            console.log("this is the one for Steve" + this.props.match.params.userid);
            console.log(res);
            console.log(res.data);
            console.log(this.state.user.name);
            console.log("the end");
          }).then( () => {this.GrabDatParty});
    }

    render() {
{/*        if (this.state.toNewEvent === true) {
            return <Redirect to=this.state.>
}*/}
        return (
            <div className="container">
                <NavLink to="./home"><img className="logo" src="https://image.ibb.co/kn5pgo/potlucky_logo.png" alt="potlucky_logo"/></NavLink>
                <div className="title">
                    <h2>Hi {this.state.user.name}!</h2>
                </div>
                <div>
                <NavLink to="./events"><button className="menu events">Upcoming Events</button></NavLink>
                <button className="menu events" onClick={this.createPartyId}>Create Event</button>
                </div>
            </div>
        );
    }
    
}

// // href={"#demo" + this.state.id}
// `/#/${req.user.id}/home`

// `/api/users/${this.props.match.params.userid}`

export default Home;
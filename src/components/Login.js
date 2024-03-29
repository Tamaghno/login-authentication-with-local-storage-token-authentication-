import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
export default class Login extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state ={
            username:'',
            password:'',
            loggedIn
        }

        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        const {username, password}=this.state
        //login part
        localStorage.setItem("token",null)
        if(username ==="A" && password ==="B"){
            localStorage.setItem("token","1234")
            this.setState({
                loggedIn: true
            })
        }
    }
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }
        return (
            <div>
            <h1>login form</h1>

            <form onSubmit={this.submitForm}>
               <input type="text" placeholder="username here" name="username" value={this.state.username} onChange={this.onChange}/>
               <br/>
               <input type="text" placeholder="password here" name="password" value={this.state.password} onChange={this.onChange}/>
               <br/>
               <input type="submit"/>
            </form>
                
            </div>
        );
    }
}

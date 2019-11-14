import React, { Component } from "react" 
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }
    handleForm = (e) => {
        e.preventDefault()
        const data = {email: this.state.email, 
            password: this.state.password}
        axios.post("http://localhost:8000/api/auth/login", data)
        .then(res => console.log(res))
        .catch(e => this.setState({errors: e.response.data }))
        this.props.history.push('/profile');
    }

    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]:value})
    }
    render() {
        return(
            <div className="flex">
                <div className="w-1/3" />
                <div className="mt-10 w-1/3 p-4 bg-white">
                    <form className="p-4 border border-gray-500" onSubmit={this.handleForm}>
                        <div className="p-4">
                            <h1 className="text-lg border-b border-gray-500">Ping Here</h1>
                        </div>
                        <div className="mt-4">
                            <label>Email</label>
                            <input type="email" name="email" onChange={this.handleInput}
                                placeholder="Lovely Email" className="mt-2 p-2 bg-gray-200 rounded border border-gray-400 w-full">
                            </input>
                        </div>
                        <div className="mt-4">
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.handleInput}
                                placeholder="Awesome Password" className="mt-2 p-2 bg-gray-200 rounded border border-gray-400 w-full">
                            </input>
                        </div>
                        <div className="mt-4">
                            <input type="submit" className="mt-1 p-2 border border-gray-400 rounded cursor-pointer bg-purple-600 text-white" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
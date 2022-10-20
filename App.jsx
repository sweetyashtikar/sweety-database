import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'


export class App extends Component {
    constructor() {
        super()
        this.state = {
            fullname: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changepassword = this.changepassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event) {
        this.setState({
            fullname: event.target.value
        })
    }
    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            username: event.target.value
        })
    }
    changepassword(event) {
        this.setState({
            username: event.target.value
        })

    }
    onSubmit(event) {
        event.preventDefault()

        const registered = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))

        this.setState({
            fullname: '',
            username: '',
            email: '',
            password: ''
        })
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                                placeholder='Full Name'
                                onChange={this.changeFullName}
                                value={this.state.fullname}
                                className='form-control form-group'
                            />
                            <input type='text'
                                placeholder='Username'
                                onChange={this.changeUsername}
                                value={this.state.Username}
                                className='form-control form-group'
                            />

                            <input type='text'
                                placeholder='E-mail'
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className='form-control form-group'
                            />

                            <input type='password'
                                placeholder='password'
                                onChange={this.changepassword}
                                value={this.state.password}
                                className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='submit' />

                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default App
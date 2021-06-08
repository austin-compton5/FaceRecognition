import React from 'react'


class Register extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      registeredName: '',
      registeredEmail: '',
      registeredPassword: ''
    }

  }
  onRegisteredEmailChange = (event) =>{
    this.setState({registeredEmail: event.target.value})
  }

  onRegisteredPasswordChange = (event) =>{
    this.setState({registeredPassword: event.target.value})
  }

  onRegisteredNameChange = (event) =>{
    this.setState({registeredName: event.target.value})
  }

  onRegisteredsubmit = () =>{
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {"Content-Type":'application/json'},
      body: JSON.stringify({
        email: this.state.registeredEmail,
        name: this.state.registeredName,
        password: this.state.registeredPassword,
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id){
        this.props.loadCurrentUserData(user)
        this.props.onRouteChange()
      }
    })
  }
    render(){
    const {onRouteChange} = this.props;
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-75 w-50-m w-25-1 mw6 shadow-5 center">
        <main class="pa4 black-80">
        <div class="measure">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Register</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="text" 
              name="name"  
              id="name"
              onChange = {this.onRegisteredNameChange}/>
            </div>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
               type="email" 
               name="email-address"  
               id="email-address"
               onChange = {this.onRegisteredEmailChange}/>
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password" 
               id="password"
               onChange = {this.onRegisteredPasswordChange}/>
            </div>
            <div class="">
            <input class="f1 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick = {this.onRegisteredsubmit} type="submit" value="Register"/>
          </div>
          </fieldset>
        </div>
      </main>
      </article>
    )
    }
}

export default Register 
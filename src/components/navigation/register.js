import React from 'react'


const Register = ({onRouteChange}) => {
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-75 w-50-m w-25-1 mw6 shadow-5 center">
        <main class="pa4 black-80">
        <form class="measure">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Register</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
            </div>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
            <div class="">
            <input class="f1 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick = {onRouteChange} type="submit" value="Register"/>
          </div>
          </fieldset>
        </form>
      </main>
      </article>
    )
}

export default Register 
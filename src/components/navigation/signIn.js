import React from 'react'
import 'tachyons'

const SignIn = ({onRouteChange, onRouteChange3}) =>{
  console.log('test')
  return(
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
      <main class="pa4 black-80">
      <form class="measure">
        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
          <legend class="f4 fw6 ph0 mh0">Sign In</legend>
          <div class="mt3">
            <label class="db fw6 lh-copy f6" for="email-address">Email</label>
            <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
          </div>
          <div class="mv3">
            <label class="db fw6 lh-copy f6" for="password">Password</label>
            <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
          </div>
          <div class="">
          <input class="f1 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick = {onRouteChange} type="submit" value="Sign in"/>
        </div>
        </fieldset>
        <div class="lh-copy mt3">
          <p onClick = {onRouteChange3} href="#0" class="f6 link dim black db">Register</p>
        </div>
      </form>
    </main>
    </article>
  )
}


export default SignIn
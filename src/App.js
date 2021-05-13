import Nav from './components/navigation/navigation'
import './App.css'
import Clarifai from 'clarifai'
import Logo from './components/navigation/Logo/logo'
import React from 'react'
import Register from './components/navigation/register'
import Imagelinkform from './components/navigation/Imagelinkform'
import Rank from './components/navigation/rank'
import SignIn from './components/navigation/signIn.js'
import Particles from 'react-particles-js';
import FaceRecognition from './components/navigation/facerecognition'


const app = new Clarifai.App({
  apiKey: 'f90578dca49641d1a128023b062ebc0f'
 });

class App extends React.Component {
  constructor(){
    super()
    this.state={
      input:'',
      imageUrl: '',
      box: {}, 
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFace(data){
    const clariFai = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('image')
    const width = Number(image.width)
    const height = Number(image.height)

    return{
      top: clariFai.top_row * 100,
      right: 100 - clariFai.right_col * 100,
      left: clariFai.left_col * 100,
      bottom: 100 - clariFai.bottom_row * 100
      
    }
    
    }

  onInputChange = (event)=>{
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () =>{
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.calcuateFaceLocation(this.calculateFace(response)))
    .catch(er => console.log(er))
  }

  calcuateFaceLocation(box){
    this.setState({box: box})
    console.log(this.state.box)

  }

  onRouteChange = () => {
    this.setState({route: 'home'})
    this.setState({isSignedIn : true})
  }

  onRouteChange2 = () => {
    this.setState({route : 'signin'})
    this.setState({isSignedIn : false})
  }

  onRouteChange3 = () => {
    this.setState({route : 'register'})
    this.setState({isSignedIn: true})
  }

  render(){
  return (
    <div className='App'>
    <Particles className='particles'
        params={{ 
          particles: { 
            number: { 
              value: 140, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          }, 
        }} 
      /> 
    <Nav onRouteChange2 = {this.onRouteChange2} isSignedIn = {this.state.isSignedIn}/>
    { this.state.route ==='signin' ?
    <SignIn onRouteChange = {this.onRouteChange} onRouteChange3={this.onRouteChange3}/>
    : (
      this.state.route ==='home' ?
    <div>
     <Logo/>
    <Rank/>
    <Imagelinkform 
    onInputChange={this.onInputChange} 
    onButtonSubmit = {this.onButtonSubmit}/>
    <FaceRecognition imageUrl={this.state.imageUrl}  box = {this.state.box} />
    </div>
    : <Register onRouteChange = {this.onRouteChange}/>
    )
    }
    </div>
  )
  }
}

export default App;

// https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg\
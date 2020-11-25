// インポート
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './component/Image/Image';
import Game from './component/Game/Game';

// コンポーネントの中身
class App extends Component {

  state = {
    text: 'World',
    voice: 'Animal'
  }

  handleClick(text){
    this.setState({text: text})
  }

  animalClick(voice){
    this.setState({voice: voice})
  }

 render() {

  const imageList = [
    {image: `${process.env.PUBLIC_URL}/image/animal_arupaka.png`,
     voice: "メェェェ"},
    {image: `${process.env.PUBLIC_URL}/image/animal_buta.png`,
     voice: "ブゥゥゥ"},
    {image: `${process.env.PUBLIC_URL}/image/animal_hamster.png`,
     voice: "チュウゥゥ"},
    {image: `${process.env.PUBLIC_URL}/image/animal_hiyoko.png`,
     voice: "ピョォォォ"},
    {image: `${process.env.PUBLIC_URL}/image/animal_inu.png`,
     voice: "バゥゥゥゥ"},
    {image: `${process.env.PUBLIC_URL}/image/animal_kuma.png`,
     voice: "ガルァァァ"},
    {image: `${process.env.PUBLIC_URL}/image/animal_mitsubachi.png`,
     voice: "ビィィィン"},
    {image: `${process.env.PUBLIC_URL}/image/animal_neko.png`,
     voice: "ニャァァン"},
    {image: `${process.env.PUBLIC_URL}/image/animal_panda.png`,
     voice: "こんにちわ"},
  ]

   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello {this.state.text}</h1>
        <span onClick={()=>{this.handleClick("World")}}>world</span>
        <span onClick={()=>{this.handleClick("React")}}>react</span>

      <p>
        {this.state.voice}
      </p>

      <div className="image-contents">
        {imageList.map((imageItem)=>{
          return(
            <Image
              image={imageItem.image}
              onClick={()=>{this.animalClick(imageItem.voice)}}
            />
          )
        })}
      </div>

      <div>
        <Game />
      </div>

      </header>
    </div>
   );
 }
}

// エクスポート
export default App;

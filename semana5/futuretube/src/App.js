import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div className="App-header">
      
          <h1>FutureTube</h1>
          <p>Que tal uns minutinhos vendo fofurices para relaxar?</p>
          <label for="busca">Procurando algo especial?</label>
          <input type="text" name="busca" id="App.busca"></input>
        </div>
      <div className= "App-videos">
      <table>

<tr>
<th><audio src="http://soter.ninja/videos/1.mp4" controls autoplay loop></audio></th>
<th><audio src="http://soter.ninja/videos/2.mp4" controls autoplay loop></audio></th>
<th><audio src="http://soter.ninja/videos/3.mp4" controls autoplay loop></audio></th>
<th><audio src="http://soter.ninja/videos/4.mp4" controls autoplay loop></audio></th>
<th><audio src="http://soter.ninja/videos/5.mp4" controls autoplay loop></audio></th>
<th><audio src="http://soter.ninja/videos/6.mp4" controls autoplay loop></audio></th>
<th><audio src="http://soter.ninja/videos/7.mp4" controls autoplay loop></audio></th>
<th><audio src="http://soter.ninja/videos/8.mp4" controls autoplay loop></audio></th>

<tr>
<td>Senta e relaxa...</td>
<td>Viaje gostoso na maionese...</td>
<td>Delícia, assim você me relaxa...</td>
<td>Vamos fugir pra esse lugar, baby...</td>
<td>Ahuuuuuuuuummmmmmmmmmm...</td>
<td>Dá uma olhadinha...</td>
<td>Melhor que banheira de hidromassagem...</td>
<td>Estou a dois passos...</td>

</tr>

</table>

      </div>
    <div className= "App-footer">
      <p>Quer saber mais? Entre em contato conosco!</p>
    </div>

    );
  }
}

export default App;


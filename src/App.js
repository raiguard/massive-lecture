import React from 'react';
import AvengerDisplay from './Components/AvengerDisplay';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      avengers: [
        {avenger_id: 1, name: 'Iron Man', superPower: 'Super Suit'},
        {avenger_id: 2, name: 'Thor', superPower: 'Thunder and stuff'}
      ],
      nameInput: '',
      superInput: '',
      addView: false
    }
  }

  toggleView = () => {
    this.setState({addView: !this.state.addView})
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return (
      <div className="App">
        <h1>Avengers Assemble</h1>
        <button onClick={this.toggleView}>Add Avenger</button>
        <div className='avenger-flex'>
          {this.state.avengers.map(avenger => (
            <AvengerDisplay key={avenger.avenger_id} avenger={avenger} />
          ))}
        </div>
        {this.state.addView
        ? (
          <div className='modal-backdrop'>
            <section className='add-modal'>
              <h1>Add Avenger</h1>
              <input 
                name='nameInput' 
                value={this.state.nameInput} 
                placeholder='Name'
                onChange={e => this.handleInput(e)}/>
              <input 
                name='superInput' 
                value={this.state.superInput} 
                placeholder='Super Power'
                onChange={e => this.handleInput(e)}/>
              <button>Add</button>
              <button onClick={this.toggleView}>Cancel</button>
            </section>
          </div>
        )
        : null}
      </div>
    )
  }
}

export default App;

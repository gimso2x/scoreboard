import React from 'react';
import './App.css';

import { Header } from './components/Header';
import { Player } from './components/Player';

class App extends React.Component {

  state = {
    players: [
      {id: 1, name: 'LDK', score: 10},
      {id: 2, name: 'PARK', score: 20},
      {id: 3, name: 'KIM', score: 30},
      {id: 4, name: 'HONG', score: 40}
    ]
  }

  incrementScore(id) {
    console.log(id);
    // this.setState({
    // 	score: this.state.score + 1
    // })
    this.setState(prevState => {
      const players = [...prevState.players];
      players.forEach((e,i) => {
        if(e.id === id) {
          e.score = e.score + 1
        }
      })
      return { players }
    })
  }

  decrementScore(id) {
    console.log(id);
    if(this.state.score) {
      this.setState({
        score: this.state.score - 1
      })
    }
  }

  removePlayer(id)  {
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      // Immutable 함수 = 새로운 배열을 리턴
      // 키와 변수가 같을 경우 한쪽으 생략 : shorthand property
      return { players };
      /*return {
				players : prevState.players.filter(player => player.id !== id)
			}*/
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={this.state.players.length}/>
        {
          this.state.players.map((player) => (
              <Player name={player.name} key={player.id} id={player.id}
                      score={player.score}
                      removePlayer={this.removePlayer.bind(this)}
                      incrementScore={this.incrementScore.bind(this)}
                      decrementScore={this.decrementScore.bind(this)}
              />
            )
          )
        }
      </div>
    )
  }
}

export default App;

import React from "react";

export class Counter extends React.Component {

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={() => this.props.decrementScore(this.props.id)}> - </button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment" onClick={() => this.props.incrementScore(this.props.id)}> + </button>
			</div>
		)
	}
}
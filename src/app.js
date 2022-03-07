import { h, Component } from "preact";

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			inputValue: null
		};
		this.result = document.getElementById('loopResult')
	}

	getLoopResult(element) {
		this.setState({
			inputValue: element.value
		})
		let start = 0
		this.arr = []

		while (start <= element.value) {
			let text = null

			if (start >= 1) {
				if (start % 2 === 0 && start % 5 === 0) {
					text = 'fizzbuzz'
				} else if (start % 2 === 0) {
					text = 'fizz'
				} else if (start % 5 === 0) {
					text = 'buzz'
				} else {
					text = start
				}
				this.arr.push(text)
			}
			start++
		}
	}

	render() {
		return (
			<div>
				<div>
					<div>Loop FizzBuzz</div>

					<input type="number" name="number" value={this.state.inputValue} />
					<button onClick={() => this.getLoopResult(document.querySelector('input'))}>Go !</button>
				</div>

				<code id="loopResult">
					<ul>
						{this.arr && this.arr.map(item => (<li>{item}</li>))}
					</ul>
				</code>
			</div>
		);
	}
}
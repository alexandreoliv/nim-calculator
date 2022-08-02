import { Component } from "react";
import "./Game.css";
require("bootstrap");

const getAnswer = () => {
	const winning = "WINNING SITUATION";
	const losing = "LOSING SITUATION";
	const answer = document.getElementById("answer");

	const row1 = Number(document.getElementById("input1").value);
	const row2 = Number(document.getElementById("input2").value);
	const row3 = Number(document.getElementById("input3").value);
	const row4 = Number(document.getElementById("input4").value);
	console.log(
		`Current table configuration: [${row1}, ${row2}, ${row3}, ${row4}]`
	);

	if (!isValid(row1, row2, row3, row4)) {
		console.log("Please enter a valid table configuration");
		console.log("==========================");
		return (answer.innerText = "Please enter a valid table configuration");
	}

	console.log("xor =", row1 ^ row2 ^ row3 ^ row4);
	const exception = isException(row1, row2, row3, row4);

	if (exception === "initial") {
		console.log("Exception: Sum of all cards = 16");
		console.log("You need to remove at least one card to start playing");
		console.log("==========================");
		return (answer.innerText =
			"You need to remove at least one card to start playing"); // (7, 5, 3, 1)
	}

	if (exception === "lost") {
		console.log("Exception: Sum of all cards = 0");
		console.log("You lost the game");
		console.log("==========================");
		return (answer.innerText = "You lost the game"); // (0, 0, 0, 0)
	}

	if (exception === "minimumPiles") {
		console.log("Exception: No piles bigger than 1");
		if (row1 + row2 + row3 + row4 === 1) {
			console.log("You won the game");
			console.log("==========================");
			return (answer.innerText = "You won the game"); // (1, 0, 0, 0)
		}
		if (row1 + row2 + row3 + row4 === 3) {
			console.log(winning);
			console.log("==========================");
			return (answer.innerText = winning); // (1, 1, 1, 0)
		}
		console.log(losing);
		console.log("==========================");
		return (answer.innerText = losing); // (1, 1, 0, 0), (1, 1, 1, 1)
	}

	console.log(row1 ^ row2 ^ row3 ^ row4 ? losing : winning);
	answer.innerText = row1 ^ row2 ^ row3 ^ row4 ? losing : winning;
	console.log("==========================");
};

const isValid = (row1, row2, row3, row4) => {
	if (
		Number.isInteger(row1) &&
		Number.isInteger(row2) &&
		Number.isInteger(row3) &&
		Number.isInteger(row4) &&
		row1 >= 0 &&
		row2 >= 0 &&
		row3 >= 0 &&
		row4 >= 0
	)
		return true;
	return false;
};

const isException = (row1, row2, row3, row4) => {
	if (row1 + row2 + row3 + row4 === 7 + 5 + 3 + 1) return "initial";
	if (row1 + row2 + row3 + row4 === 0) return "lost";
	if ([row1, row2, row3, row4].filter((x) => x === 0 || x === 1).length === 4)
		return "minimumPiles"; // No piles bigger than 1
	return false;
};

export default class Games extends Component {
	render() {
		return (
			<div>
				<h1>NIM GAME CALCULATOR</h1>
				<h4>
					Misère game version: the player to take the last object
					loses
				</h4>

				<div
					class="alert alert-info"
					role="alert"
					style={{
						fontSize: "0.6em",
						padding: "5px",
						marginTop: "30px",
					}}
				>
					Please describe the desired table configuration (as if
					you've just played your turn)
				</div>
				<div
					class="alert alert-warning"
					role="alert"
					style={{
						fontSize: "0.6em",
						padding: "5px",
						marginTop: "20px",
					}}
				>
					If you're on a losing condition, try to figure out how to
					change the table so that you're on a winning condition
				</div>

				<div className="rows-div">
					<div className="input-group input-group-lg">
						<span
							className="input-group-text"
							id="inputGroup-sizing-lg"
						>
							Row 1:
						</span>
						<input
							type="number"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-lg"
							defaultValue={7}
							id="input1"
							min="0"
							max="7"
						></input>
					</div>
					<div className="input-group input-group-lg">
						<span
							className="input-group-text"
							id="inputGroup-sizing-lg"
						>
							Row 2:
						</span>
						<input
							type="number"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-lg"
							defaultValue={5}
							id="input2"
							min="0"
							max="5"
						></input>
					</div>
					<div className="input-group input-group-lg">
						<span
							className="input-group-text"
							id="inputGroup-sizing-lg"
						>
							Row 3:
						</span>
						<input
							type="number"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-lg"
							defaultValue={3}
							id="input3"
							min="0"
							max="3"
						></input>
					</div>
					<div className="input-group input-group-lg">
						<span
							className="input-group-text"
							id="inputGroup-sizing-lg"
						>
							Row 4:
						</span>
						<input
							type="number"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-lg"
							defaultValue={1}
							id="input4"
							min="0"
							max="1"
						></input>
					</div>
				</div>
				<button
					type="button"
					className="btn btn-primary btn-lg"
					id="calculate-btn"
					style={{
						marginTop: "20px",
					}}
					onClick={getAnswer}
				>
					Calculate
				</button>
				<p id="answer"></p>
			</div>
		);
	}
}

import { Component } from "react";
import "./Game.css";
require("bootstrap");

const win = "WIN SITUATION";
const lose = "LOSE SITUATION";

// const getAnswerArray = (rows) => {
// 	console.log("Current table configuration:", rows);
// 	const row1 = rows[0];
// 	const row2 = rows[1];
// 	const row3 = rows[2];
// 	const row4 = rows[3];
// 	console.log("xor =", row1 ^ row2 ^ row3 ^ row4);
// 	let answer = isException(row1, row2, row3, row4);
// 	if (answer === false) {
// 		answer = row1 ^ row2 ^ row3 ^ row4;
// 		console.log("Situation:", answer ? lose : win);
// 	} else console.log("Situation:", answer);
// 	console.log("==========================");
// };

const getAnswer = () => {
	const row1 = Number(document.getElementById("input1").value);
	const row2 = Number(document.getElementById("input2").value);
	const row3 = Number(document.getElementById("input3").value);
	const row4 = Number(document.getElementById("input4").value);
	console.log(
		`Current table configuration: ${row1}, ${row2}, ${row3}, ${row4}`
	);
	console.log("xor = ", row1 ^ row2 ^ row3 ^ row4);
	let answer = isException(row1, row2, row3, row4);
	if (answer === false) {
		answer = row1 ^ row2 ^ row3 ^ row4;
		document.getElementById("answer").innerText = answer ? lose : win;
		console.log("Situation:", answer ? lose : win);
	} else {
		document.getElementById("answer").innerText = answer;
		console.log("Situation:", answer);
	}
	console.log("==========================");
};

const isException = (row1, row2, row3, row4) => {
	if (row1 + row2 + row3 + row4 === 7 + 5 + 3 + 1)
		return "You need to remove at least one card to start playing"; // (7, 5, 3, 1)
	// Case 0:
	if (row1 + row2 + row3 + row4 === 0) {
		console.log("Exception: Sum of all cards = 0");
		return "You lost the game"; // (0, 0, 0, 0)
	}
	// Case 1:
	if (row1 + row2 + row3 + row4 === 1) {
		console.log("Exception: Sum of all cards = 1");
		return "You won the game"; // (1, 0, 0, 0)
	}
	// Case 2:
	if (row1 + row2 + row3 + row4 === 2) {
		console.log("Exception: Sum of all cards = 2");
		return lose; // (2, 0, 0, 0) or (1, 1, 0, 0)
	}
	// Case 3:
	if (row1 + row2 + row3 + row4 === 3) {
		console.log("Exception: Sum of all cards = 3");
		if ([row1, row2, row3, row4].filter((x) => x === 1).length === 3)
			return win; // (1, 1, 1, 0)
		return lose; // (3, 0, 0, 0) or (2, 1, 0, 0)
	}
	// Case 4:
	if (row1 + row2 + row3 + row4 === 4) {
		console.log("Exception: Sum of all cards = 4");
		if ([row1, row2, row3, row4].filter((x) => x === 2).length === 2)
			return win; // (2, 2, 0, 0)
		return lose; // (4, 0, 0, 0) or (3, 1, 0, 0) or (2, 1, 1, 0) or (1, 1, 1, 1)
	}
	return false;
};

// All possible combinations, for testing purposes:
// getAnswerArray([0, 0, 0, 0]);
// getAnswerArray([0, 0, 0, 1]);
// getAnswerArray([0, 0, 0, 2]);
// getAnswerArray([0, 0, 0, 3]);
// getAnswerArray([0, 0, 0, 4]);
// getAnswerArray([0, 0, 0, 5]);
// getAnswerArray([0, 0, 0, 6]);
// getAnswerArray([0, 0, 0, 7]);
// getAnswerArray([0, 0, 1, 1]);
// getAnswerArray([0, 0, 1, 2]);
// getAnswerArray([0, 0, 1, 3]);
// getAnswerArray([0, 0, 1, 4]);
// getAnswerArray([0, 0, 1, 5]);
// getAnswerArray([0, 0, 1, 6]);
// getAnswerArray([0, 0, 1, 7]);
// getAnswerArray([0, 0, 2, 2]);
// getAnswerArray([0, 0, 2, 3]);
// getAnswerArray([0, 0, 2, 4]);
// getAnswerArray([0, 0, 2, 5]);
// getAnswerArray([0, 0, 2, 6]);
// getAnswerArray([0, 0, 2, 7]);
// getAnswerArray([0, 0, 3, 3]);
// getAnswerArray([0, 0, 3, 4]);
// getAnswerArray([0, 0, 3, 5]);
// getAnswerArray([0, 0, 3, 6]);
// getAnswerArray([0, 0, 3, 7]);
// getAnswerArray([0, 0, 4, 4]);
// getAnswerArray([0, 0, 4, 5]);
// getAnswerArray([0, 0, 4, 6]);
// getAnswerArray([0, 0, 4, 7]);
// getAnswerArray([0, 0, 5, 5]);
// getAnswerArray([0, 0, 5, 6]);
// getAnswerArray([0, 0, 5, 7]);
// getAnswerArray([0, 1, 1, 1]);
// getAnswerArray([0, 1, 1, 2]);
// getAnswerArray([0, 1, 1, 3]);
// getAnswerArray([0, 1, 1, 4]);
// getAnswerArray([0, 1, 1, 5]);
// getAnswerArray([0, 1, 1, 6]);
// getAnswerArray([0, 1, 1, 7]);
// getAnswerArray([0, 1, 2, 2]);
// getAnswerArray([0, 1, 2, 3]);
// getAnswerArray([0, 1, 2, 4]);
// getAnswerArray([0, 1, 2, 5]);
// getAnswerArray([0, 1, 2, 6]);
// getAnswerArray([0, 1, 2, 7]);
// getAnswerArray([0, 1, 3, 3]);
// getAnswerArray([0, 1, 3, 4]);
// getAnswerArray([0, 1, 3, 5]);
// getAnswerArray([0, 1, 3, 6]);
// getAnswerArray([0, 1, 3, 7]);
// getAnswerArray([0, 1, 4, 4]);
// getAnswerArray([0, 1, 4, 5]);
// getAnswerArray([0, 1, 4, 6]);
// getAnswerArray([0, 1, 4, 7]);
// getAnswerArray([0, 1, 5, 5]);
// getAnswerArray([0, 1, 5, 6]);
// getAnswerArray([0, 1, 5, 7]);
// getAnswerArray([0, 2, 2, 2]);
// getAnswerArray([0, 2, 2, 3]);
// getAnswerArray([0, 2, 2, 4]);
// getAnswerArray([0, 2, 2, 5]);
// getAnswerArray([0, 2, 2, 6]);
// getAnswerArray([0, 2, 2, 7]);
// getAnswerArray([0, 2, 3, 3]);
// getAnswerArray([0, 2, 3, 4]);
// getAnswerArray([0, 2, 3, 5]);
// getAnswerArray([0, 2, 3, 6]);
// getAnswerArray([0, 2, 3, 7]);
// getAnswerArray([0, 2, 4, 4]);
// getAnswerArray([0, 2, 4, 5]);
// getAnswerArray([0, 2, 4, 6]);
// getAnswerArray([0, 2, 4, 7]);
// getAnswerArray([0, 2, 5, 5]);
// getAnswerArray([0, 2, 5, 6]);
// getAnswerArray([0, 2, 5, 7]);
// getAnswerArray([0, 3, 3, 3]);
// getAnswerArray([0, 3, 3, 4]);
// getAnswerArray([0, 3, 3, 5]);
// getAnswerArray([0, 3, 3, 6]);
// getAnswerArray([0, 3, 3, 7]);
// getAnswerArray([0, 3, 4, 4]);
// getAnswerArray([0, 3, 4, 5]);
// getAnswerArray([0, 3, 4, 6]);
// getAnswerArray([0, 3, 4, 7]);
// getAnswerArray([0, 3, 5, 5]);
// getAnswerArray([0, 3, 5, 6]);
// getAnswerArray([0, 3, 5, 7]);
// getAnswerArray([1, 1, 1, 1]);
// getAnswerArray([1, 1, 1, 2]);
// getAnswerArray([1, 1, 1, 3]);
// getAnswerArray([1, 1, 1, 4]);
// getAnswerArray([1, 1, 1, 5]);
// getAnswerArray([1, 1, 1, 6]);
// getAnswerArray([1, 1, 1, 7]);
// getAnswerArray([1, 1, 2, 2]);
// getAnswerArray([1, 1, 2, 3]);
// getAnswerArray([1, 1, 2, 4]);
// getAnswerArray([1, 1, 2, 5]);
// getAnswerArray([1, 1, 2, 6]);
// getAnswerArray([1, 1, 2, 7]);
// getAnswerArray([1, 1, 3, 3]);
// getAnswerArray([1, 1, 3, 4]);
// getAnswerArray([1, 1, 3, 5]);
// getAnswerArray([1, 1, 3, 6]);
// getAnswerArray([1, 1, 3, 7]);
// getAnswerArray([1, 1, 4, 4]);
// getAnswerArray([1, 1, 4, 5]);
// getAnswerArray([1, 1, 4, 6]);
// getAnswerArray([1, 1, 4, 7]);
// getAnswerArray([1, 1, 5, 5]);
// getAnswerArray([1, 1, 5, 6]);
// getAnswerArray([1, 1, 5, 7]);
// getAnswerArray([1, 2, 2, 2]);
// getAnswerArray([1, 2, 2, 3]);
// getAnswerArray([1, 2, 2, 4]);
// getAnswerArray([1, 2, 2, 5]);
// getAnswerArray([1, 2, 2, 6]);
// getAnswerArray([1, 2, 2, 7]);
// getAnswerArray([1, 2, 3, 3]);
// getAnswerArray([1, 2, 3, 4]);
// getAnswerArray([1, 2, 3, 5]);
// getAnswerArray([1, 2, 3, 6]);
// getAnswerArray([1, 2, 3, 7]);
// getAnswerArray([1, 2, 4, 4]);
// getAnswerArray([1, 2, 4, 5]);
// getAnswerArray([1, 2, 4, 6]);
// getAnswerArray([1, 2, 4, 7]);
// getAnswerArray([1, 2, 5, 5]);
// getAnswerArray([1, 2, 5, 6]);
// getAnswerArray([1, 2, 5, 7]);
// getAnswerArray([1, 3, 3, 3]);
// getAnswerArray([1, 3, 3, 4]);
// getAnswerArray([1, 3, 3, 5]);
// getAnswerArray([1, 3, 3, 6]);
// getAnswerArray([1, 3, 3, 7]);
// getAnswerArray([1, 3, 4, 4]);
// getAnswerArray([1, 3, 4, 5]);
// getAnswerArray([1, 3, 4, 6]);
// getAnswerArray([1, 3, 4, 7]);
// getAnswerArray([1, 3, 5, 5]);
// getAnswerArray([1, 3, 5, 6]);
// getAnswerArray([1, 3, 5, 7]);

export default class Games extends Component {
	render() {
		return (
			<div>
				<h2
					style={{
						fontWeight: "bold",
						margin: "0 0 10px 10px",
						textAlign: "center",
					}}
				>
					WIN OR LOSE
				</h2>
				<h3>
					Please describe the table configuration AFTER you've
					finished playing
				</h3>
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
					onClick={getAnswer}
				>
					Calculate
				</button>
				<p id="answer"></p>
			</div>
		);
	}
}

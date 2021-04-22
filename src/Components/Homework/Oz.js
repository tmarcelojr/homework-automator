import React, { useState } from 'react';
import { answers } from './OzAnswers';

export default function Oz() {
	const [ answer, setAnswer ] = useState([]);

	const checkHomework = () => {
		let a = answer.split('\n');
		let counter = 0
		// let curr = a[counter].toLowerCase()
		
		// Setup
		
		// Line 1

		const result = (bool) => {
			bool === true ? console.log(`Accepted line: ${a[counter]}`) : console.log(`Check line: ${a[counter]}`)
		}

		const lineOne = () => {
			if (answers.invalid.includes(a[counter])) {
				console.log(`Ignored: ${a[counter]}`)
				counter++
				lineOne()
			} else if(answers.one.includes(a[counter])) {
				result(true)
				counter++
				lineTwo()
			} else {
				result(false)
				counter++
				lineTwo()
			}
		}

		const lineTwo = () => {
			if (answers.invalid.includes(a[counter])) {
				console.log(`Ignored: ${a[counter]}`)
				counter++
				lineTwo()
			} else if(answers.two.includes(a[counter])) {
				result(true)
				// lineTwo()
			} else {
				result(false)
				// lineTwo()
			}
		}
		
		lineOne()
		// if(answers.one.includes(curr)) {
		// 	// console.log(`Accepted line: ${a[counter]}`)
		// 	result(true)
		// 	counter++
		// 	if(answers.two.includes(a[counter])) {
		// 		// console.log(`Accepted line: ${a[counter]}`)
		// 		result(true)
		// 	} else {
		// 		result(false)
		// 	}
		// } else {
		// 	result(false)
		// }

	// 	while(counter < a.length) {
	// 		counter++
	// 		answers.one.includes(curr)
	// 		? console.log(`Accepted line: ${a[counter]}`)
	// 		: answers.two.includes(a[i + counter]))
	// 		? console.log(`Accepted line: ${a[counter]}`)
	// 		: console.log(`Check line: ${a[counter]}`)
	// 	}

	// }

		// for (let i = 0; i < a.length; i++) {
	// 		let counter = 0
	// 		let curr = a[i].toLowerCase()
	// 		// if(answers.one.includes(curr)) {
	// 		// 	counter++
	// 		// 	console.log(`Accepted line: ${a[i]}`)
	// 		// 	if(answers.two.includes(a[i + counter])) {
	// 		// 		console.log(`Accepted line: ${a[i + counter]}`)
	// 		// 	} else {
	// 		// 		console.log('Wrong')
	// 		// 	}
	// 		// } else {
	// 		// 	console.log('Wrong')
	// 		// }
			// answers.one.includes(curr) ? (console.log(`Accepted line: ${a[i]}`), console.log('hi'))
			// : answers.two.includes(a[i + counter])
			// ? console.log('accepted')
			// : console.log(`Check line: ${a[i]}`)

	// }

	// 		// let curr = a[i].toLowerCase();
  //     // // console.log('1', curr)
	// 		// if (curr === 'mkdir house' || curr === 'mkdir house/') {
	// 		// } else {
  //     //   console.log('wrong', a[i])
  //     // }
		// }
	};

	// for (let i = 0; i < a.length; i++) {
	//   let v = array.includes(a[i].toLowerCase())
	//   // console.log(v)
	//   if(v) {
	//     console.log(`Accepted line: ${a[i]}`)
	//   } else {
	//     console.log(`Check line: ${a[i]}`)
	//   }
	//   const checker = ele => array[i].toLowerCase().includes(ele)
	//   let answer1 = array.filter(checker)
	//   console.log('answer1', answer1)
	//  if(answer[0] === array[i]) {
	//    console.log(`Accepted line: ${a[i]}`)
	//  } else {
	//    console.log('what')
	//  }
	// }
	// }

	return (
		<div className="text">
			<textarea onChange={(e) => setAnswer(e.target.value)} />
			<button onClick={() => checkHomework()}>Check</button>
		</div>
	);
}

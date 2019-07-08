import React from 'react';
import './CardClicked.css';

//everytime a card is clicked run handle click, pass in components and properties
function handleClick(props) {
	props.reArrangeCards();
	props.clickedCharacter(props.id);
}

//when the card is clicked handle click seperatly
//props passed in from cards.json
function ClickCard(props) {
	return (
		<div className="card img-container" onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
	)
}




export default ClickCard
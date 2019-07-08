import React from 'react';
import './Modal.css';

function Modal() {
	return (
		// returns to Navbar.js
		<div className="instructionsModal">
			<div className="modal-content">
				<h4 className="center">Instructions</h4>
				<ol>
					<li>Click on an Image to start the game.</li>
					<li>When you click an image, all images get rearranged.</li>
					<li>If you pick the same image twice...You're a looser!</li>
					<li>Click all 12 images once...You're Win!</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer white-text center">
				<button className="waves-effect waves-light btn" onClick={() => {
					document.getElementsByClassName('instructionsModal')[0].classList.add('hide');
				}}>Let's Play!</button>
			</div>	
		</div>
	)
}
export default Modal;
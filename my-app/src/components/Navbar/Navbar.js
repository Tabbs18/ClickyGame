import React from 'react';

function Navbar(props) {
	return(
	<div className="navbar-fixed">
		<nav style={{background:"blue"}}>
			 {/* create a modal for Instructions.   */}
			<div className="nav-wrapper container">
				<button style={{cursor: 'pointer'}}className='left' onClick={() => 
				//on click function to hide the modal 
					{document.getElementsByClassName('instructionsModal')[0].classList.remove('hide');
				}}>Instructions</button>
				{/* refresh the page when clicked */}
				<a href="/" className='brand-logo center'>Clicky Game</a>
				<ul className='right'>
					<li style={{paddingRight: "20px"}}>Score: {props.score}</li>
					<li style={{paddingLeft: "20px"}}>Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
	</div>
	)
}
//export element navbar
export default Navbar;
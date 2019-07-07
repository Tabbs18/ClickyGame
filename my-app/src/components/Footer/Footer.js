import React from 'react';

function Footer(props) {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <h5 className="center white-text footer-update">{props.text}</h5>
        </div>
      </div>

        <div className="container center">
        </div>
   
    </footer>
  )
}

export default Footer;
import React from 'react';

export default class EditPhrases extends React.Component {

  render(){
    return(
      <div className="edit-list-container">
        <h3>Edit Phrases</h3>
        <div className="edit-container"> 
          {/* TODO: Dynamic Results with Buttons to Edit & Delete */}
        </div>
        <button className="viewDashboard">Return to Dashboard</button>
      </div>
    )
  }
}


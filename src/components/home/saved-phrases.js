import React from 'react';
import {Link} from 'react-router-dom'

export default class SavedPhrases extends React.Component {


  render(){
    return(
      <div className="saved-phrases">
        <label>Saved Phrases</label>
        <div className="saved-phrases-container">
          <Link to="/phrases/edit"><button className="edit-list">Edit List</button></Link>
          {/* TODO: Map Results */}
          <p>results</p>
        </div> 
      </div>
    )
  }
}
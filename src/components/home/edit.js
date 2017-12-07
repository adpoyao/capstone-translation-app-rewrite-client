import React from 'react'
import Input from '../input'

import {Link} from 'react-router-dom'
import {Field, reduxForm, focus} from 'redux-form'

export class Edit extends React.Component {

  render() {
    return (
      <form id="editDetail" className="editDetail">
        <fieldset>
            <legend>Phrase Editor</legend>
            <div className="container">

              <label className="selected-phrase"></label>
              <Field 
                component={Input}
                type="text"
                name="selected-phrase"
                id="selected-phrase"
                className="phrase"
                />
              
            </div>
            <button className="submit-edit">Save</button> 
            <Link to="/home">Return to Dashboard</Link>
        </fieldset>
      </form>
    )
  }
}

export default reduxForm({
  form: 'edit-phrase'
})(Edit);
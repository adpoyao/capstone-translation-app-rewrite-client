import React from 'react';
import Input from '../input';
import {Field, reduxForm, focus} from 'redux-form';

export class Dashboard extends React.Component {
  render(){
    return(
      <form id="dashboard" className="dashboard">

        <fieldset>
          <legend>Dashboard</legend>
          <div className="query">
            <label htmlFor="text-to-translate"></label>
            <Field 
              component={Input}
              type="text"
              name="text-to-translate"
              id="text-to-translate"
              placeholder="Enter Text to Translate" />

            <label htmlFor="language">Select language:</label>
            <Field
              component="select"
              name="language"
              className="select">
                <option value="0">French</option>
                <option value="1">German</option>
                <option value="2">Italian</option>
                <option value="3">Portuguese-Br</option>
                <option value="4">Spanish</option>
            </Field>

            {/* TODO: Dynamic output based on state */}
            <div className="output">Your text will translate here.</div>

            <button className="translate">Translate Now</button>
            <button className="saveToList">Save to List</button>

          </div>
        </fieldset>
      </form>
    )
  } 
} 

export default reduxForm({
  form: 'dashboard'
})(Dashboard);
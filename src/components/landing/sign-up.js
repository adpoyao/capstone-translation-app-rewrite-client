import React from 'react';
import Input from '../input'

import {Link} from 'react-router-dom'
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed, email} from '../../validators';

import {addUser} from '../../actions/users'

import './sign-up.css';

export class SignupForm extends React.Component {
    onSubmit(values) {
        const {firstName, lastName, username, password} = values;
        const user = {firstName, lastName, username, password};
        return this.props
            .dispatch(addUser(user))
            // .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        // let successMessage;
        // if (this.props.submitSucceeded) {
        //     successMessage = (
        //         <div className="signup sigup-success">
        //             Signed up successfully
        //         </div>
        //     );
        // }

        // let errorMessage;
        // if (this.props.error) {
        //     errorMessage = (
        //         <div className="signup signup-error">{this.props.error}</div>
        //     );
        // }
        return (
            <form
                className="signup-form"
                // onSubmit={this.props.handleSubmit(values => 
                //     this.onSubmit(values)
                // )}
                >

                {/* {successMessage}
                {errorMessage} */}
                
                <fieldset>
                    <legend>Sign Up</legend>
                    
                    <label htmlFor="firstName" ></label>
                    <Field component={Input} type="text" name="firstName" id="firstName" placeholder="First Name" />
                    
                    <label htmlFor="lastName"></label>
                    <Field component={Input} type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                      
                    <label htmlFor="username"></label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        validate={[required, nonEmpty, isTrimmed]}                        
                        />
                    
                    <label htmlFor="password"></label>              
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        validate={[required, length({min: 6, max: 72}), isTrimmed]}
                        />
                    
                    <label htmlFor="confirm-password"></label>
                    <Field
                        component={Input}
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="Confirm Password"
                        validate={[required, nonEmpty, matches('password')]}                        
                    />
                    
                    <button 
                        className="sign-up"
                        type="submit"
                        disabled={
                            this.props.pristine ||
                            this.props.submitting
                        }>Register</button>
                </fieldset>
                <p>Already have an account? <Link to={'/login'}><span className="log-in-here">Login</span></Link></p>
            </form>
        )
    }
}

export default reduxForm({
    form: 'signup',
    // onSubmitFail: (errors, dispatch) =>
    //     dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupForm);
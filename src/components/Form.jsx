import React from 'react';

function Form() {
    return (
        <div className="formpage">
            <form action="" className="form">
                <fieldset className="form__frame">
                    <legend className="form__title">Contact Us</legend>
                    <div className="form__container">
                        <div className="text">
                         <div className="name__input">
                            <div className="fname">
                                <label htmlFor="fname">First Name *</label>
                                <input type="text" id="fname" name="fname" />
                            </div>
                            <div className="lname">
                                <label htmlFor="lname">Last Name *</label>
                                <input type="text" id="lname" name="lname" />
                            </div>
                         </div>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email Address *</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="query">
                            <p className="query__title">Query Type *</p>
                            <div className="radio__choice">
                                <div className="choice__1">
                                    <input type="radio" id="general_enquiry" name="choice_button" value="general_enquiry" />
                                    <label htmlFor="general_enquiry">General Enquiry</label>
                                </div>
                                <div className="choice__2">
                                    <input type="radio" id="support_request" name="choice_button" value="support_request" />
                                    <label htmlFor="support_request">Support Request</label>
                                </div>
                            </div>
                        </div>
                        <div className="message">
                            <label htmlFor="message">Message *</label>
                            <textarea cols="30" rows="4" name="message" id="message"></textarea>
                        </div>
                        <div className="consent">
                            <input type="checkbox" name="consent" id="consent" />
                            <label htmlFor="consent">I consent to being contacted by the team *</label>
                        </div>
                        <div className="submit">
                            <input type="submit" value="Submit"></input>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}


export default Form;

//
// This field is required

// Last Name
// This field is required

//
// Please enter a valid email address
// This field is required

//
//
//
// Please select a query type

//
// This field is required

//
// To submit this form, please consent to being contacted

// Submit

// Message Sent!
// Thanks for completing the form. We'll be in touch soon!
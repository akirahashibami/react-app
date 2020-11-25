import React, { Component } from 'react';
import './Form.min.css';

import ContactForm from './component/Form/ContactForm';

class Form extends Component {

  render(){
    return(
      <div className="reactForm">
        <h3>お問い合わせ</h3>
        <ContactForm />
      </div>
    );
  }
}

export default Form;

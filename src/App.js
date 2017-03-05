import React, { Component } from 'react';

import {translate} from 'react-i18next'

import logo from './logo.svg';
import './App.css';

import i18n from './i18n';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const  {t}  = this.props;
    // create a lamda function to change language
    const toggle = lng => i18n.changeLanguage(lng);
    return (
      <div>
        <div>
          <button onClick={ () => toggle('en') }>EN</button>
          <button onClick={ () => toggle('zh') }>䌓</button>
          <button onClick={ () => toggle('cn') }>简</button> 
        </div>
        <h1>{t('keyWelcome')}</h1>
      </div>
    );
  }
}

// Reference: http://jason-wang.logdown.com/posts/771654
// export default translate()(App)
export default translate()(App);

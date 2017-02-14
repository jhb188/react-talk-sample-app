import React, { Component } from 'react';
import './App.css';
import BeforeRedux from './before-redux';

class App extends Component {

    render() {
        const hash = window.location.hash;

        switch (hash) {
            case '#before-redux':
                return <BeforeRedux />;

            default:
                return <div>Hello World</div>
        }
    }
}

export default App;

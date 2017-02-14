import React from 'react';
import './App.css';
import BeforeRedux from './before-redux';
import AfterRedux from './after-redux';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            hash: window.location.hash || '',
        };
    }

    wrapper = (Component) => (
        <div>
            <a
                href="#before-redux"
                onClick={ () => this.setState({ hash: '#before-redux' }) }
                style={{ marginRight: 10 }}>
                Before Redux
            </a>

            <a
                href="#after-redux"
                onClick={ () => this.setState({ hash: '#after-redux' }) }>
                After Redux
            </a>

            <Component />
        </div>
    );

    render() {
        switch (this.state.hash) {
            case '#before-redux':
                return this.wrapper(BeforeRedux);

            case '#after-redux':
                return this.wrapper(AfterRedux);

            default:
                return this.wrapper(BeforeRedux);
        }
    }
}

export default App;

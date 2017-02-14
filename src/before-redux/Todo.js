import React, { Component } from 'react';

class Todo extends Component {
    render = () => {
        return (
            <div>
                <input
                    type="checkbox"
                    checked={ this.props.checked }
                    onChange={ () => this.props.toggleChecked(this.props.index) } />

                <span>{ this.props.description }</span>
            </div>
        )
    }
}

export default Todo;

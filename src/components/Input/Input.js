import React, { Component } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import uuid from 'uuid';
import './Input.css'
class InputFrom extends Component {

    state = {
        description: ''
    }

    onChangeInputHandler = (event) => {
        this.setState({ description: event.target.value })
    }

    addToDoElement = () => {

        const newTodo = {
            id: uuid(),
            description: this.state.description
        }

        this.props.addToDo(newTodo)
        this.setState({ description: '' })
    }

    resetToDoElement = () => {
        this.setState({ description: '' })
    }

    render() {
        return (
            <div className="space-between-element">
                <FormGroup>
                    <Input type="textarea" className="textbox" value={this.state.description} onChange={(event) => this.onChangeInputHandler(event)}/>
                </FormGroup>
                <Button color="success" className="button space-between-button" onClick={this.addToDoElement.bind(this)}>Add</Button>
                <Button color="danger" className="button space-between-button" onClick={this.resetToDoElement.bind(this)}>Reset</Button>
            </div>
        );
    }
}

export default InputFrom;
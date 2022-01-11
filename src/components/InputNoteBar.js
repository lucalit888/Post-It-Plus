import React, { Component } from 'react';

class InputNoteBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
  }

  // Event that deals with note adding change
  onAddNote = (e) => {
    // Prevent default note adding
    e.preventDefault();
    console.log('Note added');
    this.props.composeNote(this.state.title);
    this.setState({
      title: '',
    });
  }

  // Event that deals with input change
  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      title: e.target.value,
    });
  }

  shorganize = () => {
    this.props.onShorganize();
  }

  // Creating the note using the new title entered
  render() {
    return (
      <div className="input-container">
        <form onSubmit={this.onAddNote} id="form">
          <input onChange={this.onInputChange} value={this.state.title} id="input-bar" />
          <input type="submit" id="submit-button" value="Add Note" className="submit-bar" />
          <button type="button" id="organize-button" value="Organize Note" onClick={this.shorganize}>Toggle Organize</button>
        </form>
      </div>
    );
  }
}

export default InputNoteBar;

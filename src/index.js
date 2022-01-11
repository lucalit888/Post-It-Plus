import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import * as firebasedb from './services/datastore';
import 'firebase/auth';
import './style.scss';
import InputNoteBar from './components/InputNoteBar';
import Note from './components/Note';

class App extends Component {
  // here's what our constructor would look like
  constructor(props) {
    super(props);

    console.log('hello');

    this.state = {
      // eslint-disable-next-line new-cap
      notes: Immutable.Map(),
      shorganize: false,
    };
  }

  componentDidMount() {
    firebasedb.fetchNotes((notes) => {
      // eslint-disable-next-line new-cap
      this.setState({ notes: Immutable.Map(notes) });
    });

    firebasedb.fetchShorganize((state) => {
      this.setState({ shorganize: state });
    });
  }

  updateNote = (id, fields) => {
    // this.setState((prevState) => ({
    //   notes: prevState.notes.update(id, (prevNote) => { return { ...prevNote, ...fields }; }),
    // }));
    firebasedb.updateNote(id, fields);
  }

  onDeleteNote = (id) => {
    // this.setState((prevState) => ({
    //   notes: prevState.notes.delete(id),
    // }));
    firebasedb.deleteNote(id);
  }

  composeNote = (notetitle) => {
    const note = {
      title: notetitle,
      text: 'I is a note',
      x: 226,
      y: 50,
      width: 300,
      height: 100,
      zIndex: 26,
    };
    // this.setState((prevState) => ({
    //   notes: prevState.notes.set(prevState.id, note),
    //   id: prevState.id + 1,
    // }));
    firebasedb.addNote(note);
    console.log(this.state.notes);
    // firebasedb.composeNote(note);
  }

  shorganize = () => {
    if (this.state.shorganize) {
      firebasedb.organizeNotes(false);
    } else {
      firebasedb.organizeNotes(true);
    }
  }

  showNotes = () => {
    if (this.state.shorganize) {
      console.log('showNotes organize');
      return (
        <div id="shorganized">
          {this.state.notes.entrySeq().map(([id, note]) => (
            <Note id={id} note={note} key={id} delete={this.onDeleteNote} updateNote={this.updateNote} shOrganized={this.state.shorganize} />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {this.state.notes.entrySeq().map(([id, note]) => (
            <Note id={id} note={note} key={id} delete={this.onDeleteNote} updateNote={this.updateNote} shOrganized={this.state.shorganize} />
          ))}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="top-contents">
        <h1 id="header">Real-Time Collaborative Post-It Note Application:</h1>
        <div className="descrip"><h3>Add Notes spawns in the same location</h3></div>
        <InputNoteBar composeNote={(title) => this.composeNote(title)} onShorganize={this.shorganize} />
        <div className="note-contents">{this.showNotes()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));

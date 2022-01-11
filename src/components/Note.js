// import Draggable from 'react-draggable';
import { Rnd } from 'react-rnd';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';
import {
  FaTrashAlt, FaArrowsAlt, FaPencilAlt, FaEdit,
} from 'react-icons/fa';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTitleEditing: false,
      isContentEditing: false,
    };
    // this.handleDrag = this.handleDrag.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleEditTitle = this.handleEditTitle(this);
    // this.handleEditContent = this.handleEditContent(this);
    // this.handleEditingToggle = this.handleEditingToggle(this);
  }

  handleDrag = (e, data) => {
    //   handleDrag(e, data) {
    const updatedPos = { x: data.x, y: data.y };
    this.props.updateNote(this.props.id, updatedPos);
  }

  handleResize = (e, direction, ref, delta, position) => {
    const updatedSize = { width: ref.offsetWidth, height: ref.offsetHeight };
    // console.log(updatedSize);
    this.props.updateNote(this.props.id, updatedSize);
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.props.delete(this.props.id);
  }

  handleEditTitle = (e) => {
    const updatedTitle = { title: e.target.value };
    this.props.updateNote(this.props.id, updatedTitle);
  }

  handleEditContent = (e) => {
    const updatedContent = { text: e.target.value };
    this.props.updateNote(this.props.id, updatedContent);
  }

  handleTitleEditingToggle = (e) => {
    e.preventDefault();
    const currentVal = this.state.isTitleEditing;
    this.setState({ isTitleEditing: !currentVal });
  }

  handleContentEditingToggle = (e) => {
    e.preventDefault();
    const currentVal = this.state.isContentEditing;
    this.setState({ isContentEditing: !currentVal });
  }

  renderTitleSection() {
    if (this.state.isTitleEditing) {
      return (
        <div className="title-text-area">
          <div className="editable-title">
            <TextareaAutosize className="textbox"
              onChange={this.handleEditTitle}
              minRows={1}
              maxRows={2}
              maxLength="30"
              defaultValue={this.props.note.title}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="title-text-area">
          <div>
            {this.props.note.title}
          </div>
        </div>
      );
    }
  }

  renderContentSection() {
    if (this.state.isContentEditing) {
    //   console.log('editing mode ON');
      return (
        <div className="content-text-area">
          <div className="editable-content">
            <TextareaAutosize className="textbox"
              onChange={this.handleEditContent}
            // style={{ boxSizing: 'border-box', minHeight: '200', minWidth: '200' }}
              minRows={3}
              maxRows={10}
              maxLength="400"
              defaultValue={this.props.note.text}
            />
          </div>
        </div>
      );
    } else {
    //   console.log('editing mode OFF');
      return <div className="content-text-area"><ReactMarkdown>{this.props.note.text || ''}</ReactMarkdown></div>;
    }
  }

  renderAll = () => {
    // console.log(`render all state: ${this.props.shOrganized}`);
    if (this.props.shOrganized) {
    //   console.log('rendering all onShorganize');
      return (
        <div className="note">
          <div className="note-top">
            <div className="note-title">
              <div className="mini-feature"><FaEdit onClick={this.handleTitleEditingToggle} /></div>
              {this.renderTitleSection()}
            </div>
            <div className="note-features">
              <div className="feature"><FaTrashAlt onClick={this.handleDelete} /></div>
              <div className="feature"><FaPencilAlt onClick={this.handleContentEditingToggle} /></div>
              <div className="feature"><FaArrowsAlt className="drag-icon" /></div>
            </div>
          </div>
          <div className="note-content">
            {this.renderContentSection()}
          </div>
        </div>
      );
    } else {
      return (
        <Rnd
          dragHandleClassName="drag-icon"
          default={{
            x: 15, y: 20, width: 300, height: 100,
          }}
          position={{
            x: this.props.note.x, y: this.props.note.y,
          }}
          size={{ width: this.props.note.width, height: this.props.note.height }}
          onDragStop={this.handleDrag}
          onResize={this.handleResize}
          maxWidth={700}
          maxHeight={500}
          minWidth={300}
          minHeight={200}
          onResizeStop={this.handleResize}
    // onStart={this.handleStartDrag}
          onDrag={this.handleDrag}
          enableResizing={{
            top: false, right: false, bottom: false, left: false, topRight: false, bottomRight: true, bottomLeft: false, topLeft: false,
          }}
        >
          <div className="note">
            <div className="note-top">
              <div className="note-title">
                <div className="mini-feature"><FaEdit onClick={this.handleTitleEditingToggle} /></div>
                {this.renderTitleSection()}
              </div>
              <div className="note-features">
                <div className="feature"><FaTrashAlt onClick={this.handleDelete} /></div>
                <div className="feature"><FaPencilAlt onClick={this.handleContentEditingToggle} /></div>
                <div className="feature"><FaArrowsAlt className="drag-icon" /></div>
              </div>
            </div>
            <div className="note-content">
              {this.renderContentSection()}
            </div>
          </div>
        </Rnd>
      );
    }
  }

  render() {
    // console.log(this.props.note.x);
    // console.log(this.props.note.y);
    return (
      <div>
        {this.renderAll()}
      </div>
    );
  }
}

export default Note;

import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({term: event.currentTarget.value});
  }
  handleSubmit() {
    let corrected = this.state.term.replace(/[^a-zA-Z ]/g, "");
    this.props.extractTerm(corrected);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.term}
          onChange={this.handleInput}
          placeholder="Enter a term">
        </input>
        <input
          type="button"
          value="Search"
          onClick={this.handleSubmit}>
        </input>
      </div>
    );
  }

}

export default InputBox;

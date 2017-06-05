import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from "./modal_style.js";

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true,
      url: this.props.url
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getPhotoUrl = this.getPhotoUrl.bind(this);
  }

  openModal() {
		this.setState({
			modalOpen: true,
		});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

  // <input type="button" onClick={this.openModal} value="Upload Photo"/>
  render() {
    return (
      <div >
				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={ModalStyle}>
          <img className="images"
            src={this.state.url}
            />
			  </Modal>
      </div>
    );
  }

}

export default (Photo);

import React from 'react';
import {Link} from 'react-router';
import Modal from 'react-modal';
import ModalStyle from "./modal_style.js";


class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      image: this.props.image
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
 }

  openModal(){
    this.setState({modalOpen:true});
  }

  closeModal(){
    this.setState({modalOpen:false});
  }

  render() {
    let image = this.state.image;
    return (
        <div>
          <h4 id="image-title">{image.title}</h4>
          <img className="images"
            src={image.display_sizes[0].uri}
            onClick={this.openModal}
            />
          <Modal
           isOpen={this.state.modalOpen}
           onRequestClose={this.closeModal}
           style={ModalStyle}
           contentLabel="Modal"
           >
           <img className="modal-image"
             src={image.display_sizes[0].uri}
             onClick={this.openModal.bind(this, image.display_sizes[0].uri)}
             />
          </Modal>
        </div>
    );
  }

}

export default Image;

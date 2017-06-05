import React from 'react';
import {Link} from 'react-router';
import Image from './image';


class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let images;
    if(this.props.images){
      images = this.props.images.map((image, idx) => (
        <li key={idx}>
          <Image image={image}/>
        </li>
      ));
    }
    return (
        <ul className="image-list">
          {images}
        </ul>
    );
  }

}

export default DisplayImage;

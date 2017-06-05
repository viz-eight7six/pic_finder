import React from 'react';

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let images;
    if(this.props.images){
      images = this.props.images.map((image, idx) => (
        <li key={idx}>
          <h4 id="image-title">{image.title}</h4>
          <img src={image.display_sizes[0].uri}/>
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

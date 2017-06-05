import React from 'react';
import InputBox from './input_box';
import DisplayImage from './display_image';
import $ from 'jquery';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      checked_term: "",
      images: []
    };
    this.extractTerm = this.extractTerm.bind(this);
    this.searchPic = this.searchPic.bind(this);
    this.findPictures = this.findPictures.bind(this);
  }

  extractTerm(word) {
    this.setState({term: word}, this.searchPic);
  }
  searchPic() {
    let pics = this.findPictures(this.state.term);
  }

  findPictures(word){
    let url_path = `https://api.gettyimages.com/v3/search/images/creative?phrase=${word}`;
    let apiKey = 'vy8ymnujta3wwajhwxmuh883';
    return $.ajax({
         type:'GET',
         url: url_path,
          beforeSend: function (request)
             {
                 request.setRequestHeader("Api-Key", apiKey);
             }})
     .done((response) => {
        let data = response.images;
        this.setState({images: data});
     })
     .fail(function(data){
         alert(JSON.stringify(data,2));
     });
  }

  spell_check(word){

  }

  edit1(word){

  }



  render() {
    let res;
    if(this.state.term){
      res = <h4>Displaying Results for {this.state.term}</h4>;
    }
    return (
      <div>
        <h1>Picture Finder</h1>
        <InputBox extractTerm={this.extractTerm}/>
        {res}
        <DisplayImage images={this.state.images}/>
      </div>
    );
  }

}

export default MainPage;

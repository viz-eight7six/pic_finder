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
    this.spellCheck = this.spellCheck.bind(this);
  }

  extractTerm(word) {
    this.setState({term: word}, this.spellCheck);
  }
  searchPic() {
    let word = this.state.checked_term;
    if(!word){
      word = this.state.term;
    }
    let pics = this.findPictures(word);
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
        this.setState({images: data}, console.log(data));
     })
     .fail(function(data){
         alert(JSON.stringify(data,2));
     });
  }

  spellCheck(){
    let term = this.state.term;
    return (
      $.ajax({
        method: 'GET',
        url: `dictionaries/1/search`,
        data: {word: term}
      })
      .done((response) => {
        this.setState({checked_term: response.word}, this.searchPic);
      })
    );
  }

  render() {
    let res;
    if(this.state.checked_term){
      res = <h3>Displaying Results for {this.state.checked_term}</h3>;
    }
    else if (this.state.term){
      res = <h3>Displaying Results for {this.state.term}</h3>;
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

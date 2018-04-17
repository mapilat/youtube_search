// { Component }(es6 syntax) is a single property we take from react and save it to 'Component' variable. Sama if we did: const Component = React.Component
import React, {Component} from 'react'; //'react' works with just components
// this is used only when we render component to the DOM api, so not all our components will need it, onyl the last one that got all the rest nested inside
import ReactDOM from 'react-dom';
import _ from 'lodash';
import apiSearch from './components/api_search.js';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyBiEqQiMZQdSOBF5NwxnA6-1a89uiZqTog';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      term: 'and so you code',
      videos: [],
      selectedVideo: null
    };
    
    this.handleVideoSearch('and so you code');

    // this.handleVideoSearch = this.handleVideoSearch.bind(this);
  }

  handleVideoSearch(term) {
    this.setState({term});
    apiSearch({key: API_KEY, term: this.state.term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    // const handleVideoSearch = _.debounce((searchTerm) => this.handleVideoSearch(searchTerm), 300);

    return (
      <div>
        <SearchBar onSearchTermChange={_.debounce((searchTerm) => this.handleVideoSearch(searchTerm), 300)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div> 
    )
  }
}

//rendering into DOM our most parent component which is App
ReactDOM.render(<App/>, document.querySelector('.container'));
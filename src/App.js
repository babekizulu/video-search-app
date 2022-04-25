//libraries
import { React, Component } from 'react';
//components
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
//api
import YouTube from './api/YouTube';

class App extends Component {
    state = { videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSubmit('liiightwave');
    }

    onTermSubmit = async term => {
        const res = await YouTube.get('/search', {
            params: {
                q: term
            }
        });
        const {items} = res.data;
        this.setState({ 
            videos : items,
            selectedVideo: items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video});
    }

    render() {
        const {videos, selectedVideo} = this.state;
        return (
            <div className='ui container'>
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={selectedVideo}/>
                        </div>
                        <div className='five wide column'>
                            <VideoList onVideoSelect={this.onVideoSelect} videos={videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Home } from './components/Home';
import { HomeCarousel } from './components/Carousel.jsx';
import { LoadingButton } from './components/LoadUsersAPI';
import { ImageCards } from './components/ImageCards';
import { ReactCalendar } from './components/Calendar';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Animate } from './components/Animate';
import { VideoPlayer } from './components/VideoPlayer';
import { MyDropzone } from './components/UploadFiles';


const mainPageStyle = {
    "float": "right",
    "marginRight": "2%",
    "clear": "none",
    "display": "inline-block",
    "position": "relative"

}
class App extends Component {
    render() {
        return (

            <div className="App"
                 style={mainPageStyle}>

                <div
                    style={{ "float":"left"}}
                >
                    <Sidebar />
                </div>

                <div style={{
                    "float":"right","width":"94%"
                }}>
                    <Header />
                    <Home />
                    <HomeCarousel />
                    <LoadingButton />
                    <ImageCards />
                    <Animate />
                    <ReactCalendar />
                    <VideoPlayer />
                    <MyDropzone />
                </div>
            </div>
        )
            ;
    }
}

export default App;

import React, { Component } from 'react';
import { Home } from './components/Home';
import { HomeCarousel } from './components/Carousel.jsx';
import { LoadingButton } from './components/LoadUsersAPI';
import { ImageCards } from './components/ImageCards';
import { ReactCalendar } from './components/Calendar';
import { Header } from './components/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Home />
                <HomeCarousel />
                <LoadingButton />
                <ImageCards />
                <ReactCalendar />
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Home } from './components/Home';
import { HomeCarousel } from './components/Carousel.jsx';
import { LoadingButton } from './components/LoadUsersAPI';
import { ImageCards } from './components/ImageCards';
import { ReactCalendar } from './components/Calendar';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Animate } from './components/Animate';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Home />
                <Sidebar />
                <HomeCarousel />
                <LoadingButton />
                <ImageCards />
                <Animate />
                <ReactCalendar />
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';

import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainContent />
                <Footer />
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./containers/Content";


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Content/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Search from './components/search';

class App extends Component {

    

    render() {
        return (
            <div>
                <Header />       
                <Search search="pass here search value"/>
            </div>
        );
    }
}

export default App;

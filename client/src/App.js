import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Search from './components/search';
import Products from './components/products';

class App extends Component {

    render() {
        return (
            <div>
                <Header />       
                <Search search="pass here search value"/>
                <Products />
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import NavbarTop from './components/navbar';
import Header from './components/header';
import Products from './components/products';

class App extends Component {

    render() {
        return (
            <div>
                <NavbarTop />       
                <Header title="teste"/>
                <Products />
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import NavbarTop from './components/navbar';
import Header from './components/header';
import ProductList from './components/product-list';

class App extends Component {

    render() {
        return (
            <div>
                <NavbarTop />       
                <Header title="teste"/>
                <ProductList />
            </div>
        );
    }
}

export default App;

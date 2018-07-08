import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PubSub from 'pubsub-js';

class Products extends Component {

    constructor() {
        super();
        this.state = { products: [], all: [] };
        this.getProducts = this.getProducts.bind(this);
        this.applySearch = this.applySearch.bind(this);
    }

    getProducts() {
        axios.get('http://localhost:3000/api/product')
            .then(response => response.data)
            .then(products => this.setState({ products: products, all: products }))
            .catch(console.log);
    }

    componentDidMount() {
        this.getProducts();
        PubSub.subscribe('search', this.applySearch);
    }

    applySearch(name, data) {
        if(!data.value) {
            this.setState({ products: this.state.all });
        } else {
            var _filtered = this.state.products.filter(product => product.name.toLowerCase().indexOf(data.value) > -1);
            this.setState({ products: _filtered });
        }
    }

    render() {
        return (
            <ListGroup>
                {
                    this.state.products.map(product => {
                        return <ListGroupItem key={product.id}> {product.name} </ListGroupItem>
                    })
                }
            </ListGroup>
        );
    }
}

export default Products;

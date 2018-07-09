import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PubSub from 'pubsub-js';

const baseUrl = 'http://localhost:3000/api/product';

class Products extends Component {
    constructor() {
        super();
        this.state = { products: [], total: 0, pageControl: { size: 1024, current: 1 } };
        this.getProducts = this.getProducts.bind(this);
        this.applySearch = this.applySearch.bind(this);
    }

    getProducts(searchText) {

        const url = searchText
            ? baseUrl.concat('/search/', searchText) 
            : baseUrl;

        axios
            .get(url, {
                params: {
                    page: this.state.pageControl.current,
                    size: this.state.pageControl.size
                }
            })
            .then(response => response.data)
            .then(responseData => this.setState({ products: responseData.products, total: responseData.length }))
            .catch(console.log); // TODO: fix error case
    }

    componentDidMount() {
        this.getProducts();
        PubSub.subscribe('search', this.applySearch);
    }

    applySearch(name, data) {
        this.getProducts(data.value);
    }

    render() {
        return (
            <ListGroup>
                {
                    this.state.products.map(product => {
                        return <ListGroupItem key={product.id}> # {product.id} - {product.name} </ListGroupItem>
                    })
                }
            </ListGroup>


        );
    }
}

export default Products;

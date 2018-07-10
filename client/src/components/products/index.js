import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import PubSub from 'pubsub-js';
import { BASE_URL, DEFAULT_PAGE_SHOW } from '../../defaults';

const productUrl = BASE_URL.concat('api/product');

class Products extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            products: [],
            total: 0,
            pageControl: {
                size: 24,
                current: 1
            }
        };
        this.getProducts = this.getProducts.bind(this);
        this.applySearch = this.applySearch.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
    }

    componentDidMount() {
        this.getProducts();
        PubSub.subscribe('search', this.applySearch);
    }

    getProducts() {

        const url = this.state.search
            ? productUrl.concat('/search/', this.state.search)
            : productUrl;

        axios
            .get(url, {
                params: {
                    page: this.state.pageControl.current,
                    size: this.state.pageControl.size
                },
            })
            .then(response => response.data)
            .then(responseData => {
                this.setState({ products: responseData.products, total: responseData.total })
            })
            .catch(console.log); // TODO: fix error case
    }

    applySearch(name, data) {
        this.setState({ search: data.value });
        this.getProducts();
    }

    onPageChange(page) {
        this.setState(state => {
            state.pageControl.current = page;
            return state;
        }, this.getProducts);
    }

    render() {
        return (
            <div>
                <ListGroup>
                    {
                        this.state.products.map(product => {
                            return <ListGroupItem key={product.id}> # {product.id} - {product.name} </ListGroupItem>
                        })
                    }
                </ListGroup>

                <Pagination activePage={this.state.pageControl.current}
                    itemsCountPerPage={this.state.pageControl.size}
                    totalItemsCount={this.state.total}
                    pageRangeDisplayed={DEFAULT_PAGE_SHOW}
                    onChange={this.onPageChange} />

            </div>
        );
    }
}

export default Products;

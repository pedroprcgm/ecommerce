import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import PubSub from 'pubsub-js';
import { BASE_URL, DEFAULT_PAGE_SHOW } from '../../defaults';
import ProductItem from '../product-item';

const productUrl = BASE_URL.concat('/api/product');

class ProductList extends Component {
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
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
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

    handleChangeSelect(event) {
        event.persist();
        this.setState(state => {
            state.pageControl.size = event.target.value;
            return state;
        }, this.getProducts);
    }

    render() {
        return (
            <div className="product-list-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <h4 className="product-count">{this.state.total} Produtos encontrados</h4>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <ListGroup>
                                {
                                    this.state.products.map(product => {
                                        return <ProductItem item={product} key={product.id}/>
                                    })
                                }
                            </ListGroup>

                        </div>

                        {
                            this.state.products.length
                                ? 
                                    <div>
                                        <select className="page-size-footer" onChange={this.handleChangeSelect}>
                                            <option selected value="24">24 produtos por página</option>
                                            <option value="36">36 produtos por página</option>
                                            <option value="48">48 produtos por página</option>
                                        </select>
                                        
                                        <Pagination activePage={this.state.pageControl.current}
                                            itemsCountPerPage={this.state.pageControl.size}
                                            totalItemsCount={this.state.total}
                                            pageRangeDisplayed={DEFAULT_PAGE_SHOW}
                                            onChange={this.onPageChange}
                                        />
                                    </div>   
                                : ''                
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;
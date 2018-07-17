import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class ProductItem extends Component {

    render() {
        return (
            <ListGroupItem className="product-item">
                <div className="pull-right">
                    <span className="old-price">R${this.props.item.price}</span>
                    &nbsp;por&nbsp;
                    <span className="promo-price">R${this.props.item.promoPrice}</span>
                </div>
            </ListGroupItem>
        )
    }
}

export default ProductItem;
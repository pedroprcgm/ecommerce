import React, { Component } from 'react';

class ProductItem extends Component {

    render() {
        return (
            <li className="product-item row">
                <div className="col-xs-6 col-sm-9">
                    <div className="image-wrapper">
                        <img src="./img/1.jpg" alt="Imagem do produto" />
                        <img src="./img/2.jpg" alt="Imagem do produto" />
                        <img src="./img/3.jpg" alt="Imagem do produto" />
                        <img src="./img/4.jpg" alt="Imagem do produto" />
                    </div>
                    <div className="product-info">
                        <p className="item-name">{this.props.item.name}</p>
                        <span className="item-description">{this.props.item.category.name} - {this.props.item.description}</span>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="price-wrapper">
                        <span className="old-price">R${this.props.item.price}</span>
                        &nbsp;por&nbsp;
                        <span className="promo-price">R${this.props.item.promoPrice}</span>
                    </div>
                </div>
            </li>
        )
    }
}

export default ProductItem;
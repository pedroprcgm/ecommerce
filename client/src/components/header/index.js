import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <div className="header-wrapper">
                <div className="container">
                    <div className="header">
                        <h1 className="title">{this.props.title}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

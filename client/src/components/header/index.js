import React, { Component } from 'react';
import PubSub from 'pubsub-js';
class Header extends Component {

    constructor() {
        super();
        this.defaultTitle = 'Todos os produtos';
        this.state = { title: this.defaultTitle };
        this.setTitle = this.setTitle.bind(this);
    }

    componentDidMount() {
        PubSub.subscribe('search', this.setTitle);
    }

    setTitle(name, data) {
        this.setState({ title: data.value || this.defaultTitle });
    }

    render() {
        return (
            <div className="header-wrapper">
                <div className="container">
                    <div className="header">
                        <h1 className="title">{this.state.title}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

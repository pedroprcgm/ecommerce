import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class NavbarTop extends Component {
    constructor() {
        super();
        this.state = { search: '' };
        this.handleChange = this.handleChange.bind(this);
        this.doSearch = this.doSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.pubSearch = this.pubSearch.bind(this);
    }

    // Make the search by input value
    doSearch() {
        this.setState({ search: this.state.search }, this.pubSearch);        
    }

    // Clear input value 
    clearSearch() {
        this.setState({ search: '' }, this.pubSearch);        
    }

    // Publish search done
    pubSearch() {
        PubSub.publish('search', { value: this.state.search});
    }

    // Handle input changes
    handleChange(event) {
        this.setState({ search: event.target.value });
    }

    render() {
        return ( 
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-top" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href={undefined}>natramm</a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-top">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="input-search-wrapper">
                                <i className="glyphicon glyphicon-search search-icon"></i>
                                <input type="text" className="search-input" placeholder="Pesquisar" value={this.state.search} onChange={this.handleChange} onKeyDown={e => e.keyCode === 13 ? this.doSearch() : ''} />
                                <i onClick={this.clearSearch} className="glyphicon glyphicon-remove-sign clear-icon"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavbarTop;

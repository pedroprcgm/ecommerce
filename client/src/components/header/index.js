import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import PubSub from 'pubsub-js';

class Header extends Component {
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
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#/">natramm</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem href="#">
                        <input type="text" placeholder="Pesquisar" value={this.state.search} onChange={this.handleChange} onKeyDown={e => e.keyCode === 13 ? this.doSearch() : ''} />
                        <input type="button" value="Pesquisar" onClick={this.doSearch} />
                        <input type="reset" value="Limpar" onClick={this.clearSearch} />
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;

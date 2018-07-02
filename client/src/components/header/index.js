import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
    constructor() {
        super();
        this.search = '';
        this.doSearch.bind(this);
    }

    doSearch() {
        console.log(this.search);
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">natramm</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem href="#">
                        <input type="text" placeholder="Pesquisar" ref={input => this.search = input} />
                        <input type="submit" value="Pesquisar!" onClick={this.doSearch}/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;

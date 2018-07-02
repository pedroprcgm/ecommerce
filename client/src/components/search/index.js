import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

class Search extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        const search = this.props.search 
            ? this.props.search 
            : 'Valor da pesquisa'
    }
    render() {
        return (
            <PageHeader>    
                {this.search}
            </PageHeader>
        );
    }
}

export default Search;

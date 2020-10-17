import React, { Component } from 'react';
import Page from './page';
import myErno from '../../helper/erno';

class ErnoCube extends Component {
    constructor(props) {
        super(props);

        this.state = {}
        this.state.id = Date.now();
    }

    render() {
        return (
            <Page
                id={this.state.id}
            />
        );
    }

    componentWillUnmount () {
        myErno.unrender(this.props.renderKey);
    }

    componentDidMount() {
        const dom = document.getElementById(this.state.id);
        
        myErno.render(dom, {
            drag: this.props.drag,
            key: this.props.renderKey || 'DEFAULT_KEY'
        });
    }
}

export default ErnoCube;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';

class Puzzles extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.goTo = this.goTo.bind(this);
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <Page
                puzzles={this.props.puzzles}
                scheme={this.props.scheme}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    puzzles: state.puzzles,
    scheme: state.skin.scheme
});

export default withRouter(
    connect(mapStateToProps)(Puzzles)
);

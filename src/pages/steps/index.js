import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';

class Methods extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.goTo = this.goTo.bind(this);
    }

    componentWillMount() {
        const {
            match: { params: { puzzleId, methodId } },
        } = this.props;

        const puzzle = this.props.puzzles.find(e => e.key === puzzleId);
        const method = puzzle.methods.find(e => e.key === methodId);

        this.setState({ puzzle: puzzle, method: method });
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <Page
                method={this.state.method}
                puzzle={this.state.puzzle}
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
    connect(mapStateToProps)(Methods)
);

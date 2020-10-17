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
            match: { params: { puzzleId, methodId, stepId } },
        } = this.props;

        const puzzle = this.props.puzzles.find(e => e.key === puzzleId);
        const method = puzzle && puzzle.methods.find(e => e.key === methodId);
        const step = method && method.steps.find(e => e.key === stepId);

        this.setState({ method: method, puzzle: puzzle, step: step });
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <Page
                step={this.state.step}
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

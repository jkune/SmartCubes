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
            match: { params: { puzzleId } },
        } = this.props;

        const puzzle = this.props.puzzles.find(e => e.key === puzzleId)

        this.setState({ puzzle: puzzle });
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <Page
                puzzle={this.state.puzzle}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    puzzles: state.puzzles,
});

export default withRouter(
    connect(mapStateToProps)(Methods)
);

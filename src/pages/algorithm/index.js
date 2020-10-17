import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import myErno from '../../helper/erno';

class Methods extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.goTo = this.goTo.bind(this);
    }

    async componentWillMount() {
        const {
            match: { params: { puzzleId, methodId, stepId, algorithmId } },
        } = this.props;

        const puzzle = this.props.puzzles.find(e => e.key === puzzleId);
        const method = puzzle && puzzle.methods.find(e => e.key === methodId);
        const step = method && method.steps.find(e => e.key === stepId);
        const algorithm = step && step.list.find(e => e.id === Number(algorithmId));
        const renderKey = 'RENDER_1';

        this.setState({ method: method, puzzle: puzzle, step: step, algorithm: algorithm, renderKey: renderKey });

        await myErno.cube3d.isInitiated;

        algorithm && myErno.trainingAlg({
            size: puzzle.size,
            case: algorithm.algs[0].notation, 
            methodId: methodId, 
            stepId: stepId, 
            baseFace: 5,
            callback: this.onSolution
        });
    }

    onSolution(status) {
        console.log('DONE');
        console.log(status);
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
                algorithm={this.state.algorithm}
                drag={true}
                renderKey={this.state.renderKey}
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

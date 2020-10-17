import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import myErno from '../../helper/erno';

class Free extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.goTo = this.goTo.bind(this);
    }

    async componentWillMount() {
        const renderKey = 'RENDER_2';

        this.setState({ renderKey: renderKey });

        await myErno.cube3d.isInitiated;
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <Page
                drag={true}
                renderKey={this.state.renderKey}
            />
        );
    }
}

const mapStateToProps = state => ({
    puzzles: state.puzzles,
    scheme: state.skin.scheme
});

export default withRouter(
    connect(mapStateToProps)(Free)
);

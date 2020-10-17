import React from 'react';
import CardItem from '../../components/cardItem';
import './style.css';

function Page(props) {
    const {
        scheme,
        puzzle,
        method,
        step,
        goTo,
    } = props;

    const algorithms = step.list.map((alg) => {
        const url = '/puzzles/' + puzzle.key + '/' + method.key + '/' + step.key + '/' + alg.id;
        const images = step.getVisuals(alg, scheme);

        return (
            <CardItem key={alg.id} 
                title={alg.algs[0].label}
                url={url}
                images={images}
                goTo={goTo}
            ></CardItem>
        );
    })

    return (
        <div>{algorithms}</div>
    );
}

export default Page;

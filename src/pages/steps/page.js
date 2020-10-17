import React from 'react';
import CardItem from '../../components/cardItem';
import './style.css';

function Page(props) {
    const {
        scheme,
        puzzle,
        method,
        goTo,
    } = props;

    const steps = method.steps.map((step) => {
        const firstAlg = step.list[0];
        const url = '/puzzles/' + puzzle.key + '/' + method.key + '/' + step.key;
        const images = step.getVisuals(firstAlg, scheme);

        return (
            <CardItem key={step.key} 
                title={step.name}
                url={url}
                images={images}
                goTo={goTo}
            ></CardItem>
        );
    })

    return (
        <div>{steps}</div>
    );
}

export default Page;

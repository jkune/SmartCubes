import React from 'react';
import CardItem from '../../components/cardItem';
import './style.css';

function Page(props) {
    const {
        puzzle,
        goTo,
    } = props;

    const methods = puzzle.methods.map((method) => {
        const url = '/puzzles/' + puzzle.key + '/' + method.key;
        const images = [];

        return (
            <CardItem key={method.key} 
                images={images}
                title={method.name}
                url={url}
                goTo={goTo}
            ></CardItem>
        );
    })

    return (
        <div>{methods}</div>
    );
}

export default Page;

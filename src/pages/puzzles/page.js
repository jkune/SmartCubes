import React from 'react';
import CardItem from '../../components/cardItem';
import './style.css';

function Page(props) {
    const {
        puzzles,
        scheme,
        goTo,
    } = props;

    const cubes = puzzles.map((item) => {
        const url = '/puzzles/' + item.key;
        const images = [item.getVisual(scheme)];

        return (
            <CardItem key={item.key} 
                title={item.name}
                url={url}
                images={images}
                goTo={goTo}
            ></CardItem>
        );
    })

    return (
        <div>{cubes}</div>
    );
}

export default Page;

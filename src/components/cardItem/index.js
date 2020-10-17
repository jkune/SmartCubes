import React from 'react';
import Page from './page';

function CardItem(props) {
    const {
        title,
        images,
        url,
        goTo,
    } = props;

    return (
        <Page
            title={title}
            images={images}
            url={url}
            goTo={goTo}
        />
    );
}

export default CardItem;

import React from 'react';
import './style.css';

function Page(props) {
    const {
        title,
        images,
        url,
        goTo,
        content,
    } = props;

    const imagesDOM = images.map((image, key) => {
        return (
            <img key={key}
                alt={title}
                className="item-image"
                src={image}
            />
        )
    })

    return (
        <div className="details-component" onClick={() => url && goTo(url)}>
            <div className="title">
                {title}
            </div>
            {imagesDOM}
            {   content && content.length > 0 &&
                <div className="content">
                    {content}
                </div>
            }
        </div>               
    );
}

export default Page;

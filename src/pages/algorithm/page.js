import React from 'react';
import CardItem from '../../components/cardItem';
import ErnoCube from '../../components/ernoCube';
import myErno from '../../helper/erno';
import './style.css';

function Page(props) {
    const {
        scheme,
        puzzle,
        method,
        step,
        algorithm,
        goTo,
        drag,
        renderKey
    } = props;
    
    const images = step.getVisuals(algorithm, scheme);

    return (
        <>
            <CardItem
                title={algorithm.algs[0].label}
                images={images}
                goTo={goTo}
            ></CardItem>
            <ErnoCube
                drag={drag}
                renderKey={renderKey}
            ></ErnoCube>
            <input id="title" type="text" defaultValue={algorithm.algs[0].notation} ></input>
            <button onClick={async () => {
                const twists = document.getElementById('title').value;
                debugger;
                await myErno.cube3d.isInitiated;
                myErno.doAlgorithm(twists, {duration: 500});
            }}>TWIST</button>
        </>
    );

}

export default Page;

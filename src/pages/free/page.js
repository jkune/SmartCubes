import React from 'react';
import ErnoCube from '../../components/ernoCube';
import myErno from '../../helper/erno';
import './style.css';

function Page(props) {
    const {
        drag,
        renderKey
    } = props;


    return (
        <>
            <ErnoCube
                drag={drag}
                renderKey={renderKey}
            ></ErnoCube>

            <input id="title2" type="text"></input>
            
            <button onClick={async () => {
                const twists = document.getElementById('title2').value;

                myErno.doAlgorithm(twists, {duration: 500});
            }}>TWIST</button>

            <button onClick={async () => {
                myErno.trainingFree({
                    methodId: 'cfop', 
                    callback: (response) => {
                    console.log(response);
                }});
            }}>START</button>

            <button onClick={async () => {
                myErno.reset();
            }}>RESET</button>
        </>
    );

}

export default Page;

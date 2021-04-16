import React, { useState, useEffect } from 'react';

import '../lab_3/lab3.css'

const Lab4 = () => {
    const [number, setNumber] = useState('');

    useEffect(() => {
        console.log(number)
    }, [number])

    return(
        <div className={'lab3_block'}>
            <span>Number: </span> {`${number}`}
            <br />
            <span>Length of number: </span> {`${number.length}`}
            <input type='number'
                   value={number}
                   placeholder={'Enter number: '}
                   onChange={event => setNumber(event.target.value)}
            />
        </div>
    )
}

export default Lab4

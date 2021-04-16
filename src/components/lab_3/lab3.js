import React, { useState, useEffect } from 'react';

import './lab3.css'

const Lab3 = () => {
    const [symbol, setSymbol] = useState('')

    useEffect(() => {
        console.log(symbol)
    },[symbol])

    return(
        <div className={'lab3_block'}>
            <span> Entered:</span> {`${symbol}`}
            <br />
            <span>Count: </span> {`${symbol.length}`}
            <input type='text'
                   value={symbol}
                   placeholder={'Enter symbol: '}
                   onChange={ event => setSymbol(event.target.value) }
            />
        </div>
    )
}

export default Lab3

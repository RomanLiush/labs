import React, { useState } from 'react';

import styles from './task2.module.css';

const Task_2 = () => {

    const [color, setColor] = useState('');
    const colorID = document.getElementById('color');
    let str = '';
    const theColor = colorID !== null ? str = colorID.value : str === '';

    if (colorID) {
        colorID.addEventListener("input",  () => {
            setColor(colorID.value)
            document.getElementById('circle').innerHTML = colorID.value;
        }, false);
    }

    return (
        <div className={styles.task_2}>
            <div className={styles.task_2_circle}
                 id={'circle'}
                 style={{backgroundColor: `${color}`}}
            >
            </div>

            <input placeholder={'Change color...'}
                   type={'color'}
                   id={'color'}
                   className={'color-input'}
                   onClick={event => setColor(event.target.value)}
            />
        </div>
    )
}

export default Task_2;

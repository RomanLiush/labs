import React, {useState} from 'react';

import styles from './task1.module.css';

const Task_1 = () => {

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [result, setResultPerimemet] = useState(0);
    const [area, setArea] = useState(0);

    return (
        <>
            <div className={styles.main_block_task1}>

                <input placeholder={'Enter height: '}
                       className={styles.input_height}
                       type={'number'}
                       onChange={(event => setHeight(event.target.value))}
                />
                <input placeholder={'Enter width: '}
                       className={styles.input_width}
                       type={'number'}
                       onChange={(event => setWidth(event.target.value))}
                />

                <div className={styles.task1_btn}
                     onClick={ () => {
                         setResultPerimemet((width * 2) + (height * 2));
                         setArea(width * height)
                     }}
                >Count!
                </div>

                <div className={styles.task1_result}>Result of perimeter: {`${result} sm`}</div>
                <div className={styles.task1_result}>Result of area: {`${area} sm`}<sup>2</sup></div>
            </div>
        </>
    )
}

export default Task_1;

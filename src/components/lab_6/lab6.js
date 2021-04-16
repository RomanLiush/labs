import React, { useState, useEffect } from 'react'

import styles from './lab6.module.css'
import SupportComponent from "./modal";

const Lab6 = () => {

    const [value, setValue] = useState(1)
    const [visible, setVisible] = useState(true)
    const [color, setColor] = useState('black')
    let style_for_circle = {
        transform: 'translate(60%, 0%)',
        width: '250px',
        height: '250px',
        border: `${value}px solid ${color}`,
        borderRadius: '50%',
        margin: '50px 15px 50px',
        background: '#ffcc00'

    }

    let style_for_square = {
        transform: 'translate(60%, 0%)',
        width: '250px',
        height: '250px',
        border: `${value}px solid ${color}`,
        background: '#ffcc00'
    }

    const ChangeColor = (e) => {
        setColor(e)
    }

    useEffect(() => {
        setTimeout(() => {
            (value <= 100) ? setValue(() => (value + 10)) : setValue(10) }, 500)
    }, [value])

    return (
        <div className={styles.general}>
            <div className={styles.main_block}>
                <div className={styles.main_block__first}>
                    <div className={styles.main_block__disp_first}>

                        <div style={style_for_circle}></div>
                        <div style={style_for_square}></div>

                    </div>
                    <div className={styles.main_block__disp_first}></div>
                </div>
                <div className={styles.main_block__second}>
                    <button className={styles.main_block__exit}>Exit</button>
                    <button
                        onClick={() => setVisible(prevState => !prevState)}
                    >Draw graphics...
                    </button>
                </div>
                {/*<input type="range"*/}
                {/*       min="1"*/}
                {/*       max="100"*/}
                {/*       value={value}*/}
                {/*       onChange={(e) => setValue(e.target.value)}*/}
                {/*/>*/}

            </div>


            {visible && <SupportComponent ChangeColor={ChangeColor}
                                          setVisible={setVisible}

            />}
        </div>
    )
}

export default Lab6

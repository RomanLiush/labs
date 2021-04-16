import React from 'react';

import styles from './lab2.css';

const Lab2 = () => {

    window.onload = function () {
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');

        let painting = document.getElementById('paint');
        let paint_style = getComputedStyle(painting);
        canvas.width = 1300;
        canvas.height = 700;

        let mouse = {x: 0, y: 0};

        canvas.addEventListener('mousemove', function (e) {
            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        }, false);

        ctx.lineWidth = 3;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#00CC99';

        let onPaint = function () {
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        };

        canvas.addEventListener('mousedown', function (e) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);

            canvas.addEventListener('mousemove', onPaint, false);
        }, false);

        canvas.addEventListener('mouseup', function () {
            canvas.removeEventListener('mousemove', onPaint, false);
        }, false);


    }
    return (
        <>
            <div id="paint">
                <canvas id="myCanvas"></canvas>
            </div>
        </>
    )
}

export default Lab2




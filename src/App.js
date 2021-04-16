import React, {useState} from 'react'

import './components/lab_1/style.css'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/header/header";
import Lab1 from "./components/lab_1/lab1";
import Lab2 from "./components/lab_2/lab2";
import Lab3 from "./components/lab_3/lab3";
import Lab4 from "./components/lab_4/lab4";
import Lab5 from "./components/lab_5/lab5";
import Lab6 from "./components/lab_6/lab6";
import Lab7 from "./components/lab_7/lab7";
import Lab8 from "./components/lab_8/lab8";
import Lab9 from "./components/lab_9/lab9";
import Task_1 from "./components/task_1/Task_1";
import Task_2 from "./components/task_2/Task_2";
import Task_3 from "./components/task_3/Task_3";

const App = () => {

    return (
        <div>

            <BrowserRouter>
                <Header/>
                <Route path='/' exact render={() => {}} />
                <Route path='/laba1' render={() => <Lab1/>} />
                <Route path='/laba2' render={() => <Lab2/>} />
                <Route path='/laba3' render={() => <Lab3/>} />
                <Route path='/laba4' render={() => <Lab4/>} />
                <Route path='/laba5' render={() => <Lab5/>} />
                <Route path='/laba6' render={() => <Lab6/>} />
                <Route path='/laba7' render={() => <Lab7/>} />
                <Route path='/laba8' render={() => <Lab8/>} />
                <Route path='/laba9' render={() => <Lab9/>} />

                <Route path='/task1' render={() => <Task_1/>} />
                <Route path='/task2' render={() => <Task_2/>} />
                <Route path='/task3' render={() => <Task_3/>} />

            </BrowserRouter>
        </div>
    )
}

export default App;

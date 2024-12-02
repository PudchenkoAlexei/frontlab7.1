import React from 'react';
import Header from './components/header';
import './App.css';
import Content from "./components/content"; // Вам може знадобитися створити файл стилів для вашого проекту
import Image from "./components/image";

function App() {
    return (
        <div className="app">
            <Header />
            <Content />
            <Image />
        </div>
    );
}

export default App;
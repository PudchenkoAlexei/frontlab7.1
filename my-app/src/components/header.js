import React from 'react';

function Header() {
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const changeColors = (element) => {
        const randomBgColor = getRandomColor();
        const randomTextColor = getRandomColor();

        element.style.backgroundColor = randomBgColor;
        element.style.color = randomTextColor;
    };

    return (
        <div className="header-box">
            <h2>
                Пудченко Олексій Сергійович
            </h2>
            <p id="birthplace" className="changeable" onClick={(e) => changeColors(e.target)}>
                Дата і місце народження: 7 січня 2005 року, місто Київ
            </p>

            <p id="education" className="changeable" onClick={(e) => changeColors(e.target)}> 
                Освіта: Школа №276; Київський політехнічний інститут імені Ігоря Сікорського.
            </p>
        </div>
    );
}

export default Header;
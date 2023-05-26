import React from 'react';
import style from './Table.module.css'

const Table = () => {

    const handleMouseMove = (e) => {
        const {currentTarget: target} = e;
        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }

    return (
        <div className={style.block} onMouseMove={handleMouseMove}>
            <h2>Сравнение с конкурентами</h2>
            <div className={style.block__sections}>
                <table className={style.matable}>
                    <tr>
                        <th>Название</th>
                        <th>Частота встреч</th>
                        <th>Только бизнес?</th>
                        <th>Время встречи</th>
                        <th>Мобильная Версия</th>
                    </tr>
                    <tr>
                        <td className={style.choosentext}>HiBye</td>
                        <td className={style.choosentext}>Сколько угодно</td>
                        <td className={style.choosentext}>Нет</td>
                        <td className={style.choosentext}>Любое</td>
                        <td className={style.choosentext}>Да</td>
                    </tr>
                    <tr>
                        <td>Uniter</td>
                        <td>1-2 B неделю</td>
                        <td>Да</td>
                        <td>Обед (час)</td>
                        <td>Нет</td>
                    </tr>
                    <tr>
                        <td>Random Coffee</td>
                        <td>Раз в неделю</td>
                        <td>Да</td>
                        <td>Кофе (полчаса)</td>
                        <td>Да</td>
                    </tr>
                    <tr>
                        <td>Lunchclub</td>
                        <td>Раз в неделю</td>
                        <td>Да</td>
                        <td>Обед (час)</td>
                        <td>Нет</td>
                    </tr>
                    <tr>
                        <td>The Breakfast</td>
                        <td>Раз в день</td>
                        <td>Да</td>
                        <td>Завтрак (час)</td>
                        <td>Ничего не</td>
                    </tr>
                </table>
            </div>
            <br/><br/>
        </div>
    );
};

export default Table;
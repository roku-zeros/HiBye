import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import ServiceCardList from "./components/ServiceCardList/ServiceCardList";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import SellingBlock from "./components/SellingBlock/SellingBlock";
import SecondaryServiceCardList from "./components/SecondaryServiceCardList/SecondaryServiceCardList";
import WideBlock from "./components/WideBlock/WideBlock";
import Contacts from "./components/Contacts/Contacts";
import FeedBackBlock from "./components/FeedbackBlock/FeedBackBlock";
import Footer from "./components/Footer/Footer";
import Table from "./components/Table/Table";


function App() {
    return (
        <div>
            <div className="container">
                <Navigation/>
                <HeaderContent/>
                <WideBlock card_title={'Наши преимущества'}
                           first_title={'Решение проблем знакомств на мероприятиях.'}
                           first_text={'- Как HiBye помогает избежать страха быть отвергнутым на мероприятиях.' +
                               '- Преодоление ограничений времени и выбора качественных знакомств с HiBye.' +
                               '- Потеря контактов больше не является проблемой благодаря HiBye.'}
                           second_title={'Помощь организаторам мероприятий'}
                           second_text={'HiBye увеличивает возвращаемость клиентов на мероприятиях.' +
                               'Заполнение пустых слотов в расписании с помощью HiBye.' +
                               'Привлечение большего количества заинтересованных клиентов с HiBye.'}
                           third_title={'Уровень "нетворкинга" на мероприятиях'}
                           third_text={'Как HiBye повышает удовлетворенность уровнем "нетворкинга" на мероприятиях.\n' +
                               'Особенности HiBye, которые делают его лучшим инструментом для нетворкинга.' +
                               'Как HiBye помогает установить долгосрочные связи и контакты на мероприятиях.'}
                />
                <Contacts/>
                <Table />
                <Footer />
            </div>
        </div>
    );
}

export default App;

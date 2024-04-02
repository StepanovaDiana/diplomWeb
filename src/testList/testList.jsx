import React from "react";
import "inter-ui/inter.css";

import './testList.css';


const  TestList = (props) => {



    return (

       <div className={'test'}>

           <h2 className={'h2'}>Диагностическое тестирование</h2>

           <h3 className={'h3'}>Выберите предположительно вашу болезнь, для проверки симптомов:</h3>

        <div  className={'list'}>


            <a href="#" className="button" id="button">Бронхиальная астма</a>
            <a href="#" className="button" id="button">Пневмония</a>
            <a href="/test1" className="button" id="button">Менинговая инфекция</a>
            <a href="#" className="button" id="button">Нарушение мочеиспускания</a>
        </div>
       </div>


    );

}

export  default  TestList;
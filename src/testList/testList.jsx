import React from "react";

import './testList.css';
import Disease from "../component/diseace/disease";
import Button from "../component/button/button";
const webAppUrl='https://venerable-crostata-6cb701.netlify.app';

const diseases= [
    {id: '2', title: 'Пневмония'},
    {id: '3', title: 'Менинговая инфекция '},
    {id: '4', title: 'Нарушение мочеиспускания '},
]
const  TestList = (props) => {


    return (
        <div  className={'list'}>
            <a href="/test1" className="button" id="button">Бронхиальная астма</a>
            {diseases.map(item=> (
                <Disease
                    disease={item}
                   // onAdd={onNext}
                    className={'item'}
                />
            ))}

        </div>
    );

}

export  default  TestList;
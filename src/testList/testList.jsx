import React from "react";

import './testList.css';
import Disease from "../component/diseace/disease";
import Button from "../component/button/button";

const diseases= [
    {id: '1', title: 'Бронхиальная астма'},
    {id: '2', title: 'Пневмония'},
    {id: '3', title: 'Менинговая инфекция '},
    {id: '4', title: 'Нарушение мочеиспускания '},
]
const  TestList = (props) => {


    return (
        <div  className={'list'}>
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
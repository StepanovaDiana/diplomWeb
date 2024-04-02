import React from "react";

import './testList.css';
import Disease from "../component/diseace/disease";
import Button from "../component/button/button";

const diseases= [
    <form className="mt-4">
        <button type="submit" className="btn btn-outline-primary btn-lg btn-block">Бронхиальная астма</button>
    </form>,
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
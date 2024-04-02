import React from 'react';
import Button from "../button/button";
import  './disease.css'
const Disease = ({disease,className, onAdd}) => {
    const onAddHandler = () => {// в будущем будет переходить на новую страницу
        onAdd(disease);
    }
  /*  return (
        <div className={'disease' + className}>
            <div className={'title'}>{disease.title}</div>
            <Button className={'add-bth'} onClick={onAddHandler}>
                Выбрать
            </Button>//создать другой вид кнопки для нажатия

        </div>
    );*/
};

export default Disease;
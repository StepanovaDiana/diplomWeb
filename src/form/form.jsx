import React, {useCallback, useEffect, useState} from "react";
import './form.css';
import {useT} from "../hooks/useT";
const  Form = () => {

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [age, setAge] = useState('adult');
    const [email, setEmail] = useState('');
    const {tg} = useT();

    //отправка данных с главной кнопки боту
   /*const onSendData = useCallback(() => {
        const data = {
            surname,
            name,
            patronymic,
            age,
            email
        }
        tg.sendData(JSON.stringify(data));
    }, [surname,name,patronymic,age,email])

    useEffect(() => {
            tg.onEvent('mainButtonClicked', onSendData())
            return () => {
                tg.offEvent('mainButtonClicked', onSendData())
            }

    }, [onSendData])

    useEffect(() => {
            tg.MainButton.setParams({
                text: 'Отправить данные'
            })
    }, [])*/

    useEffect(() => {
       if (!surname || !name || !patronymic || !email) {
                tg.MainButton.hide();
       } else {
                tg.MainButton.show();
       }

    }, [surname, name, patronymic, email])
    const onChangeSurname = (e) => {
        setSurname(e.target.value)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangePatronymic = (e) => {
       setPatronymic(e.target.value)
    }

    const onChangeAge = (e) => {
        setAge(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }





    return (
        <div className={"form"}>
            <h3>Введите ваши данные:</h3>
            <input
                className={'input'}
                type ="text"
                placeholder={'Фамилия'}
                value={surname}
                onChange={onChangeSurname}
            />
            <input
                className={'input'}
                type ="text"
                placeholder={'Имя'}
                value={name}
                onChange={onChangeName}
            />
            <input
                className={'input'}
                type ="text"
                placeholder={'Отчество'}
                value={patronymic}
                onChange={onChangePatronymic}
            />
            <select  value={age} onChange={onChangeAge} className={'select'}>
                <option value={'child'}>Ваш возраст меньше 18 лет </option>
                <option value={'adult'}>Ваш возраст больше 18 лет </option>
            </select>
            <input
                className={'input'}
                type ="text"
                placeholder={'E-mail'}
                value={email}
                onChange={onChangeEmail}
            />
        </div>
    );

}

export  default  Form;
import React from "react";
import Button from "../button/button";
import {useT} from "../../hooks/useT";

const  Header = (props) => {
    const {user, onClose} = useT();

    return (
        <div className={'header'}>
            <Button onClick = {onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );

}

export  default  Header;
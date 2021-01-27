import React from 'react';
import { Link } from "react-router-dom";
import style from "./item.module.scss";

export const ListItem = ({ character }) => {

    return (
        <div className={ style.wrapper }>
            <Link to={ `/${ character.id }` } className={style.link}>
                <img
                    src={ character.image }
                    alt={ character.name }
                    className={ style.avatar }
                />

                <h2 className={style.name}> { `${ character.name }` }</h2>
            </Link>
        </div>
    )
}
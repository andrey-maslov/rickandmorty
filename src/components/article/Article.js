import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { fetchOneCharacter } from "../../actions/actionCreator";
import style from './article.module.scss'

export const Article = () => {

    let { id } = useParams();
    const dispatch = useDispatch()
    const { item } = useSelector(state => state.charactersReducer)
    useEffect(() => {
        dispatch(fetchOneCharacter(id))
    }, [ id ])

    if (!item) {
        return (
            <div style={ { textAlign: 'center' } }>Loading...</div>
        )
    }

    return (
        <section>
            <div className={ `${ style.wrapper } container` }>
                <div className={ style.content }>
                    <div className={ style.head }>
                        <img className={ style.img } src={ item.image } alt={ item.name } />
                        <h1>{ item.name }</h1>
                    </div>
                    <div className={ style.body + ''}>
                        <h3>Common information:</h3>
                        <ul className={ style.features + ' test' }>
                            { item.status && <li>
                                <span>Status: </span>
                                <span
                                    className={`${style.status} ${item.status ? style[item.status] : ''}`}>
                                    { item.status }
                                </span>
                            </li> }
                            { item.type && <li>
                                <span>Type:</span>
                                <span>{ item.type }</span>
                            </li> }
                            { item.gender && <li>
                                <span>Gender: </span>
                                <span>{ item.gender }</span>
                            </li> }
                            { item.origin.name && <li>
                                <span>Origin: </span>
                                <span>{ item.origin.name }</span>
                            </li> }
                        </ul>
                        { item.episode && (
                            <>
                                <h3>Episodes:</h3>
                                <ol className={ `${style.features} ${style.episodes}` }>
                                    { item.episode.map((episode, i) => {
                                        const episodeNumberArray = episode.split('/')
                                        const episodeNumber = episodeNumberArray[episodeNumberArray.length - 1]
                                        return (
                                            <li key={episode}>
                                                <a href={ episode }>{ `Episode ${ episodeNumber }` }</a>
                                            </li>
                                        )
                                    }) }
                                </ol>
                            </>
                        ) }
                        {item.location.name && (
                            <>
                                <h3>Location: </h3>
                                <p>{item.location.name}</p>
                            </>

                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
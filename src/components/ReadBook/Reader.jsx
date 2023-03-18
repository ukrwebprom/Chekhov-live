import React from 'react';
import { useRef, useEffect } from 'react';
import source from '../../test.json';
import { useInView } from 'react-intersection-observer';
/* import { nanoid } from 'nanoid' */
import './reader.css'

export const Reader = () => {
    const currentItem = useRef(null);
/*     const obj = JSON.parse(source); */
    console.log(currentItem.current)
    const { ref, inView} = useInView({
        /* Optional options */
        threshold: 0.7,
      });

    useEffect(() => {
        console.log(inView)
    }, [inView])
    return(
        <div className="reading-area">
            <div className="phrase">
                <p className="phrase-text">{source.content[2].say}</p>
            </div>
            <div className="phrase" ref={ref}>
                <p className="phrase-auth">Anastasia</p>
                <p className="phrase-text">&ldquo; {source.content[3].say} &rdquo;</p>
            </div>
            <div className="phrase">
                <p className="phrase-text">{source.content[4].say}</p>
            </div>
        </div>
        
    )
}
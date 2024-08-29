import React, { useState } from 'react'
import data from './data';
import './style.css';

export default function Accordion() {

    const [select, selected] = useState(null);
    const [enableMulti, setMulti] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleselection(getid) {
        //   console.log(getid);
        selected(getid == select ? null : getid);
    }

    function handleMultiselection(getid) {
        let cpyMulti = [...multiple];
        const findIndexOfCurrentId = cpyMulti.indexOf(getid);

        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) cpyMulti.push(getid);
        else cpyMulti.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMulti);

    }

    console.log(select, multiple);

    return (
        <div className='wrapper'>
            <button onClick={() => setMulti(!enableMulti)} className='button'>Enable multiSelection</button>
            <div className='accordian'>
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className='item'>
                            <div onClick={enableMulti ? () => handleMultiselection(dataItem.id) : () => handleSingleselection(dataItem.id)} className='title'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>

                            {
                                enableMulti ?
                                    multiple.indexOf(dataItem.id) !== -1 && (<div className='content'>{dataItem.answer}</div>) :
                                    select === dataItem.id && (<div className='content'>{dataItem.answer}</div>)
                            }

                            {/* {
                                select === dataItem.id ?
                                    <div className='content'>{dataItem.answer}</div>
                                    : null
                            } */}
                        </div>)
                        : <div>No data is present</div>
                }
            </div>
        </div>
    )
}

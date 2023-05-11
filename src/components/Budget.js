
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);

    const changeVal = (value) => {
        if (parseInt(value) > 20000) {
            alert("Budget cannot be over "+currency+"20000");
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='cost'
                    value={budget}
                    step='10'
                    style={{ marginLeft: '0.5rem', size: 10 }}
                    onChange={(event) => changeVal(event.target.value)}>
                </input></span>
        </div>
    );
};
export default Budget;
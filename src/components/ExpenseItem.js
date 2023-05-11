import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import {FcPlus} from "react-icons/fc";
import { AiFillMinusCircle} from "react-icons/ai";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }
    const styles = {
        plus : {
            backgroundColor: "lightgreen",
            color: "white",
            fontSize: "30px",
            fontWeight: "bold"
        },
        minus : {
            backgroundColor: "red",
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
            borderRadius: "100%"
        },
    }
    
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FcPlus size='3em' onClick={event=> increaseAllocation(props.name)} /></td>
        <td><AiFillMinusCircle color='red'  size='3em' onClick={event=> decreaseAllocation(props.name)} /></td>
        {/* <td><button style={styles.minus} onClick={event=> decreaseAllocation(props.name)}>-</button></td> */}
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;

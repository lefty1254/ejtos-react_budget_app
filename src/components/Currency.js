import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const currencies = [
    {
        name: "Dollar",
        value: "$",
    },
    {
        name: "Pound",
        value: "£",
    },
    {
        name: "Euro",
        value: "€",
    },
    {
        name: "Ruppee",
        value: "₹",
    },
]

const Currency = () => {

    
    const ref = React.useRef(null);

    const { currency, dispatch } = useContext(AppContext);

    const getName = ()=>{
        let c = currencies.filter((item)=>item.value==currency)
        return "Currency ("+currency+" "+c[0].name+")"
    }

    const [name, setName] = useState(getName());
    


    const changeCurrency = (target) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: target.value,
        });

        setName("Currency (" + target.options[target.selectedIndex].text + ")")
        ref.current.selectedIndex = '0';



    };
    // useEffect(()=>{
    //     if(name=='')
    //         changeCurrency(ref);
    // },[])
    // // 


    return (

        <select ref={ref} className="alert alert-success" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target)}>
            <option value hidden>{name}</option>
            {currencies.map((c) => (
                <option value={c.value} name={c.name}>{c.value} {c.name}</option>
            ))}
            {/* <option value="$" name="Dollar">$ Dollar</option>
                <option defaultValue value="£" name='Pound'>£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option> */}

        </select>

    );
};
export default Currency;
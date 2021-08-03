import React from 'react'
import { CheckBox, Collapse } from 'antd';

const country = [
    {
        "id":1,
        "name":"USA"
    },

    {
        "id":2,
        "name":"Europe"
    },

    {
        "id":1,
        "name":"india"
    }
    
]

function Checkedbox() {
    return (
        <div>
            <Collapse defaultActiveKey ={['0']} >
                <panel header key = "1">{country.map((value, index) => (
                    <React.fragment key = {index}>
                        <CheckBox onChange type="checkbox"
                        checked /> <span>{value.name}</span>
                    </React.fragment> ))}
                    </panel>
            </Collapse>
            
        </div>
    )
}

export default Checkedbox




import React, { useState } from 'react';

export const Numbers = props => {
    const [word, setWord] = useState('');
    const [filterDisplay, setFilterDisplay] = useState(props.persons);

    const handleChange = e => {
        let oriList = props.persons.map(p => {
            return { name: p.name.toLowerCase(), number: p.number };
        });

        if (e !== "") {
            let newList = [];
            setWord(e);
            newList = oriList.filter(
                p => p.name.includes(word.toLocaleLowerCase())
            );
            setFilterDisplay(newList);
        } else {
            setFilterDisplay(props.persons);
        }
    };
    return (
        <div>
            <h1>Numbers</h1>
            filter: <input onChange={e => handleChange(e.target.value)} />
            {
                filterDisplay.map((person, idx) => {
                    <div key={idx}>
                        <li>
                            {person.name}
                            <span>{person.number}</span>
                        </li>
                    </div>
                })
            }

        </div>
    );
}
import React from 'react';
import CountUp from 'react-countup';

const Country = (props) => {
    return (
        <div className="item">
            <p>{props.name}</p>
            <CountUp duration={1.25} className='cases' end={props.nbCases} />
        </div>
    );
};

export default Country;
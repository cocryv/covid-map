import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../shared/globalContext';
import Country from './Country';

const Sidebar = () => {

    const apiDatas = useContext(GlobalContext);
    const globalDatas = apiDatas.value[0];
    const countries = apiDatas.value2[0];
    


    useEffect(() => {
        setTimeout(function() { //Start the timer
            console.log(globalDatas)
        }.bind(this), 1000)
      }, []);

    return (
        <div className='sidebar'>
            <div className="sidebar__mainTab">
                <div className="sidebar__info">
                    <h1>
                        COVID-19
                        <br></br>
                        Global Cases
                    </h1>
                    <div className="totalCases">
                        TOTAL CONFIRMED CASES
                        <br></br>
                        <span>{globalDatas.cases}</span>
                    </div>
                    <div className="totalCases totalCases--yellow">
                        TOTAL ACTIVES CASES
                        <br></br>
                        <span>{globalDatas.active}</span>
                    </div>
                    <div className="totalCases totalCases--green">
                        TOTAL RECOVERED CASES
                        <br></br>
                        <span>{globalDatas.recovered}</span>
                    </div>
                    <div className="totalCases totalCases--red">
                        TOTAL DEATHS CASES
                        <br></br>
                        <span>{globalDatas.deaths}</span>
                    </div>
                </div>
                <div className="sidebar__country">
                    <Country/>
                    <Country/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
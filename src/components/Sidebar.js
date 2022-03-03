import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../shared/globalContext';
import CountUp from 'react-countup';
import Country from './Country';
import { gsap } from 'gsap';
import { Power4 } from 'gsap/gsap-core';

const Sidebar = () => {

    const [openCountryTab, setOpenCountryTab] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    // const [moreDetailsOpen, setMoreDetailsOpen] = useState(false);

    const apiDatas = useContext(GlobalContext);
    const globalDatas = apiDatas.value[0];
    const countries = apiDatas.value2[0];

    useEffect(() => {
        const tl = gsap.timeline();
        if (window.innerWidth > 900) tl.to('.sidebar', 0.3, { x: '0%', ease: Power4.easeIn });

        tl.to('.map', 0.5, { opacity: '1', ease: Power4.easeOut }, '+=1');
      }, []);

    return (
        <div className="sidebar">
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
                        <span><CountUp className='cases' end={globalDatas.cases} /></span>
                    </div>
                    <div className="totalCases totalCases--yellow">
                        TOTAL ACTIVES CASES
                        <br></br>
                        <span><CountUp className='cases' end={globalDatas.active} /></span>
                    </div>
                    <div className="totalCases totalCases--green">
                        TOTAL RECOVERED CASES
                        <br></br>
                        <span><CountUp className='cases' end={globalDatas.recovered} /></span>
                    </div>
                    <div className="totalCases totalCases--red">
                        TOTAL DEATHS CASES
                        <br></br>
                        <span><CountUp className='cases' end={globalDatas.deaths} /></span>
                    </div>
                </div>
                <div className="sidebar__country">
                    {
                        countries.map((country) => {
                            return <div className="country" onClick={() => {setOpenCountryTab(true); setSelectedCountry(country)}} >
                                    <Country name={country.country} nbCases={country.cases}/>
                                </div>
                        })
                    }
                </div>
            </div>
            <div className={`sidebar__sideTab ${openCountryTab ? 'open' : 'closed'}`}>
                <div className="sideTab__content">
                    <div className="sideTab__title">
                        <h1>
                            {selectedCountry.country}
                        </h1>
                    </div>
                    <div className="sideTab__totalCase">
                    <div className="totalCases">
                            TOTAL CONFIRMED CASES
                            <br></br>
                            <span><CountUp className='cases' end={selectedCountry.cases} /></span>
                        </div>
                    </div>
                    <div className="countryDetails">
              <div className="section">
                <p className="sectionTitle">Cases in details</p>
                <div className="card cases">
                  <div className="legend orange">
                    <div className="color" />
                    <p>Active cases</p>
                    {selectedCountry.cases && (
                      <CountUp end={selectedCountry.active} duration={0.75} />
                    )}
                  </div>
                  <div className="legend red">
                    <div className="color" />
                    <p>Deaths</p>
                    {selectedCountry.cases && (
                      <CountUp end={selectedCountry.deaths} duration={0.75} />
                    )}
                  </div>
                  <div className="legend green">
                    <div className="color" />
                    <p>Recovered cases</p>
                    {selectedCountry.cases && (
                      <CountUp
                        end={selectedCountry.recovered}
                        duration={0.75}
                      />
                    )}
                  </div>
                    <div className="legend grey">
                      <div className="color" />
                      <p>Today cases</p>
                      {selectedCountry.cases && (
                        <CountUp
                          end={selectedCountry.todayCases}
                          duration={0.75}
                        />
                      )}
                    </div>
                    <div className="legend grey">
                      <div className="color" />
                      <p>Today deaths</p>
                      {selectedCountry.cases && (
                        <CountUp
                          end={selectedCountry.todayDeaths}
                          duration={0.75}
                        />
                      )}
                    </div>
                    <div className="legend grey">
                      <div className="color" />
                      <p>Cases per one million</p>
                      {selectedCountry.cases && (
                        <CountUp
                          end={selectedCountry.casesPerOneMillion}
                          duration={0.75}
                        />
                      )}
                    </div>
                    <div className="legend grey">
                      <div className="color" />
                      <p>Deaths per one million</p>
                      {selectedCountry.cases && (
                        <CountUp
                          end={selectedCountry.deathsPerOneMillion}
                          duration={0.75}
                        />
                      )}
                  </div>
                </div>
              </div>
            </div>
                </div>
                <div onClick={() => {setOpenCountryTab(false)}} className={`sideTab__closeTab ${openCountryTab ? 'open' : 'closed'}`}>
                <svg
                    className={openCountryTab ? '' : 'closed'}
                    width="5"
                    height="8"
                    viewBox="0 0 5 8"
                    fill="none"
                >
                    <path
                    d="M5 6.95969V1.04031C5 0.621059 4.51503 0.387973 4.18765 0.649878L0.488043 3.60957C0.23784 3.80973 0.23784 4.19027 0.488043 4.39043L4.18765 7.35012C4.51503 7.61203 5 7.37894 5 6.95969Z"
                    fill="#767676"
                    />
                </svg>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
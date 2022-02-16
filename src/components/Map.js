import React, { useContext, useEffect } from 'react';
import { gsap } from 'gsap';
import { Power4 } from 'gsap/gsap-core';
import { GlobalContext } from '../shared/globalContext';

const Map = () => {

    const apiDatas = useContext(GlobalContext);
    const mapSVG = apiDatas.value3[0];

    const styleAdjust = () => {
        const svgTag = document.querySelector('.map__svgContainer svg');
        const titleTag = document.querySelector('title');
    
        svgTag.setAttribute('viewBox', '-140 486 3230 523');
      };
    
      const tl = gsap.timeline();
    
      const mapEntrance = () => {
        styleAdjust();
        if (window.innerWidth > 900) {
          tl.to('.map__svgContainer', 0.5, { opacity: '1', ease: Power4.easeOut }, '+=1');
          tl.to('.mapSwitchContainer', 0.5, { opacity: '1', ease: Power4.easeOut });
        } else {
          tl.to('.map__svgContainer', 0.75, { opacity: '1', ease: Power4.easeOut });
          tl.to('.mapSwitchContainer', 0.5, { opacity: '1', ease: Power4.easeOut });
        }
      };

      useEffect(() => {
        mapEntrance();
      }, []);

    return (
        <div className='map'>
            <div className="map__container">
                <div className="map__svgContainer" dangerouslySetInnerHTML={{__html: mapSVG}}> 
                </div>
            </div>
        </div>
    );
};

export default Map;
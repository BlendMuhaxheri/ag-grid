import React, { useState } from 'react'
import chatss from '../assets/images/chatss.svg'
import statssvg from '../assets/images/statssvg.svg'
import columnssvg from '../assets/images/columnssvg.svg'
import filterssvg from '../assets/images/filterssvg.svg'
import jennifer from '../assets/images/jennifer.svg'
import test from '../assets/images/test.png'
import typee from '../assets/images/typee.png'
import arrow from '../assets/images/arrow.svg'
import './NavigationDrawer.scss'


const NavigationDrawer = () => {


    return (
        <div style={{ background: '#F8F8F8', width: '434px', height: '490px', position: 'absolute', top: '0', left: 1080, zIndex: '99' }}>
            <div className='side-first' >
                <img src={arrow} style={{ cursor: 'pointer', height: '30px', marginLeft: '-20px' }} />
                <img src={chatss} style={{ width: '150px', height: '30px' }} />
                <img src={statssvg} style={{ width: '150px', height: '30px' }} />
                <img src={filterssvg} style={{ width: '150px', height: '30px' }} />
                <img src={columnssvg} style={{ width: '150px', height: '30px' }} />
            </div>
            <div className='side-second' >
                <img style={{ height: '208px', }} src={test} />
                <img src={jennifer} />
                <img style={{ marginTop: '30px' }} src={typee} />
            </div>
        </div>
    )
}
export default NavigationDrawer;
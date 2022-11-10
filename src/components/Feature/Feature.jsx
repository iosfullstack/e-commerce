import React from 'react'
import Shade from '../../assets/shade.png'
import './Feature.css'
import ReactCompareImage from 'react-compare-image';
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

const Feature = () => {
  return (
    <div className="feature my-24 p-8 flex justify-around items-center">
        <div className="f-left flex flex-col gap-8 relative">
            <span className='block uppercase font-bold text-4xl'>virtual try-on</span>
            <span className='block uppercase text-2xl w-80'>never buy the wrong shade again</span>
            <span className='block font-bold text-xl'>Try Now!</span>
            <img className='absolute w-40 h-6 bottom-12 top-48 right-44' src={Shade} alt="shade" />
        </div>

        <div className="f-right w-5/12">
            <ReactCompareImage leftImage={Before} rightImage={After}/>
        </div>
    </div>
  )
}

export default Feature
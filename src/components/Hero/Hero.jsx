import React from 'react'
import './Hero.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {motion} from 'framer-motion'

const Hero = () => {
    const transition = {duration: 3, type: "spring"}
    const bounceTransition = { y: {
        duration: 0.4,
        yoyo: Infinity,
        ease: "easeOut",
        // repeatDelay: 1.2,
      }
    }
  return (
    <div className="hero">
        {/* Hero Left */}
        <div className="hl-side grid grid-rows-3">
            <span className='hl-text1 uppercase font-bold block w-min text-2xl'>skin protection cream</span>

            <div className="hl-text2 flex flex-col w-min">
                <span className='font-extrabold text-4xl'>Trendy Collection</span>
                <span className='block'>Seedily say has suitable disposal and boy. Excercise joy man children.</span>
            </div>
        </div>

        {/* Hero Image middle */}
        <div className="hero-img-wrapper flex justify-center items-baseline relative">
            <motion.div
            initial={{bottom: "-32px"}}
            whileInView={{bottom: "0px"}}
            transition={bounceTransition}
            animate={{
                y: ["5%", "-5%"],
            }}
            className="img-bluecircle">
            </motion.div>

            <motion.img 
            initial={{bottom: "32px"}}
            whileInView={{bottom: "0px"}}
            transition={transition} 
            src={HeroImg} alt="heroimg" width={500} />

            <motion.div
            initial={{right: "4%"}}
            whileInView={{right: "2%"}}
            transition={transition} 
            className="hero-cart absolute flex items-center bottom-1/4 right-px gap-4">
                <RiShoppingBagFill/>
            <div className="hero-signup flex gap-4 items-center bg-white text-sm p-3 rounded-2xl shadow-black">
                <span className='block w-24'>Best Signup Offers</span>
                <div className="hero-arrowright">
                    <a href="http://"><AiOutlineArrowRight className='flex w-5 h-5 bg-white rounded-full border border-solid border-sky-500 p-1'/></a>
                </div>
            </div>
            </motion.div>
        </div>
        {/* Hero Right */}
        <div className="hl-side grid grid-rows-3">
            <div className="hero-traffic flex flex-col text-right">
                <span className='font-extrabold text-4xl'>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className="hero-customer flex flex-col md:text-right">
                <span className='font-extrabold text-4xl'>100k</span>
                <span >Happy Customers</span>
            </div>
        </div>
    </div>
  )
}

export default Hero
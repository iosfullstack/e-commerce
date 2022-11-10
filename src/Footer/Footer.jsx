import React from 'react'
import './Footer.css'
import Logo from '../assets/logo.png'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLogin} from 'react-icons/ai'
import {BsPeople} from 'react-icons/bs'
import {MdOutlinePrivacyTip} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='footer mt-28 w-full'>
        <hr />
        <div className="f-footer flex justify-around mt-4">
            <div className="f-logo flex gap-3">
                <img className='h-10 w-10' src={Logo} alt="logo" />
                <span className='font-semibold'>amazon</span>
            </div>

            <div className="f-contact flex flex-col gap-3">
                <span className='block font-medium text-xl'>Contact Us</span>
                <div className="f-location flex items-center gap-2">
                    <HiOutlineLocationMarker className='text-lg'/>
                    <span className='text-sm'>111 north avenue Orlando, FL 32801</span>
                </div>
                <div className="f-phone flex items-center gap-2">
                    <BsTelephone className='text-lg'/>
                    <span className='text-sm'>352-306-4415</span>
                </div>
                <div className="f-mail flex items-center gap-2">
                    <AiOutlineMail className='text-lg'/>
                    <span className='text-sm'>support@amazon.com</span>
                </div>
            </div>

            <div className="f-account flex flex-col gap-3">
                <span className='block font-medium text-xl'>Account</span>
                <div className="f-signin">
                    <a className="flex items-center gap-2" href="http://">
                        <AiOutlineLogin className='text-lg'/>
                        <span className='text-sm'>Signin</span>
                    </a>
                </div>
            </div>

            <div className="f-company flex flex-col gap-3">
                <span className='block font-medium text-xl'>Company</span>
                <div className="f-about">
                    <a className="flex items-center gap-2" href="http://">
                        <BsPeople className='text-lg'/>
                        <span className='text-sm'>About Us</span>
                    </a>
                </div>
            </div>

            <div className="f-resources flex flex-col gap-3">
                <span className='block font-medium text-xl'>Resources</span>
                <div className="f-safety">
                    <a className="flex items-center gap-2" href="http://">
                        <MdOutlinePrivacyTip className='text-lg'/>
                        <span className='text-sm'>Safety Privacy & Terms</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="f-down flex flex-col justify-center items-center mt-16">
            <span className='text-sm'>Copyright ©2022 amazon inc.</span>
            <span className='text-sm'> by IOSDev</span>
        </div>
    </div>
  )
}

export default Footer
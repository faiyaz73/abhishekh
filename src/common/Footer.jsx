import React from 'react'
import { Link } from 'react-router'
import { MdLocationPin, MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import logo from '../../IMAGE/logo.jpeg';

export default function Footer() {
  return (
    <div>
      <section className='px-4 py-10 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-7xl gap-6 md:grid-cols-3'>
          <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md'>
            <div className='flex items-center gap-3'>
              <span className='flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600'>
                <MdLocationPin className='text-2xl' />
              </span>
              <h3 className='text-lg font-semibold text-slate-800'>Address</h3>
            </div>
            <p className='mt-4 text-sm leading-6 text-slate-600'>
              Head Office : 14/48/3 Barf Khana Udayfganj. Lucknow, Up - 226001, india
            </p>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md'>
            <div className='flex items-center gap-3'>
              <span className='flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600'>
                <IoCall className='text-2xl' />
              </span>
              <h3 className='text-lg font-semibold text-slate-800'>Call</h3>
            </div>
            <div className='mt-4 space-y-2'>
              <a href='tel:7859810811' className='block text-sm text-slate-600 hover:text-rose-600'>7859810811</a>
              <a href='tel:7905678408' className='block text-sm text-slate-600 hover:text-rose-600'>7905678408</a>
            </div>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md'>
            <div className='flex items-center gap-3'>
              <span className='flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600'>
                <MdEmail className='text-2xl' />
              </span>
              <h3 className='text-lg font-semibold text-slate-800'>Email</h3>
            </div>
            <a
              href='mailto:jankalyancarefoundation@gmail.com'
              className='mt-4 block text-sm leading-6 text-slate-600 hover:text-rose-600'
            >
              jankalyancarefoundation@gmail.com
            </a>
          </div>
        </div>
      </section>


      <footer className="bg-neutral-primary-soft">
        <div className='text-center font-bold text-2xl'>Usefull Links</div>
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        


           <a href="/" className="flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Jankalyan Care Foundation logo"
                    className="h-12 w-auto rounded-md object-contain sm:h-14 md:h-16"
                  />
                </a>



      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
            <Link
            to={'/'}
            >
          <h2 className="mb-2 text-sm font-semibold text-heading uppercase">
           Home
          </h2></Link>
          <ul className="text-body font-medium">
            <li className="mb-2">
              <Link
              to={'/member_apply'} 
              >
               Member Apply
              </Link>
            </li>
            <li className='mb-2'>
              <Link
              to={'/team_member'}
              >
                Team Member
              </Link>
            </li>
            
            <li className='mb-2'>
              <Link
              to={'/donors'}
              >
               List of Donors
              </Link>
            </li>
            
            <li className='mb-2'>
              <Link
              to={'/contact'}
              >
              Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
           
          <ul className="text-body font-medium">
            <li className="mb-2">
             <Link
             to={'latestevent'}
             >
             Latest Events
             </Link>
            </li>
            <li className="mb-2">
             <Link
             to={'donation'}
             >
             Donations
             </Link>
            </li>
            <li className="mb-2">
             <Link
             to={'gallery'}
             >
             Gallery
             </Link>
            </li>
            <li className="mb-2">
             <Link
             to={'manegment_team'}
             >
             Mannegment Team
             </Link>
            </li>
            
            <li className="mb-2">
             <Link
             to={'idcarddownload'}
             >
             ID Card Download
             </Link>
            </li>
            
            
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
            Legal
          </h2>
          <ul className="text-body font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-default sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-body sm:text-center">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
      <div className="flex mt-4 sm:justify-center sm:mt-0">
        <h1>fb</h1>
        <h3>ins</h3>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

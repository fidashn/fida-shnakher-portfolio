import Head from 'next/head';
import { BsFillMoonStarsFill }from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub,AiOutlineLink}from 'react-icons/ai';
import {FaHtml5, FaReact, FaNodeJs, FaCss3} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io5';
import {SiMongodb, SiTailwindcss, SiStyledcomponents, SiCypress} from 'react-icons/si';
import Image from 'next/image';
import myPic from '../public/Images/me-removebg-preview.png';
import bank from '../public/Images/bank-img.png';
import dice from '../public/Images/dice-img.png';
import hotel from '../public/Images/hotel-img.png';
import shoes from '../public/Images/shoes-img.png';
import todo from '../public/Images/to-do-list-img.png';
import { useState } from 'react';


export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Fida Shnakher|Frontend Developer</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-black'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 lg:flex justify-between max-sm:flex-col max-sm:justify-between max-sm:items-center  nav'>
            <h1 className='text-xl dark:text-white sm:text-lg'>Developed by</h1>
            <ul className='flex items-center sm:flex max-sm:justify-center max-sm:mt-7'>
             <li><BsFillMoonStarsFill
              onClick={()=>setDarkMode(!darkMode)}
              className='cursor-pointer text-2xl dark:text-white' /></li>
             <li><a className='bg-gradient-to-r from-purple-400 to-teal-300 text-white  px-8 py-2 rounded-xl text-lg ml-8 ' href="Fida-Shnakher-CV-FrontEnd.pdf">View CV</a></li> 
            </ul>
          </nav>
          <div className='text-center p10'>
            <h2 className='text-4xl py-2 text-teal-500 font-medium md:text-6xl max-sm:text-2xl'>Fida Shnakher</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Frontend Developer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>I started my journey in frontend development, looking forward to join a company that shares my values, and enables me to fulfill my potential.
            you can scroll down to see my work in the projects section, hope you like it.</p>
          </div>
          <div className='text-5xl flex justify-center  gap-20 py-3 '>
           <a className='text-purple-400 ' href="https://www.linkedin.com/in/fida-shnakher-0b0b4a1b5" target="_"><AiFillLinkedin /></a>
           <a className='text-purple-400' href="https://github.com/fidashn" target="_"><AiFillGithub/></a>
          </div>

          <div className='relative mx-auto bg-gradient-to-bl from-purple-300 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-90 md:w-90  max-sm:flex max-sm:justify-center px-2 ima'>
            <Image alt='' src={myPic} layout='fill' objectFit="contain" className='max-sm:pr-7' />
          </div>
          </section>

          <section>
            <div>
              <h3 className='text-3xl py-1   mt-20 flex justify-center text-teal-500 max-sm:text-3xl'>Technologies I use</h3>
              <div className='flex justify-center p-10 gap-5 max-sm:flex-wrap max-sm:text-lg'>
              <FaHtml5 className='text-4xl text-purple-400'/>
              <IoLogoJavascript className='text-4xl text-purple-400'/>
              <FaCss3 className='text-4xl text-purple-400'/>
              <SiTailwindcss className='text-4xl text-purple-400'/>
              <SiStyledcomponents className='text-4xl text-purple-400'/>
              <FaReact className='text-4xl text-purple-400'/>
              <FaNodeJs className='text-4xl text-purple-400'/>
              <SiMongodb  className='text-4xl text-purple-400'/>
              <SiCypress  className='text-4xl text-purple-400'/>
             </div>
              
            </div>
            <div className=' flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <h3 className='text-teal-500 text-4xl py-1 mt-10  flex justify-center max-sm:text-3xl'>My Favorite Projects</h3>

              <div className='mt-10 lg:flex-col justify-center gap-10'>

                <div className='basis-1/3 flex-1 '>
                  <h3 className='text-3xl flex justify-center items-center m-4 text-purple-400 max-sm:text-2xl max-sm:items-center '>Virtual Bank Website</h3>
                  <div className='flex justify-around items-center gap-10 align-bottom mb-5'>
                  <a className='text-4xl text-purple-400' href="https://github.com/fidashn/virtual-bank" target="_"><p className='text-xl text-teal-500 '>Repository</p> <AiFillGithub/></a>
                <a href="https://vir-bank-fi.netlify.app/" target="_"><p className='text-xl text-teal-500 flex justify-center'>Demo</p><AiOutlineLink className=' text-4xl  text-purple-400  flex justify-center items-center'/></a></div>
                <Image alt='' className='rounded-3xl object-cover' layout='responsive' src={bank}/></div>

                <div className='basis-1/3 flex-1 '>
                <h3 className='text-3xl flex justify-center m-4 text-purple-400 max-sm:text-2xl'>To Do List Website</h3>
                  <div className='flex justify-around gap-10 align-bottom mb-5'><a className='text-4xl text-purple-400' href="https://github.com/fidashn/to-do-list" target="_"><p className='text-xl text-teal-500'>Repository</p><AiFillGithub/></a>
                <a href="https://todosli.netlify.app/" target="_"><p className='text-xl text-teal-500'>Demo</p><AiOutlineLink className='text-4xl text-purple-400'/></a></div>
                <Image alt='' className='rounded-3xl object-cover' layout='responsive' src={todo}/></div>

                <div className='basis-1/3 flex-1 '>
                <h3 className='text-3xl flex justify-center m-4 text-purple-400 max-sm:text-2xl'>Dice Game Website</h3>
                  <div className='flex justify-around gap-10 align-bottom mb-5'><a className='text-4xl text-purple-400' href="https://github.com/fidashn/dice-game1" target="_"><p className='text-xl text-teal-500'>Repository</p><AiFillGithub/></a>
                <a href="https://dice-game-f.netlify.app/" target="_"><p className='text-xl text-teal-500'>Demo</p><AiOutlineLink className='text-4xl text-purple-400'/></a></div>
                <Image alt='' className='rounded-3xl object-cover' layout='responsive' src={dice}/></div>

                <div className='basis-1/3 flex-1 '>
                <h3 className='text-3xl flex justify-center m-4 text-purple-400 max-sm:text-2xl '>Hotel Website</h3>
                  <div className='flex justify-around gap-10 align-bottom mb-5'><a className='text-4xl text-purple-400' href="https://github.com/fidashn/HOTEL_WEBSITE" target="_"><p className='text-xl text-teal-500'>Repository</p><AiFillGithub/></a>
                <a href="https://btm-hotel.netlify.app/" target="_"><p className='text-xl text-teal-500'>Demo</p><AiOutlineLink className='text-4xl text-purple-400'/></a></div>
                <Image alt='' className='rounded-3xl object-cover' layout='responsive' src={hotel}/></div>

                <div className='basis-1/3 flex-1 '>
                <h3 className='text-3xl flex justify-center m-2 mt-5 text-purple-400 max-sm:text-2xl'>Amazing Shoes Website</h3>
                <div className='flex justify-around gap-10 align-bottom mb-5'><a className='text-4xl text-purple-400' href="https://github.com/fidashn/landing-page" target="_"><p className='text-xl text-teal-500'>Repository</p><AiFillGithub/></a>
                <a href="https://amazing-shoes-fi.netlify.app/" target="_"><p className='text-xl text-teal-500'>Demo</p><AiOutlineLink className='text-4xl text-purple-400'/></a>
                </div><Image alt='' className='rounded-3xl object-cover' layout='responsive' src={shoes}/></div>
              </div>
            </div>
          </section>
      </main>
    </div>
  )
}

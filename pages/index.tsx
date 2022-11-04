import Head from 'next/head';
import { BsFillMoonStarsFill }from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub,AiOutlineLink}from 'react-icons/ai';
import Image from 'next/image';
import myPic from '../public/Images/me.png';
import bank from '../public/Images/bank-img.png';
import dice from '../public/Images/dice-img.png';
import hotel from '../public/Images/hotel-img.png';
import shoes from '../public/Images/shoes-img.png';
import todo from '../public/Images/to-do-list-img.png';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Fida Shnakher|Frontend Developer</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Developed by</h1>
            <ul className='flex items-center'>
             <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
             <li><a className='bg-gradient-to-r from-purple-400 to-teal-300 text-white font-burtons px-8 py-2 rounded-3xl text-lg ml-8 ' href="../public/Fida-Sh-CV-FrontEnd.pdf">Resume</a></li> 
            </ul>
          </nav>
          <div className='text-center p10'>
            <h2 className='text-4xl py-2 text-teal-500 font-medium md:text-6xl'>Fida Shnakher</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Frontend Developer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum cum laborum in sequi officia ab laboriosam tenetur mollitia reprehenderit maxime repudiandae, optio voluptatum, quas quasi dolore repellat enim explicabo quisquam!</p>
          </div>
          <div className='text-5xl flex justify-center gap-20 py-3 '>
           <a className='bg-gradient-to-r from-purple-400 to-teal-300 ' href="https://www.linkedin.com/in/fida-shnakher-0b0b4a1b5"><AiFillLinkedin /></a>
           <a className='bg-gradient-to-r from-purple-400 to-teal-300' href="https://github.com/fidashn"><AiFillGithub/></a>
          </div>

          <div className='relative mx-auto bg-gradient-to-r from-purple-400 to-teal-300 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image alt='' src={myPic} layout='fill' objectFit="cover" />
          </div>
          </section>

          <section>
            <div>
              <h3 className='text-3xl py-1 text-purple-400 mt-20 flex justify-center'>Technologies that I use</h3>
              <p className='text-md py-2 leading-8 text-gray-800 md:text-xl flex justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, <span className='text-teal-500 '>incidunt!</span> </p>
            </div>
            <div className=' flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <h3 className='text-purple-400 text-3xl py-1 mt-20  flex justify-center'>My Favorite Projects</h3>
              <div className='mt-10 lg:flex-col justify-center gap-10'>
                <div className='basis-1/3 flex-1'>
                  <a className='text-4xl text-purple-400' href="https://github.com/fidashn/virtual-bank"><span className='text-xl text-teal-500'>Repository</span> <AiFillGithub/></a>
                <a href="https://vir-bank-fi.netlify.app/"><span className='text-xl text-teal-500'>Demo</span><AiOutlineLink className=' text-3xl  text-purple-400'/></a><Image alt='' className='rounded-lg object-cover'  layout='responsive' src={bank}/></div>

                <div className='basis-1/3 flex-1'><a className='text-4xl text-purple-400' href="https://github.com/fidashn/to-do-list"><span className='text-xl text-teal-500'>Repository</span><AiFillGithub/></a>
                <a href="https://todosli.netlify.app/"><span className='text-xl text-teal-500'>Demo</span><AiOutlineLink className='text-4xl text-purple-400'/></a><Image alt='' className='rounded-lg object-cover' layout='responsive' src={todo}/></div>

                <div className='basis-1/3 flex-1'><a className='text-4xl text-purple-400' href="https://github.com/fidashn/dice-game1"><span className='text-xl text-teal-500'>Repository</span><AiFillGithub/></a>
                <a href="https://dice-game-f.netlify.app/"><span className='text-xl text-teal-500'>Demo</span><AiOutlineLink className='text-4xl text-purple-400'/></a><Image alt='' className='rounded-lg object-cover' layout='responsive' src={dice}/></div>

                <div className='basis-1/3 flex-1'><a className='text-4xl text-purple-400' href="https://github.com/fidashn/HOTEL_WEBSITE"><span className='text-xl text-teal-500'>Repository</span><AiFillGithub/></a>
                <a href="https://btm-hotel.netlify.app/"><span className='text-xl text-teal-500'>Demo</span><AiOutlineLink className='text-4xl text-purple-400'/></a><Image alt='' className='rounded-lg object-cover' layout='responsive' src={hotel}/></div>

                <div className='basis-1/3 flex-1'><a className='text-4xl text-purple-400' href="https://github.com/fidashn/landing-page"><span className='text-xl text-teal-500'>Repository</span><AiFillGithub/></a>
                <a href="https://amazing-shoes-fi.netlify.app/"><span className='text-xl text-teal-500'>Demo</span><AiOutlineLink className='text-4xl text-purple-400'/></a><Image alt='' className='rounded-lg object-cover' layout='responsive' src={shoes}/></div>
              </div>
            </div>
          </section>
      </main>
    </div>
  )
}

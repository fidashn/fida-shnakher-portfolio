import Head from 'next/head';
import { BsFillMoonStarsFill }from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub}from 'react-icons/ai';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Fida Shnakher|Frontend Developer</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Developed by</h1>
            <ul className='flex items-center'>
             <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
             <li><a className='bg-gradient-to-r from-purple-400 to-teal-300 text-white font-burtons px-8 py-2 rounded-3xl text-lg ml-8 ' href="../public/Fida-Sh-CV-FrontEnd.pdf">Resume</a></li> 
            </ul>
          </nav>
          <div>
            <h2>Fida Shnakher</h2>
            <h3>Frontend Developer.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, alias!</p>
          </div>
          <div>
           <a href="https://www.linkedin.com/in/fida-shnakher-0b0b4a1b5"><AiFillLinkedin /></a>
           <a href="https://github.com/fidashn"><AiFillGithub/></a>
          </div>
        </section>
      </main>

      <footer >
        
      </footer>
    </div>
  )
}

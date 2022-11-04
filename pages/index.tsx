import Head from 'next/head';
import { BsFillMoonStarsFill }from 'react-icons/bs';


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
            <h1>Fida Shnakher|Frontend Developer</h1>
            <ul className='flex items-center'>
             <li><BsFillMoonStarsFill/></li>
             <li><a href="../public/Fida-Sh-CV-FrontEnd.pdf">Resume</a></li> 
            </ul>
          </nav>
        </section>
      </main>

      <footer >
        
      </footer>
    </div>
  )
}

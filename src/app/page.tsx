import Image from 'next/image';
import GoogleLogo from '../../public/google.svg';
import Avatar from '../../public/avatar.jpg'
import ChloeQuijano from '../../public/chloe-quijano.jpeg'

export default function Home() {
  return (
   <main className='text-gray-900' >
    <nav className='fixed top-0 left-0 w-full bg-white text-gray-600 z-50 shadow-lg text-sm' >
      <div className='flex justify-between px-6  w-full h-[48px] border-b-1 border-borderGray' >
        <a className='my-auto' href="https://developers.google.com/">
          <Image className='' src={GoogleLogo} alt='Google_Logo' width={180} height={180} />
        </a>
        <div className='flex gap-10 ml-10 ' >
          <div className='relative pt-3.5 group ' >
            <button className=' group-hover:text-gray-900 ' >Products</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
          <div className='relative pt-3.5 group ' >
            <button className=' group-hover:text-gray-900 ' >Events</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
          <div className='relative pt-3.5 group ' >
            <button className=' group-hover:text-gray-900 ' >Community</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
          <div className='relative pt-3.5 group ' >
            <button className=' group-hover:text-gray-900 ' >More</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
          <div className='relative pt-3.5 group ' >
            <button className=' group-hover:text-gray-900 ' >Developer Profile</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
          <div className='relative pt-3.5 group ' >
            <button className=' group-hover:text-gray-900 ' >Blog</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
        </div>
        <div className='flex py-1 gap-4 '>
          <input className='border-none bg-slate-100 px-2 rounded-sm ' placeholder='Search' type="search" />
          <button className='border-1 hover:bg-slate-100 border-gray-300 rounded-[4px] px-3' >English</button>
          <div className='border-1 w-10 h-10 border-gray-300 rounded-full ' ></div>
          <Image src={Avatar} alt='A' width={40} height={40} className='border-1 border-gray-300 rounded-full' />
        </div>
      </div>
      <div className='flex px-6 gap-10 w-full h-[48px] ' >
        <div className='relative pt-3.5 group ' >
          <button className=' group-hover:text-gray-900 ' >About</button>
          <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
        </div>
        <div className='relative pt-3.5 group ' >
          <button className=' group-hover:text-gray-900 ' >Clubs</button>
          <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
        </div>
        <div className='relative pt-3.5 group ' >
          <button className=' group-hover:text-gray-900 ' >Leads</button>
          <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
        </div>
        <div className='relative pt-3.5 group ' >
          <button className=' group-hover:text-gray-900 ' >Community Guidline</button>
          <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
        </div>
        <div className='relative pt-3.5 group ' >
          <button className=' group-hover:text-gray-900 ' >Solution Challange</button>
          <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
        </div>
      </div>
    </nav>

      <div className='pt-5 mt-24 text-sm bg-[#d8eef9] text-center w-full h-[64px]' >
        <h3 className='text-[#0288d1]' >Learn new Google tools with your community. 
        <a className='font-bold' href="https://developers.google.com/community/devfest#find-a-devfest-community-near-you"
        >Find a DevFest near you!</a></h3>
      </div>

    <section className='px-6 ' >
      <div className='flex flex-col gap-5 text-center max-w-[630px] mx-auto my-24 ' >
        <h1 className='text-2xl ' >Google Developer Student Club</h1>
        <h2 className='text-lg' >Explore more than 1,500 college and university chapters across more than 100 countries. 
          Meet and learn with other budding developers and build solutions for local businesses and communities with 
          Google technology.
        </h2>
        <div className='flex gap-4 w-full  justify-center' >
          <a href="https://gdsc.community.dev/">
            <button className='border-1 px-5 py-[6px] rounded-[4px] text-sm 
              bg-[#1a73e8] borderbg-[#1a73e8] text-white hover:bg-[#1364ce]' >
                Join a Club
            </button>
          </a>
          <a href="https://developers.google.com/community/gdsc/leads">
            <button className='border-1 px-5 py-[6px] text-[#1364ce] border-gray-300 rounded-[4px] text-sm 
              bg-[#d8eef9] ' >
                Lead a Club
            </button>       
          </a>
        </div>
      </div>
      <div>
        <div className='flex justify-between gap-5 ' >
          <div>
            <h1 className='text-xl font-medium ' >Connect</h1>
            <h2 className=' text-gray-600 text-md mt-4 ' >Meet students interested in developer technologies at your college or university.
               All are welcome, including those with diverse backgrounds and different majors.</h2>
          </div>
          <div>
            <h1 className='text-xl font-medium ' >Learn</h1>
            <h2 className=' text-gray-600 text-md mt-4 ' >Learn about a range of technical topics and gain new skills through hands-on workshops,
               events, talks, and project-building activities online and in-person.</h2>
          </div>
          <div>
            <h1 className='text-xl font-medium ' >Grow</h1>
            <h2 className=' text-gray-600 text-md mt-4 ' >Apply new learnings to build great solutions for local problems. Advance your skills,
               career, and network. Give back to your community by helping others learn.</h2>
          </div>
        </div>   
      </div>
      <div className='flex mt-16 ' >
        <div className='flex-1 aspect-video ' >
          {/* <Image src='https://youtu.be/Jqf52nThBt0' alt='youtube video' width='100' height='100' ></Image> */}
        </div>
        <div className='flex-1 p-4 pt-10 text-center ' >
          <h1 className='text-xl font-semibold' >“Showing more representation in tech with GDSC greatly increases our confidence, innovation, and performance.
             Especially in academic environments, having a sense of belonging and community for students can lead to success
              in tech together.”
          </h1>
          <Image className='mx-auto rounded-full m-4 ' src={ChloeQuijano} alt="Chloe Quijano" width='50' height='50' />
          <p className='text-gray-600' >Chloe Quijano</p>
          <p className='text-gray-600' >GDSC Lead, University of Toronto</p>
        </div>
      </div>
    </section>
    <section>
      <div className='w-full mt-16 py-10 px-6 bg-[#1a73e8] ' >
        <div className='mx-auto text-center text-white w-[856px]' >
          <h1 className='font-semibold text-3xl ' >Our Community Guigelines</h1>
          <p className='mt-5' >Google is dedicated to providing a harassment-free and inclusive event experience for everyone regardless of gender identity and expression,
            sexual orientation, disabilities, neurodiversity, physical appearance, size, ethnicity, nationality, race, age, religion, or other protected category.
          </p>
          <a href="https://developers.google.com/community-guidelines">
            <button className='border-1 mx-auto mt-5 px-5 py-[6px] text-[#1364ce] rounded-[4px] text-sm bg-white hover:bg-[#d8eef9] ' >
              Read The Guidlines
            </button>
          </a>
        </div>
      </div>
    <div className='px-6' >
      <div className='mt-16'>
        <h1 className='text-2xl' >Stories from the community</h1>
        <div className='flex justify-between mt-4' >
          <h1 className='text-lg font-medium ' >Get inspired by the clever ways people are using Google technology.</h1>
          <div className='flex gap-4' >
          <a href="https://developers.google.com/community/gdsc/stories">
            <button className='border-1 px-5 py-[6px] rounded-[4px] text-sm 
              bg-[#1a73e8] borderbg-[#1a73e8] text-white hover:bg-[#1364ce]' >
                View more stories
            </button>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScaBvL2D6b7BJZ7jwtRrWIbXYGnFxSddIFC-0tHnCdgNVmMuA/viewform">
            <button className='border-1 px-5 py-[6px] text-[#1364ce] border-gray-300 rounded-[4px] text-sm bg-white hover:bg-[#d8eef9] ' >
                Submit your story
            </button>       
          </a>
        </div>
        </div>
      </div>
      <div className='mt-16'>

      </div>
    </div>
    </section>
   </main>
  )
}
// -&gt;
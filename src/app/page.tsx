import Image from 'next/image';
import GoogleLogo from '../../public/google.svg';
import Avatar from '../../public/avatar.jpg'
import ChloeQuijano from '../../public/chloe-quijano.jpeg'
import story1 from '../../public/gdsc-stories-1.jpeg'
import story2 from '../../public/gdsc-stories-2.png'
import story3 from '../../public/gdsc-stories-3.jpg'

export default function Home() {
  return (
   <main className='text-gray-900 font-Roboto border-borderGray ' >
    <nav className='fixed top-0 left-0 w-full bg-white text-gray-600 z-50 shadow-lg text-sm' >
      <div className='flex px-6  w-full h-12 border-b-1' >
        <a className='my-auto w-[180px] ' href="https://developers.google.com/">
          <Image className='' src={GoogleLogo} alt='Google_Logo' width={180} height={180} />
        </a>
        <div className='hidden gap-10 ml-10 w6:flex' >
          <div className='relative pt-3.5 group hidden w5:block' >
            <button className=' group-hover:text-gray-900 ' >Products</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
          <div className='relative pt-3.5 group hidden w4:block' >
            <button className=' group-hover:text-gray-900 ' >Events</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
          <div className='relative pt-3.5 group hidden w3:block ' >
            <button className=' group-hover:text-gray-900 ' >Learn</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
          <div className='relative pt-3.5 group ' >
            <button className=' group-hover:text-gray-900 ' >Community</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
          <div className='relative pt-3.5 group hidden w1:block' >
            <button className=' group-hover:text-gray-900 ' >Developer Profile</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
          <div className='relative pt-3.5 group hidden w2:block' >
            <button className=' group-hover:text-gray-900 ' >Blog</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
          <div className='relative pt-3.5 group block w1:hidden ' >
            <button className=' group-hover:text-gray-900 ' >More</button>
            <div className='absolute rounded-xl  rounded-b bottom-0 h-1 w-full transition-colors duration-200 group-hover:bg-gray-600  ' />
          </div>
        </div>
        <div className='flex absolute right-0 bg-white h-10 pr-6 my-1 gap-4 '>
          <input className='border-none bg-slate-100 px-2 rounded-sm hidden w6:block ' placeholder='Search' type="search" />
          <button className='border-1 hover:bg-slate-100 border-gray-300 rounded-[4px] px-3 hidden sm:block ' >English</button>
          <div className='border-1 w-10 h-10 border-gray-300 rounded-full ' ></div>
          <Image src={Avatar} alt='A' width={40} height={40} className='border-1 border-gray-300 rounded-full' />
        </div>
      </div>
      <div className='hidden px-6 gap-10 w-full h-12 w6:flex' >
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

      <div className='pt-5 mt-12 text-sm bg-lightBlue text-center w-full h-[64px] w6:mt-24 ' >
        <h3 className='text-[#0288d1]' >Learn new Google tools with your community. 
        <a className='font-bold underline ' href="https://developers.google.com/community/devfest#find-a-devfest-community-near-you"
        > Find a DevFest near you!</a></h3>
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
              bg-[#1a73e8] borderbg-[#1a73e8] text-white hover:bg-bltext-blue' >
                Join a Club
            </button>
          </a>
          <a href="https://developers.google.com/community/gdsc/leads">
            <button className='border-1 px-5 py-[6px] text-blue border-gray-300 rounded-[4px] text-sm 
              bg-lightBlue ' >
                Lead a Club
            </button>       
          </a>
        </div>
      </div>
      <div>
        <div className='flex flex-wrap md:flex-nowrap gap-6' >
          <div className='flex gap-6 max-sm:flex-wrap'>
            <div className='' >
              <h1 className='text-xl font-medium ' >Connect</h1>
              <h2 className=' text-gray-600 text-md mt-4 ' >Meet students interested in developer technologies at your college or university.
                All are welcome, including those with diverse backgrounds and different majors.</h2>
            </div >
            <div className=''>
              <h1 className='text-xl font-medium ' >Learn</h1>
              <h2 className=' text-gray-600 text-md mt-4 ' >Learn about a range of technical topics and gain new skills through hands-on workshops,
                events, talks, and project-building activities online and in-person.</h2>
            </div>
          </div>
          <div className=''>
            <h1 className='text-xl font-medium ' >Grow</h1>
            <h2 className=' text-gray-600 text-md mt-4 ' >Apply new learnings to build great solutions for local problems. Advance your skills,
               career, and network. Give back to your community by helping others learn.</h2>
          </div>
        </div>   
      </div>
      <div className='flex gap-6 mt-16 max-sm:flex-col ' >
        <div className='flex-1 ' >
        <div className='w-full aspect-video bg-black '></div>
        </div>
        <div className='flex-1 flex items-center text-center ' >
          <div>
            <h1 className='text-xl' >???Showing more representation in tech with GDSC greatly increases our confidence, innovation, and performance.
              Especially in academic environments, having a sense of belonging and community for students can lead to success
                in tech together.???
            </h1>
            <Image className='mx-auto rounded-full m-4 ' src={ChloeQuijano} alt="Chloe Quijano" width='50' height='50' />
            <p className='text-gray-600' >Chloe Quijano</p>
            <p className='text-gray-600' >GDSC Lead, University of Toronto</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='w-full mt-16 py-10 px-6 text-center text-white bg-[#1a73e8] ' >
          <h1 className=' text-3xl max-sm:text-xl ' >Our Community Guigelines</h1>
          <p className='mt-5' >Google is dedicated to providing a harassment-free and inclusive event experience for everyone regardless of gender identity and expression,
            sexual orientation, disabilities, neurodiversity, physical appearance, size, ethnicity, nationality, race, age, religion, or other protected category.
          </p>
          <a href="https://developers.google.com/community-guidelines">
            <button className='border-1 mx-auto mt-5 px-5 py-[6px] text-blue rounded-[4px] text-sm bg-white hover:bg-lightBlue ' >
              Read The Guidlines
            </button>
          </a>
      </div>
    <div className='px-6' >
      <div className='mt-16'>
        <h1 className='text-2xl' >Stories from the community</h1>
        <div className='flex justify-between mt-4' >
          <h1 className='text-lg font-medium ' >Get inspired by the clever ways people are using Google technology.</h1>
          <div className='flex gap-4' >
          <a href="https://developers.google.com/community/gdsc/stories">
            <button className='border-1 px-5 py-[6px] rounded-[4px] text-sm 
              bg-blue border-lightBlue text-white hover:bg-bltext-blue' >
                View more stories
            </button>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScaBvL2D6b7BJZ7jwtRrWIbXYGnFxSddIFC-0tHnCdgNVmMuA/viewform">
            <button className='border-1 px-5 py-[6px] text-blue border-gray-300 rounded-[4px] text-sm bg-white hover:bg-lightBlue ' >
                Submit your story
            </button>       
          </a>
        </div>
        </div>
      </div>
      <div className='grid grid-flow-col-dense gap-6 mt-10 w-full '>
        <div className='w-[100%] rounded-md border-1 border-gray-300 ' >
          <a href="https://developers.googleblog.com/2022/10/creating-stem-culture-on-campus-in-uganda.html">
            <Image src={story1} alt='Stories' width='100' height='100' className=' rounded-md w-full ' />
            <div className='flex flex-col p-3 justify-between min-h-[270px]' >
              <div>
                <h2 className='text-xs' >GOOGLE DEVELOPER STUDENT CLUBS</h2>
                <h1 className='text-2xl mt-2 text-blue' >Creating a STEM culture on campus in Uganda</h1>
              </div>
              <button className='border-1 px-5 text-blue border-gray-300 rounded-[4px] h-9 w-fit text-sm bg-white hover:bg-lightBlue ' >
                  Read Now
              </button>       
            </div>
          </a>
        </div>
        <div className='w-[100%] rounded-md border-1 border-gray-300 ' >
          <a href="https://developers.googleblog.com/2022/10/meet-rose-niousha-gdsc-waseda-founder-and-wtm-ambassador.html">
            <Image src={story2} alt='Stories' width='100' height='100' className=' rounded-md w-full ' />
            <div className='flex flex-col p-3 justify-between min-h-[270px]' >
              <div>
                <h2 className='text-xs' >GOOGLE DEVELOPER STUDENT CLUBS</h2>
                <h1 className='text-2xl mt-2 text-blue' >Meet Rose Niousha, GDSC Waseda Founder & WTM Ambassador</h1>
              </div>
              <button className='border-1 px-5 text-blue border-gray-300 rounded-[4px] h-9 w-fit text-sm bg-white hover:bg-lightBlue ' >
                  Read Now
              </button>       
            </div>
          </a>
        </div>
        <div className='w-[100%] rounded-md border-1 border-gray-300 ' >
          <a href="https://developers.googleblog.com/2022/08/gdsc-lead-in-islamabad-develops-proof-of-concept-android-application-to-prevent-counterfeiting.html?m=1">
            <Image src={story3} alt='Stories' width='100' height='100' className=' rounded-md w-full ' />
            <div className='flex flex-col p-3 justify-between min-h-[270px]' >
              <div>
                <h2 className='text-xs' >GOOGLE DEVELOPER STUDENT CLUBS</h2>
                <h1 className='text-2xl mt-2 text-blue' >GDSC Lead in Islamabad Develops Proof of Concept Android Application to Prevent Counterfeiting</h1>
              </div>
              <button className='border-1 px-5 text-blue border-gray-300 rounded-[4px] h-9 w-fit text-sm bg-white hover:bg-lightBlue ' >
                  Read Now
              </button>       
            </div>
          </a>
        </div>
      </div>
      <div className='flex mt-16 gap-6 max-sm:flex-col ' >
        <div className='flex-1 flex items-center' >
          <div>
            <h1 className='text-3xl' >Google Developer Student Clubs Leads </h1>
            <h1 className='text-gray-600 mt-6' >GDSC leads are passionate about helping their peers learn technology and connect.
            Leads pursue various degrees within undergraduate and graduate programs, but have foundational knowledge about software development.</h1>
            <h1 className='text-gray-600 mt-6' >Read the FAQ below for details on the application process.</h1>
            <button className='border-1 px-5 py-[6px] rounded-[4px] text-sm mt-6 
                bg-[#1a73e8] text-white hover:bg-bltext-blue' >
                  Lead a club
            </button>
          </div>
        </div>
        <div className='flex-1' >
          <div className='w-full aspect-video bg-black '></div>
          {/* <Image src='https://youtu.be/Jqf52nThBt0' alt='youtube video' width='100' height='100' ></Image> */}
          <h1 className='text-xs p-1 w-fit rounded-sm text-blue bg-lightBlue mt-6' >GOOGLE DEVELOPER STUDENT CLUBS </h1>
          <h1 className='text-2xl text-blue mt-6' >GDSC Spotlight: A conversation with GDSC lead, Dang Nguyen </h1>
          <button className='border-1 px-5 mt-10 text-blue border-gray-300 rounded-[4px] h-9 w-fit text-sm bg-white hover:bg-lightBlue ' >
                  Watch now
          </button>  
        </div>
      </div>
      <div className='mt-24 text-gray-600 '>
        <h1 className='text-2xl text-gray-800' >FAQs</h1>
        <div className='w-full mt-6 ' >
          <h2 className='border-b-1 text-blue  py-3' >Who should join Google Developer Student Clubs?</h2>
          <h2 className='border-b-1 py-3' >Who should join Google Developer Student Clubs?</h2>
        </div>
        <div className='w-full ' >
          <h2 className='border-b-1 text-blue  py-3' >Who should join Google Developer Student Clubs?</h2>
          <h2 className='border-b-1 py-3' >Who should join Google Developer Student Clubs?</h2>
        </div>
        <div className='w-full ' >
          <h2 className='border-b-1 text-blue  py-3' >Who should join Google Developer Student Clubs?</h2>
          <h2 className='border-b-1 py-3' >Who should join Google Developer Student Clubs?</h2>
        </div>
      </div>
    </div>
      <div className='w-full mt-36 py-10 bg-[#1a73e8] ' >
        <div className='flex flex-col w-full  justify-center text-center text-white' >
          <h1 className='text-3xl ' >Stay in touch</h1>
          <div className='flex mt-3 gap-3 mx-auto w-fit' >
            <a href="https://developers.google.com/community-guidelines">
              <button className='border-1 mx-auto mt-5 px-5 py-[6px] text-blue rounded-[4px] text-sm bg-white hover:bg-lightBlue ' >
                facebook
              </button>
            </a>
            <a href="https://developers.google.com/community-guidelines">
              <button className='border-1 mx-auto mt-5 px-5 py-[6px] text-blue rounded-[4px] text-sm bg-white hover:bg-lightBlue ' >
                facebook
              </button>
            </a>
            <a href="https://developers.google.com/community-guidelines">
              <button className='border-1 mx-auto mt-5 px-5 py-[6px] text-blue rounded-[4px] text-sm bg-white hover:bg-lightBlue ' >
                facebook
              </button>
            </a>
            <a href="https://developers.google.com/community-guidelines">
              <button className='border-1 mx-auto mt-5 px-5 py-[6px] text-blue rounded-[4px] text-sm bg-white hover:bg-lightBlue ' >
                facebook
              </button>
            </a>
            <a href="https://developers.google.com/community-guidelines">
              <button className='border-1 mx-auto mt-5 px-5 py-[6px] text-blue rounded-[4px] text-sm bg-white hover:bg-lightBlue ' >
                facebook
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='px-6 mt-6' >
        <div className='flex flex-wrap sm:flex-nowrap gap-6' >
            <div className='w-full flex flex-col gap-3 text-sm '>
              <h2 className='text-gray-600 text-base' >Connect</h2>
              <h3>Blog</h3>
              <h3>Facebook</h3>
              <h3>Medium</h3>
              <h3>Twitter</h3>
              <h3>Youtube</h3>          
            </div >
            <div className='w-full flex flex-col gap-3 text-sm '>
              <h2 className='text-gray-600 ' text-base>Programms</h2>
              <h3>Women Techmakers</h3>
              <h3>Google Developer Groups</h3>
              <h3>Google Developer Experts</h3>
              <h3>Accelerators</h3>
              <h3>Google Developer Student Clubs</h3>             
            </div>
            <div className='w-full flex flex-col gap-3 text-sm '>
              <h2 className='text-gray-600text-base' >Developer Consols</h2>
              <h3>Google API console</h3>
              <h3>Google Cloud console</h3>
              <h3>Google Play console</h3>
              <h3>Action on Google console</h3>
              <h3>Firebase console</h3>
              <h3>Cast SDK Developer console</h3>
              <h3>Chrome Web Store Dashboard</h3>
            </div>
        </div>  
        <div className='h-fit border-y-1 py-6 text-sm w-full md:h-20' >
          <div className=' flex gap-6 flex-col md:flex-row ' >
            <a className=' w-[180px] ' href="https://developers.google.com/">
              <Image className='' src={GoogleLogo} alt='Google_Logo' width={180} height={180} />
            </a>
            <ul className='flex my-auto gap-3 flex-col md:gap-6 md:flex-row' >
              <li><a href="https://developer.android.com/">Android</a></li>
              <li><a href="https://developer.chrome.com/home">Chrome</a></li>
              <li><a href="https://firebase.google.com/">Firebase</a></li>
              <li><a href="https://cloud.google.com/">Gougle Cloud Platform</a></li>
              <li><a href="https://developers.google.com/products">All Products</a></li>
            </ul>
          </div>
        </div> 
        <div className='flex items-center h-fit w-full py-6 text-sm md:h-20 ' >
          <div className='my-auto flex flex-col md:flex-row ' >
            <div className='flex h-fit' >
              <p className='px-2' >Terms</p>
              <div className='w-[1.1px] h-3 my-auto bg-gray-400' ></div>
              <p className='px-2' >Privacy</p>
            </div>
            <div className='flex float-right ' >
              <h2>Sign up for the Google Developers newsletter</h2>
              <button className='border-1 px-5 text-blue border-gray-300 rounded-[4px] h-9 w-fit text-sm bg-white hover:bg-lightBlue ' >
                  Watch now
              </button> 
              <a href="https://developers.google.com/community-guidelines">
                <button className='border-1 mx-auto mt-5 px-5 py-[6px] text-blue rounded-[4px] text-sm bg-white hover:bg-lightBlue ' >
                  facebook
                </button>
              </a>
            </div>
          </div>
        </div> 
      </div>
    </section>
   </main>
  )
}
// -&gt;
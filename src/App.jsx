import { GithubIcon, CodeXml, LayoutGrid, Dock } from 'lucide-react';
import './App.css';
import PricingSection from './pricingSection';


function App() {

  const WebDevskills = [
    { name: 'HTML', progress: 95 },
    { name: 'CSS', progress: 93 },
    { name: 'JavaScript', progress: 90 },
    { name: 'React', progress: 89 },
    { name: 'Next', progress: 79 },
    { name: 'Tailwind', progress: 93 },
    { name: 'Bootstrap', progress: 92 },
    { name: 'Figma', progress: 90 },
    // { name: 'C', progress: 94 },
    // { name: 'C++', progress: 87 },
    // { name: 'Java', progress: 78 },
    // { name: 'Python', progress: 70 },
  ];

  const mobileDevSkills = [
    { name: "Kotlin", progress: 86 },
    { name: "Jetpack", progress: 89 },
    { name: "Flutter", progress: 96 },
    { name: "Dart", progress: 82 },
    { name: "XML", progress: 78 },
  ]

  const otherSkills = [
    { name: "API", progress: 86 },
    { name: "VS CODE", progress: 89 },
    { name: "C", progress: 96 },
    { name: "C++", progress: 82 },
    { name: "Java", progress: 81 },
    { name: "Python", progress: 78 },
    { name: "DSA", progress: 70 },
    { name: "GIT", progress: 78 },
  ]


  return (
    <div>

      {/* Navbar */}
      <div className='navbar p-8 bg-slate-100 flex justify-between'>
        <span className='font-[800] text-4xl text-slate-700'>Portfolio</span> {/* Heading Text */}

        {/* Heading Links */}
        <div className='text-2xl'>
          <a href="#home" className='hover:text-blue-600 font-[500] transition duration-150'>Home</a>
          <a href="#about" className='ml-6 hover:text-blue-600 font-[500] transition duration-150'>About</a>
          <a href="#skills" className='ml-6 hover:text-blue-600 font-[500] transition duration-150'>Skills</a>
          <a href="#services" className='ml-6 hover:text-blue-600 font-[500] transition duration-150'>Services</a>
          <a href="#projects" className='ml-6 hover:text-blue-600 font-[500] transition duration-150'>Projects</a>
          <a href="#pricing" className='ml-6 hover:text-blue-600 font-[500] transition duration-150'>Pricing</a>
        </div>

        <div>
          <div className='border rounded-full cursor-pointer'>
            <a href="https://github.com/DivyanshMauryaaa"><GithubIcon /></a>
          </div>
        </div>

      </div>


      {/* Section 1: Home */}

      <div className='border-b'>
        <div id="home" className='flex justify-between'>
          <div className='w-[50%]'>

            <div className='ml-[20%] mt-[25%] text-[70px] font-[600]'>
              Hi, I am
              <p className='text-blue-700 font-[700]'>Divyansh Maurya</p>
            </div>
            <div className='ml-[20%] text-slate-400'>
              <p>
                Hi, I am Divyansh, A young and aspiring coder. Have an ability to <br />
                complete your projects faster and efficiently. Has the power to <br />
                <span>Bring your ideas to life!</span>
              </p>
            </div>
            <br />

            <div className="call-to-actions flex justify-center gap-6 mr-[340px]">
              <a href=""><button className='p-4 bg-blue-700 hover:bg-blue-800 text-white rounded flex text-lg transition-all duration-150 px-6'>Hire Me</button></a>
              <a href="#about"><button className='flex text-lg transition-all duration-150 mt-3 ml-2 hover:text-slate-400'>Know more</button></a>
            </div>

          </div>

          <div className='h-[840px] w-[50%] bg-blue-500 justify-center overflow-hidden'>
            <img src="/heroImage.png" alt="Divyansh Maurya" className='ml-[30%] mt-[20%] h-[700px]' />
          </div>
        </div>
      </div>

      <br /><br />

      {/* Section 2: About */}
      <div className='About border-b' id='about'>
        <center><p className='text-[70px] font-[700] text-slate-700'><span className='text-blue-700'>About </span>me</p></center>

        <br /><br />

        <div className='flex gap-10 justify-center'>

          <div className='border shadow-lg h-[200px] w-[400px] rounded-lg'>
            <div className='mt-[10%] ml-[30%] mr-[30%]'>
              <p className="text-[60px] font-[800] text-blue-700">12,00+</p>
              <p><center>Projects completed</center></p>
            </div>
          </div>

          <div className='border shadow-lg h-[200px] w-[400px] rounded-lg'>
            <div className='mt-[10%] ml-[30%] mr-[30%]'>
              <p className="text-[60px] font-[800] text-blue-700">1,500+</p>
              <p><center>Happy Clients</center></p>
            </div>
          </div>

          <div className='border shadow-lg h-[200px] w-[400px] rounded-lg'>
            <div className='mt-[10%] ml-[30%] mr-[30%]'>
              <p className="text-[60px] font-[800] text-blue-700">1,200+</p>
              <p><center>Great Skills</center></p>
            </div>
          </div>

          <div className='border shadow-lg h-[200px] w-[400px] rounded-lg'>
            <div className='mt-[10%] ml-[30%] mr-[30%]'>
              <p className="text-[60px] font-[800] text-blue-700">1,200+</p>
              <p><center>Projects completed</center></p>
            </div>
          </div>

        </div>

        <br /><br /><br />

        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 flex justify-around">
          <div className="flex justify-center mb-4">
            {/* Replace with your image URL */}
            <img src="/heroImage2.jpg" alt="Profile" className="w-[400px] h-[600px] rounded-sm ml-32" />
          </div>
          <div className="info mr-10">
            <h2 className="text-4xl font-bold mb-2 mt-12 text-slate-700">About <span className='text-blue-700'>Me</span></h2>
            <p className="text-lg mb-4 text-slate-400">
              A passionate web and mobile app developer.
            </p>
            <ul className="list-none mb-4">
              <li className="mb-2">
                <p className="font-bold text-lg">Name: Divyansh Maurya </p>
              </li>
              <li className="mb-2">
                <p className="font-bold text-lg">Date of birth: July 8, 2008</p>
              </li>
              <li className="mb-2">
                <p className="font-bold text-lg">Address: Lucknow, Uttar Pradesh, India </p>
              </li>
              <li className="mb-2">
                <p className="font-bold text-lg">Zip code: 226028      </p>
              </li>
              <li className="mb-2">
                <p className="font-bold text-lg">Email: <a href="mai</p>lto:divyanshm510@gmail.com">divyanshm510@gmail.com</a> </p>
              </li>
              <li className="mb-2">
                <p className="font-bold text-lg">Phone: <a href="tel:+919696656168">+91-969-665-6168</a> </p>
              </li>
            </ul>
            <div className="project-count text-lg mb-4">
              100 Project complete
            </div>
            <button className="bg-blue-700 hover:bg-blue-800 text-white p-5 rounded">
              Download CV
            </button>
          </div>
        </div>

      </div>

      <br /><br /><br />

      <div id="skills" className='border-b'>
        <div>
          <center><p className='text-[70px] font-[700] text-slate-700'>My <span className='text-blue-700'>Skills</span></p></center>

          <br /><br />

          <div className='skillsContainer px-16'>
            <div className='justify-between'>

              <div className="container mx-auto px-4 py-8">
                <h2 className="text-[44px] font-bold mb-4">🌐 Web Development</h2>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {WebDevskills.map((skill) => (
                    <SkillItem key={skill.name} name={skill.name} progress={skill.progress} /> // Pass props to SkillItem
                  ))}
                </div>
              </div>

              <br /><br />

              <div className="container mx-auto px-4 py-8">
                <h2 className="text-[44px] font-bold mb-4">📱 Mobile Development</h2>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mobileDevSkills.map((skill) => (
                    <SkillItem key={skill.name} name={skill.name} progress={skill.progress} /> // Pass props to SkillItem
                  ))}
                </div>
              </div>

              <div className="container mx-auto px-4 py-8">
                <h2 className="text-[44px] font-bold mb-4">Others</h2>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {otherSkills.map((skill) => (
                    <SkillItem key={skill.name} name={skill.name} progress={skill.progress} /> // Pass props to SkillItem
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <br /><br /><br />

      {/* Services section */}
      <div id='services' className='p-10'>

        {/* Services section heading */}
        <center><p className='text-xl text-blue-700 font-semibold'>Services</p></center>
        <center><p className='text-[70px] font-[700] text-slate-700'>What I <span className='text-blue-700'>do?</span></p></center>
        <br /><br /><br />

        {/* Services */}
        <div className='flex flex-wrap justify-between'>

          <div className='border hover:bg-blue-700 transition-all duration-150 hover:text-white h-[400px] w-[600px] cursor-pointer'>
            <center className='my-[24%]'>
              <LayoutGrid size={30} />
              <p className='text-[22px] font-semibold'>App Development</p>
              <p className='text-slate-300'>Great Personal and enterprise level mobile applications development <br /> services</p>
            </center>
          </div>


          <div className='border hover:bg-blue-700 transition-all duration-150 hover:text-white h-[400px] w-[600px] cursor-pointer'>
            <center className='my-[24%]'>
              <CodeXml size={30} />
              <p className='text-[22px] font-semibold'>Web Development</p>
              <p className='text-slate-300'>Great Personal and enterprise level web applications and Web development <br /> services</p>
            </center>
          </div>


          <div className='border hover:bg-blue-700 transition-all duration-150 hover:text-white h-[400px] w-[600px] cursor-pointer'>
            <center className='my-[24%]'>
              <Dock size={30} />
              <p className='text-[22px] font-semibold'>UI/UX Design</p>
              <p className='text-slate-300'>Great Elegeant and beautful level UI/UX design <br /> services</p>
            </center>
          </div>

        </div>

      </div>

      <br /><br /><br /><br />

      <div id='projects' className='p-10'>

        {/* projects section heading */}
        <center><p className='text-xl text-blue-700 font-semibold'>Projects</p></center>
        <center><p className='text-[70px] font-[700] text-slate-700'>My <span className='text-blue-700'>Works</span></p></center>
        <br /><br /><br />

        {/* projects */}
        <div className='flex flex-wrap justify-between'>

          <div className='border h-[480px] w-[600px]'>
            <center className='p-4'>
              <img src="https://private-user-images.githubusercontent.com/67959015/317983098-f09a8421-67d3-45ce-b9bc-a791cdc2774b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc4MzcxNjAsIm5iZiI6MTcxNzgzNjg2MCwicGF0aCI6Ii82Nzk1OTAxNS8zMTc5ODMwOTgtZjA5YTg0MjEtNjdkMy00NWNlLWI5YmMtYTc5MWNkYzI3NzRiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjA4VDA4NTQyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ3ODZkOWViZTM3YjJmNzgyOTgxNTFiZTU4YWRlMWEyNzdlNTZlYjFlMDI0YWVlNDY3ZTEwMGMwZmY0M2NiNjEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.7fUNJthPc5jlnw7Z8L-wBxTPyIX3jh-_Mg2XZM5JORY"
                alt="Image"
                className='w-full h-[240px]' />
              <br />
              <p className='text-[22px] font-semibold'>Nexus meet | Meeting App</p>
              <p className='text-slate-500'>
                Meeting app, where you can stay organised, create, schedule and join meetings. <br />
                comes with a minimalistic and Elegeant UI.
              </p>
              <br />
              <a href="https://github.com/DivyanshMauryaaa/Nexus-Meet/tree/master">
                <button className='p-4 hover:bg-blue-700 border w-full rounded-md hover:text-white transition-all duration-150'>View Source code</button>
              </a>
            </center>
          </div>


          <div className='border h-[480px] w-[600px]'>
            <center className='p-4'>
              <img src="/imageProject2.png"
                alt="Image"
                className='w-full h-[240px] rounded' />
              <br />
              <p className='text-[22px] font-semibold'>Netflix landing page</p>
              <p className='text-slate-500'>
                Netflix landing page, remade in HTML, CSS, and javascript. <br />
                with everything Netflix landing page has...
              </p>
              <br />
              <a href="https://github.com/DivyanshMauryaaa/Netflix-landingPage">
                <button className='p-4 hover:bg-blue-700 border w-full rounded-md hover:text-white transition-all duration-150'>View Source code</button>
              </a>
            </center>
          </div>

          <div className='border h-[480px] w-[600px]'>
            <center className='p-4'>
              <img src="https://private-user-images.githubusercontent.com/67959015/317983098-f09a8421-67d3-45ce-b9bc-a791cdc2774b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc4MzcxNjAsIm5iZiI6MTcxNzgzNjg2MCwicGF0aCI6Ii82Nzk1OTAxNS8zMTc5ODMwOTgtZjA5YTg0MjEtNjdkMy00NWNlLWI5YmMtYTc5MWNkYzI3NzRiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjA4VDA4NTQyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ3ODZkOWViZTM3YjJmNzgyOTgxNTFiZTU4YWRlMWEyNzdlNTZlYjFlMDI0YWVlNDY3ZTEwMGMwZmY0M2NiNjEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.7fUNJthPc5jlnw7Z8L-wBxTPyIX3jh-_Mg2XZM5JORY"
                alt="Image"
                className='w-full h-[240px]' />
              <br />
              <p className='text-[22px] font-semibold'>Nexus meet | Meeting App</p>
              <p className='text-slate-500'>
                Meeting app, where you can stay organised, create, schedule and join meetings. <br />
                comes with a minimalistic and Elegeant UI.
              </p>
              <br />
              <a href="https://github.com/DivyanshMauryaaa/Nexus-Meet/tree/master">
                <button className='p-4 hover:bg-blue-700 border w-full rounded-md hover:text-white transition-all duration-150'>View Source code</button>
              </a>
            </center>
          </div>

        </div>

      </div>

      <br /><br /><br />

      <div id='pricing' className='p-10'>

        {/* pricing section heading */}
        <center><p className='text-xl text-blue-700 font-semibold'>Pricing</p></center>
        <center><p className='text-[70px] font-[700] text-slate-700'><span className='text-slate-700'>Pricing</span></p></center>
        <br /><br /><br />

        {/* pricing */}
        <div className=''>

          <PricingSection />

        </div>

      </div>

      <br /><br /><br /><br />      <br /><br /><br /><br />

    </div>
  )
}

export default App;

const SkillItem = ({ name, progress }) => {
  return (
    <div className="flex items-center mb-4">
      <span className="mr-4 text-lg font-medium">{name}</span>
      <div className="w-full bg-gray-300 rounded-full overflow-hidden h-3">
        <div className="h-full bg-blue-700 rounded-l-full rounded-r-full" style={{ width: `${progress}%` }} />
      </div>
      <span className="ml-2 text-sm font-medium">{progress}%</span>
    </div>
  );
};

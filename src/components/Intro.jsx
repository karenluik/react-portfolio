import React from 'react';
import { FaGithub } from 'react-icons/fa';

const iconStyle = {color: '#5b446a', fontSize:'45px'}; //styling for icon
function Intro() {
  return(
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 mb-10">
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>{'<'}KarenG{' />'}</h1>
      <p className='text-base md:text-xl mb-3 font-medium'>Web Developer</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>I'm a developer that began her journey as self-taught back in 2021 before venturing into getting my official degree. I'm very passionate
        about technology and I love learning new things.
      </p>
      <a href="https://github.com/karenluik" target="_blank" style={iconStyle}><FaGithub className="githubIcon" /></a>
    </div>
  )
}

export default Intro;
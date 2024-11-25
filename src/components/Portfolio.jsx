import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';
function Portfolio() {
  return(
    <>
    <div className='mt-20 p-2 text-center'><Title>Projects</Title></div>
    <div className='flex flex-col md:flex-row items-center justify-center mb-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {portfolio.map(project=>(
          <PortfolioItem
            image={project.image}
            title={project.title}
            url={project.url}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Portfolio;
import React from 'react';

function Title({children, id}) {
  return(
    <h1 id={id  && id} className='section-title text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-strone-000'>{children}</h1>
  )
}

export default Title;
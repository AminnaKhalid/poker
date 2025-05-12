import React from 'react'

const Heading = ({headingname}) => {
  return (
    <>
      <div className="md:text-2xl lg:text-3xl font-medium leading-30px family-roboto text-[#020202] border-b-1 border-[#E4E4E4] p-4 text-center md:text-start">
         {headingname}
      </div>
    </>
  );
}

export default Heading
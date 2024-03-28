import TeamInfo from '@/components/cards/TeamInfo';
import React from 'react'

const page = async ({params}) => {
    const id = params.id;
    console.log(id);
  
  return (
    <div>
      <TeamInfo />
    </div>
  )
}

export default page

import React from 'react'
import Button from './Button'

const userLikableTopics = ["All", "News", "Gaming", "Stocks", "Cricket","AI","React","Angular","Javascript","Blockchain","Spring","Devops","Jenkins"];
const ButtonList = () => {
  return (
    <div className='flex flex-nowrap'>
      {userLikableTopics.map((topic,index) => <Button key={index} name={topic} />)}
    </div>
  )
}

export default ButtonList;
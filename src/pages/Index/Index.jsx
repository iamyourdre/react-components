import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa6";


const Index = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <a href="http://github.com/iamyourdre" className='animate-bounce avatar online'>
        <FaGithub className='text-6xl inline'/>
      </a>
      <p className='text-3xl font-extrabold'>
        {'<'}
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            'Hello',
            1000,
            'HelloWorld',
            2000,
            'Page404',
          ]}
          speed={30}
          style={{ fontSize: '1em' }}
          repeat={Infinity}
        />
        {'/>'}
      </p>
      <p className='font-medium'>The Homepage are under development, hehe!</p>
    </div>
  )
}

export default Index
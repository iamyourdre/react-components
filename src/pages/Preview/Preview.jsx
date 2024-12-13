import React from 'react'
import { Outlet, useParams } from 'react-router'
import CodeBox from './CodeBox';

const Preview = () => {
  const name = useParams().name;
  return (
    <>
      <CodeBox/>
    </>
  )
}

export default Preview
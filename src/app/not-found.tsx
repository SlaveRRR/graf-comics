import React from 'react'
import { NextPage } from 'next'


const ErrorPage : NextPage = () => {
  return (
      <div className="container" style={{
        paddingTop:'120px'
      }}>
      <h2 style={{color: '#7A5AF8',fontWeight:'600',fontSize:'3.42rem',textAlign:'center',marginBottom:'5px'}}>404</h2>
        <p style={{color:'#7A5AF8',fontWeight:'600',fontSize:'1.42rem',textAlign:'center',lineHeight: '24px'}}>такой страницы не существует :&#40;</p>
      </div>


  )
}

export default ErrorPage



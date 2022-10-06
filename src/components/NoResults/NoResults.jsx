import React from 'react'
import styled from 'styled-components'
import "./styles.NoResults.css"



const NoResults =() => {
  return (
    <div className='noResultsContainer'>
    <ImageNoResults src="https://media.tenor.com/vyHkpUjxjWYAAAAM/hug-me-im-sad.gif" alt="" />
    <ImportantText>
        Sorry, we couldn't find any results... :(
    </ImportantText>
    </div>
  )
}
export default NoResults

const ImportantText = styled.h1`
font-family: Poppins;
font-weight: 700;
color: #fff;
`

const ImageNoResults = styled.img`
width: 220px;
height: 220px;
`
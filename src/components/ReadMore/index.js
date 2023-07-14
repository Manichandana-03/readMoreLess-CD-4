// Write your code here

import {useState} from 'react'

import {
  MainContainer,
  HooksContainer,
  Heading,
  Tagline,
  ReactImg,
  Button,
  Description,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  console.log(reactHooksDescription)

  const [isReadMore, setReadMore] = useState(false)

  const toggleReadMore = () => {
    setReadMore(prevState => !prevState)
  }

  return (
    <MainContainer>
      <HooksContainer>
        <Heading>React Hooks</Heading>
        <Tagline>Hooks are a new addition to React</Tagline>
        <ReactImg
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>
          {isReadMore
            ? reactHooksDescription
            : reactHooksDescription.slice(0, 170)}
        </Description>
        <Button type="button" onClick={toggleReadMore}>
          {isReadMore ? 'Read Less' : 'Read More'}
        </Button>
      </HooksContainer>
    </MainContainer>
  )
}

export default ReadMore

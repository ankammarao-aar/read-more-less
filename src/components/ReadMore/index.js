// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  Heading,
  Text,
  Image,
  CardContainer,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [content, setContent] = useState(false)

  const onClickText = () => {
    setContent(prev => !prev)
  }

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Text>Hooks are a new addition to React</Text>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
        alt="react hooks"
      />

      <CardContainer>
        {content ? (
          <Description>{reactHooksDescription}</Description>
        ) : (
          <Description>{reactHooksDescription.slice(0, 170)}</Description>
        )}
        <Button type="button" onClick={onClickText}>
          Read {content ? 'Less' : 'More'}
        </Button>
      </CardContainer>
    </MainContainer>
  )
}

export default ReadMore

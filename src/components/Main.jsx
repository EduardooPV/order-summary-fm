import styled from 'styled-components'

import Card from './Card'
import Background from '../images/pattern-background-desktop.svg'

const Container = styled.main`
  margin: 0 auto;
  padding: 20px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: hsl(225, 100%, 94%);
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: contain;

  @media(min-width: 1440px) {
    background-position: 0 -100px;
  }
`

export default function Main() {
  return (
    <Container>
      <Card />
    </Container>
  )
}
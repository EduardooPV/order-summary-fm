import styled from 'styled-components'

import Card from './Card'
import Footer from './Footer'

const Container = styled.main`
  margin: 0 auto;
  padding: 20px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: hsl(225, 100%, 94%);
`

export default function Main() {
  return (
    <Container>
      <Card />

      <Footer />
    </Container>
  )
}
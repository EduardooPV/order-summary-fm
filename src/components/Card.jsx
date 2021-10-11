import styled from 'styled-components'
import Logo from '../images/illustration-hero.svg';
import Music from '../images/icon-music.svg';

const Container = styled.section`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  @media(min-width: 769px) {
    height: 100vh;
  }
`

const ContainerCard = styled.div`
  background: hsl(225, 100%, 98%);
  border-radius: 20px;
  z-index: 2;
  @media(min-width: 769px) {
    width: 450px;
  }
`

const ContainerImage = styled.div`
  img {
    display: block;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`

const ContainerDescription = styled.div`
  margin: 2.5rem 2rem 0 2rem;
  text-align: center;

  @media(min-width: 769px) {
    margin: 2.5rem 2.5rem 0 3rem;
  }
`

const Title = styled.h1`
  margin-bottom: 1.5rem;

  color: hsl(223, 47%, 23%);
  font-size: 1.7rem;
  font-weight: 900;
  font-family: RedHatDisplayBold;

  @media(min-width: 769px) {
      margin-bottom: 1.2rem;
  }
`

const Description = styled.p`
  color:hsl(224, 23%, 55%);
  font-family: RedHatDisplay;
  line-height: 22px;
`

const ContainerPlan = styled.div`
  margin-top: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  div span {
    font-family: RedHatDisplayBold;
  }

  a {
    font-family: RedHatDisplayBold;
  }

  a:hover {
    text-decoration: none;
    color: #756BF0;
  }

  @media(min-width: 769px) {
    margin-top: 2rem;
    padding: 1rem;

    background: #8d85e411;
    border-radius: 10px;
  }
`

const ContainerButtons = styled.div`
  margin: 2.5rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    width: 100%;
    padding: 1rem 0;

    text-decoration: none;
    font-family: RedHatDisplayBold;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
  }

    a:first-child {
      background: hsl(245, 75%, 52%);
      color: hsl(225, 100%, 98%);

      box-shadow: 0px 5px 10px  hsla(222.54545454545453, 47.008547008547005%, 22.941176470588236%, 0.404);
    }

      a:first-child:hover {
        background: #756BF0;
      }
    
    a:last-child {
      margin: 1rem 0;
      color: hsl(224, 23%, 55%);
    }

      a:last-child:hover {
        color: #000;
      }

    @media(min-width: 769px) {
      margin: 2rem 0 0 0;
  }
`

export default function Card() {
  return (
    <Container>
      <ContainerCard>
        <ContainerImage>
          <img src={Logo} alt="Imagem princial" />
        </ContainerImage>

        <ContainerDescription>
          <Title>
            Order Summary
          </Title>

          <Description>
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </Description>

          <ContainerPlan>
            <div>
              <img src={Music} alt="Icone de música" aria-hidden="true" />

              <div>
                <span>
                  Annual Plan
                </span>
                <Description>
                  $59.99/year
                </Description>
              </div>
            </div>

            <a href="#">Change</a>

          </ContainerPlan>

          <ContainerButtons>
            <a href="#">Proceed to Payment</a>

            <a href="#">Cancel Order</a>
          </ContainerButtons>

        </ContainerDescription>
      </ContainerCard>
    </Container>
  )
}

// Order Summary

// You can now listen to millions of songs, audiobooks, and podcasts on any 
// device anywhere you like!

// Annual Plan
// $59.99/year

// Change

// Proceed to Payment
// Cancel Order

// <div class="attribution">

// </div>
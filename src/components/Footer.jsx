import styled from "styled-components";

const FooterContainer = styled.footer`
  margin: 2rem 0 1rem 0;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterContainer>
      <p>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      </p>
      <p>
        Coded by <a href="https://github.com/EduardooPV">Luiz Eduardo Prado Veltroni</a>.
      </p>
    </FooterContainer>
  )
}
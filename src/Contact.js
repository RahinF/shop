import React from "react";
import { Container, StyledH2, Paragraph } from "./globalStyles";
import styled from "styled-components";
import Button from "./Button";
import { fonts } from "./theme";
import LazyImage from "./LazyImage";
import contactImage from "./assets/contact-image.jpg";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  button {
    align-self: center;
  }
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 50%;
  gap: 10%;
`;

const Input = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
  background: none;
  border-bottom: 2px solid #7b7878;
  font-family: ${fonts["text"]};
  padding: 1rem 0;

  &:focus-within {
    border-bottom: 2px solid #f649ce;
  }
`;

const TextArea = styled.textarea`
  border: 2px solid #7b7878;
  background: none;
  font-family: ${fonts["text"]};
  font-size: 1rem;
  padding: 1rem;
  height: 250px;
`;

function Contact() {
  return (
    <Container>
      <StyledH2>Contact Us</StyledH2>

      <FormContainer>
        
        <LazyImage height='770' width='540' src={contactImage} alt="..." />

        <div>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            repudiandae, magnam a corrupti modi obcaecati!
          </Paragraph>

          <StyledForm>
            <Input type="text" placeholder="title" />
            <Input type="email" placeholder="your email address" />
            <TextArea placeholder="your message to us"></TextArea>
            <Button text="Submit" size="lg" />
          </StyledForm>
        </div>
      </FormContainer>
    </Container>
  );
}

export default Contact;

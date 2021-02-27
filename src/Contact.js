import React from "react";
import { Container, StyledH2, Paragraph } from "./globalStyles";
import styled from "styled-components";
import Button from "./Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  display: flex;
`;

function Contact() {
  return (
    <Container>
      <div>
        <StyledH2>Contact Us</StyledH2>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          repudiandae, magnam a corrupti modi obcaecati!
        </Paragraph>
      </div>

      <FormContainer>
        <div>image</div>

        <StyledForm>
          <input type="text" placeholder="title" />
          <input type="email" placeholder="your email address" />
          <textarea placeholder="your message to us"></textarea>
          <Button text="Submit" />
        </StyledForm>
        
      </FormContainer>
    </Container>
  );
}

export default Contact;

import React from 'react';
import { css } from 'emotion';
import { useForm } from "react-hook-form";
import contactImage from "../../../images/contact.svg"
import {
  Container,
  BorderTitle,
  ContainerInner,
  LeftConatainer,
  FormContainer,
  InputGroup,
  Label,
  TextInput,
  InputText,
  TextContainer,
  ButtonSend,
  Errors
} from './styles';

const ContactView = () => {
  const { handleSubmit, watch, register, errors } = useForm();
  const onSubmit = values => console.log(values);
  const watchAllFields = watch();

  return (
    <Container>
      <BorderTitle id="contact">Contact Us</BorderTitle>
      <ContainerInner>
        <LeftConatainer>
          <h1>Let's talk about everything!</h1>
          <h6>Don't like forms? Send us an <a href="mailto:spectacleclean@gmail.com">email</a></h6>
          <img src={contactImage} alt="contact info" />
        </LeftConatainer>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Label htmlFor="fullname" className={css`
              color: ${errors.name ? '#ff5ecf' : '#7a7a7a'};
            `}
            >
              Full Name
            </Label>
            <TextInput>
            <InputText
              id="fullname"
              type="text"
              placeholder="Full name"
              name="name"
              ref={register({
                required: "This field is Required",
              })}
              />
              <span className="focus-border">
                <i></i>
              </span>
              </TextInput>
            {errors.name && <Errors>{errors.name.message}</Errors>}
          </InputGroup>
          <InputGroup>
            <Label
              htmlFor="phone" 
              className={css`
                color: ${errors.phoneNumber ? '#ff5ecf' : '#7a7a7a'};
              `}
            >
              Phone Number
            </Label>
            <TextInput>
            <InputText
              id="phone"
              type="tel"
              placeholder="Phone number"
              name="phoneNumber"
              ref={register({
                required: "This field is Required",
              })}
              />
              <span className="focus-border">
                <i></i>
              </span>
              </TextInput>
              {errors.phoneNumber && <Errors>{errors.phoneNumber.message}</Errors>}
          </InputGroup>
          <InputGroup>
            <Label
              htmlFor="email"
              className={css`
                color: ${errors.email ? '#ff5ecf' : '#7a7a7a'};
              `}
            >
              Email
            </Label>
            <TextInput>
            <InputText
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              ref={register({
                required: "This field is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                }
              })}
            />
              <span className="focus-border">
                <i></i>
              </span>
              </TextInput>
              {errors.email && <Errors>{errors.email.message}</Errors>}
          </InputGroup>
          <InputGroup>
            <Label
              htmlFor="message"
              className={css`
                color: ${errors.message ? '#ff5ecf' : '#7a7a7a'};
              `}
            >
              Message
            </Label>
            <TextInput>
              <TextContainer
                id="message"
                wrap="off"
                cols="30"
                rows="5"
                placeholder="Leave a message here..."
                name="message"
                ref={register({
                  required: "This field is Required",
                })}
              />
              <span className="focus-border">
                <i></i>
              </span>
            </TextInput>
            {errors.message && <Errors>{errors.message.message}</Errors>}
          </InputGroup>
          <ButtonSend type="submit">Send</ButtonSend>
        </FormContainer>
      </ContainerInner>
    </Container>
  )
}

export default ContactView;
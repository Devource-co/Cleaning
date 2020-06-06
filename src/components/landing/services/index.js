import React from 'react';
import {
  Container,
  BorderTitle,
  ListServices,
  Service,
  Content,
  ServiceDetails,
  ServiceTitle,
  Icon
} from './styles';
import data from '../../../data/services.data';

const ServicesView = () => {
  return (
    <Container>
      <BorderTitle id="services">Our Services</BorderTitle>
      <ListServices>
        {data.map(({ index, title, content, description, icon }) => (
        <ServiceItem
        key={index}
        icon={icon}
        title={title}
        content={content}
        description={description}
        />)
        )}
      </ListServices>
    </Container>
  )
}

const ServiceItem = ({ title, description, icon }) => {
  return (
    <Service>
      <ServiceDetails>
        <ServiceTitle><Icon>{icon}</Icon><h2>{title}</h2></ServiceTitle>
        <Content>{description}</Content>
      </ServiceDetails>
    </Service>
  )
}

export default ServicesView;

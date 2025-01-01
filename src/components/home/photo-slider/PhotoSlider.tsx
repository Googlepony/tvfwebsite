import React from 'react';
import Slider from 'react-slick';
import { Container } from '../../common/Container';
import { Section } from '../../common/Section';
import { SlideItem } from './SlideItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    caption: 'Healthcare Camp 2024',
  },
  {
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    caption: 'Education Initiative',
  },
  {
    url: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    caption: 'Women Empowerment Workshop',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

export function PhotoSlider() {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Action</h2>
        <Slider {...sliderSettings}>
          {photos.map((photo, index) => (
            <SlideItem key={index} {...photo} />
          ))}
        </Slider>
      </Container>
    </Section>
  );
}
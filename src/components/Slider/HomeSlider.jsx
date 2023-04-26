import React, { Component } from "react";
import Slider from "react-slick";
import SearchInput from "../SearchInput/SearchInput";
import "./HomeSlider.css"
export default class HomeSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        arrows: false,
      };
      return (
        <div className="slider">
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <div className="description">
          <div className="text-description">
            <h1>Вітаємо на сайті VINBAT</h1>
            <p>Ми пропонуємо вам великий вибір акумуляторів Westa</p>
            <p>та багато інших товарів для автомобілів</p>
            <p>Замовляйте прямо зараз!</p>
          </div>
          <SearchInput />
          </div>
          <Slider className="box" {...settings}>
            <img className="slider-img" src="/img/slider/1.jpg" alt="1" />
            <img className="slider-img" src="/img/slider/2.jpg" alt="2" />
            <img className="slider-img" src="/img/slider/3.jpg" alt="3" />
          </Slider>
        </div>
      );
    }
  }
  
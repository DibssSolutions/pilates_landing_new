import slick from 'slick-carousel';
import { mediaWidth } from '../utils';

import {
  BODY,
  DOC,
  WIN,
  INIT,
  widthMD,
  widthSM,
  WIN_WIDTH
} from '../constants';


// 									small slider

const testimonialSlider = $('.js-small-slider');
const options = {
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: false,
  customPaging: (slider, pageIndex) => {
    return $('<button class="small__dot"></button>');
  },
  dotsClass: 'small-dots',
  responsive: [
    // {
    //   breakpoint: 1023,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     dots: true
    //   }
    // },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

const detectWindowWidth = () => {
  const initSlider = $('.js-small-slider.slick-slider');
  if (mediaWidth(1023)) {
    if (initSlider.length) return;
    testimonialSlider.slick(options);
  } else {
    if (!initSlider.length) return;
    testimonialSlider.slick('unslick');
  }
};
detectWindowWidth();

let timeout;

WIN.resize(() => {
  clearTimeout(timeout);
  timeout = setTimeout(detectWindowWidth, 100);
});


// SCHEDULE
const detectScheduleSlider = () => {
  const scheduleSliders = $('.js-schedule-slider');
  scheduleSliders.each((index, el) => {
    const schedulesSlider = $(el);
    const schedules = $(schedulesSlider.find('.schedule')).length;
    const initedSliderClass = schedulesSlider.hasClass('slick-slider');
    if (mediaWidth(767)) {
      if (schedules < 2 || initedSliderClass) return;
      schedulesSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        customPaging: (slider, pageIndex) => {
          return $('<button class="small__dot"></button>');
        },
        dotsClass: 'small-dots'
      });
    } else if (mediaWidth(1023)) {
      if (schedules > 2 && !initedSliderClass) {
        schedulesSlider.slick(optionsM);
      }
      if (schedules === 2 && initedSliderClass) {
        schedulesSlider.slick('unslick');
      }
    } else {
      if (!initedSliderClass) return;
      schedulesSlider.slick('unslick');
    }
  });
};
let timeoutS;
detectScheduleSlider();
WIN.resize(() => {
  clearTimeout(timeoutS);
  timeoutS = setTimeout(detectScheduleSlider, 100);
});

// 										GALLERY SLIDER
const gallerySlider = $('.js-gallery');
const galleryNav = $('.js-gallery-nav');

const galleryParent = gallerySlider.parents('.js-gallery-slider-wrap');
let prev = $('.js-arrow-prev', galleryParent);
let next = $('.js-arrow-next', galleryParent);

gallerySlider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: galleryNav
});
galleryNav.slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: gallerySlider,
  // centerMode: true,
  focusOnSelect: true,
  prevArrow: prev,
  nextArrow: next,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    }
  ]
});

// 										INSTRUCTOR slider
const instructorSlider = $('.js-instructor-slider');
const instructorNav = $('.js-instructor-slider-nav');

instructorSlider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: instructorNav
});
instructorNav.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: instructorSlider,
  // centerMode: true,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    }
  ]
});

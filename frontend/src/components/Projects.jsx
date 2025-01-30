// components/Projects.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Projects() {
  const projects = [
    { image: '/images/1.jpg', title: 'Lorem ipsum, dolor sit amet consectetur' },
    { image: '/images/flower.jpg', title: 'Lorem ipsum, dolor sit amet consectetur' },
    { image: '/images/large.jpg', title: 'Lorem ipsum, dolor sit amet consectetur' },
    { image: '/images/ayodhya.png', title: 'Lorem ipsum, dolor sit amet consectetur' },
    { image: '/images/baranti.png', title: 'Lorem ipsum, dolor sit amet consectetur' },
    { image: '/images/out.jpg', title: 'Lorem ipsum, dolor sit amet consectetur' },
    { image: '/images/palash.png', title: 'Lorem ipsum, dolor sit amet consectetur' },
    { image: '/images/mithonDam.png', title: 'Lorem ipsum, dolor sit amet consectetur' },
    { image: '/images/small.jpg', title: 'Lorem ipsum, dolor sit amet consectetur' },
    { image: '/images/recep.jpg', title: 'Lorem ipsum, dolor sit amet consectetur' },
    { image: '/images/room1.jpg', title: 'Lorem ipsum, dolor sit amet consectetur' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Gallery</h2>
      <Slider {...settings} className="w-full mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="p-4">
            <div className="relative group w-full h-96 rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-center px-4">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;

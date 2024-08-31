import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Testimonial {
  name: string;
  text: string;
  image: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    text: "This is an amazing service! Highly recommend it to everyone.",
    image: "https://via.placeholder.com/150",
    position: "CEO, Company A",
  },
  {
    name: "Jane Smith",
    text: "The experience was fantastic, and the team was very professional.",
    image: "https://via.placeholder.com/150",
    position: "CTO, Company B",
  },
  {
    name: "Sam Wilson",
    text: "Absolutely loved it! Will be back for more services.",
    image: "https://via.placeholder.com/150",
    position: "CMO, Company C",
  },
  {
    name: "Anna Taylor",
    text: "A wonderful experience from start to finish!",
    image: "https://via.placeholder.com/150",
    position: "Manager, Company D",
  },
  {
    name: "David Brown",
    text: "Exceptional quality and customer service.",
    image: "https://via.placeholder.com/150",
    position: "Director, Company E",
  },
  {
    name: "Emily White",
    text: "Professional and timely service.",
    image: "https://via.placeholder.com/150",
    position: "HR, Company F",
  },
  {
    name: "Michael Green",
    text: "Highly recommended for anyone looking for top-notch service.",
    image: "https://via.placeholder.com/150",
    position: "Consultant, Company G",
  },
  {
    name: "Laura Black",
    text: "A pleasure to work with!",
    image: "https://via.placeholder.com/150",
    position: "Designer, Company H",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true, // This makes the slide move right to left
    responsive: [
      {
        breakpoint: 1024, // Adjust the number of slides for tablet and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust the number of slides for mobile and below
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Adjust the number of slides for small mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:w-10/12 container mx-auto py-12">
      <h2 className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent text-4xl font-bold text-center mb-10 mt-32">
        Testimonials
      </h2>
      <div className="">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 rounded-lg border flex flex-col items-center text-center min-h-[200px] hover:shadow-lg hover:bg-slate-50">
                <svg
                  className="h-8 mx-auto mb-3 text-gray-200 dark:text-gray-300"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-gray-800 italic">"{testimonial.text}"</p>

                <div className="flex mt-3">
                  <h6 className="font-bold">{testimonial.name}</h6>
                  <h6 className="mx-2 text-gray-500">|</h6>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

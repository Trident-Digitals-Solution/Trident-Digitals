import React, { } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import AOS from 'aos';
import "aos/dist/aos.css"
import './Testimonial.css'




const Testimonials = () => {

  // useEffect(() => {
  //   AOS.init({ duration: 2000 })
  // }, [])

  // const Anim = ['fade-left', 'fade-right', 'fade-up', 'fade-down']

  return (
    <div className="testimonialHead">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      // data-aos={Anim[Math.floor(Math.random() * 3)]}
      >
        <div>
          <img src="images/Testimonial/Shreyas.jpeg" alt="" />
          <div className="myCarousel">
            <h3>Shreyas Naik</h3>
            <h4>CEO @ MMCo.</h4>
            <p>
              Trident digitals delivered what they promised. They are reliable and trustworthy, would definitely work with them again.
            </p>
          </div>
        </div>

        <div>
          <img src="images/Testimonial/Deep.JPG" alt="" />
          <div className="myCarousel">
            <h3>Deep Chakravorty</h3>
            <h4>Data Science lead @ Alstom</h4>
            <h4>RAMS Engineer</h4>
            <p>Working with Trident Digitals was a delightful experience. The team is agile and customer-centered. Looking forward to more future projects with them.</p>
          </div>
        </div>

        <div>
          <img src="images/Testimonial/Deep.jpeg" alt="" />
          <div className="myCarousel">
            <h3>Need To Add</h3>
            <h4>Blank</h4>
            <p>Trident digitals delivered what they promised. They are reliable and trustworthy, would definitely work with them again.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}


export default Testimonials;
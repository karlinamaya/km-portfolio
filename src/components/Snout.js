import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Snout.css';

const Snout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="snout-page">
      {/* Header Image */}
      <div className="snout-header">
        <img src="/images/snout-images/snout-header1.png" alt="Snout Project Header" />
      </div>

      {/* Introduction */}
      <section>
        <div className="text-content">
          <h2>What is Snout?</h2>
          <p>
            I created Snout, a fictional animal adoption app, as a personal project to explore the design process from start to finish. Snout is a platform that connects users with local animal shelters. The app's main goal is to make the adoption process easier and more accessible for potential pet owners. I designed the app's logo, wireframes, landing page, and other visual assets to create a cohesive brand identity for Snout.
          </p>
          <p>
            When designing the Snout logo, I aimed for simplicity, elegance, and cohesiveness to represent the care and unity of an animal shelter. This design became the foundation for Snout's brand identity.
          </p>
        </div>
        <div className="image-content">
          <img className="snout-logo" src="/images/snout-images/snout-logo.png" alt="Logo Design" />
        </div>
      </section>

      {/* Personas */}
      <section>
        <div className="text-content">
          <h2>Personas</h2>
          <p>
            Understanding the target audience is essential for any successful design project. I developed three user personas to better understand what a potential user base for Snout would look like. These personas helped shape the design direction.
          </p>
        </div>
        <div className="image-content">
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay interval={3000} transitionTime={1000}>
            <div>
              <img src="/images/snout-images/madison-1_orig.png" alt="Madison Persona" />
            </div>
            <div>
              <img src="/images/snout-images/april-2_orig.png" alt="April Persona" />
            </div>
            <div>
              <img src="/images/snout-images/theo-3_orig.png" alt="Theo Persona" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Wireframes */}
      <section className="wireframes-section">
        <div className="image-wrapper">
          <div className="text-and-image">
            <div className="text-content">
              <h2>Wireframes</h2>
              <p className="wireframe-p">
              With the intent of turning ideas into tangible designs, I created wireframes that evolved from the initial concept. These wireframes focus on the intended user flow for the Snout app, guiding the user through a seamless experience. Through a series of iterations, I refined the interaction flow to ensure it would be intuitive, clear, and easy to navigate for users across different scenarios.
              </p>
            </div>
            <div className="image-content" style={{ width: "45%" }}>
              <img src="/images/snout-images/app-wireframe.png" alt="Wireframes" />
            </div>
          </div>
        </div>
        
        {/* Carousel for additional images */}
        <div className="text-and-carousel">
          <div className="image-carousel-wrapper">
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows
              autoPlay
              interval={3000}
              transitionTime={1000}
              className="image-carousel"
            >
              <div>
                <img
                  src="/images/snout-images/landing-frame-1920_orig.webp"
                  alt="Landing Frame 1920"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <img
                  src="/images/snout-images/landing-frame-900_orig.webp"
                  alt="Landing Frame 900"
                  style={{ width: "30%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <img
                  src="/images/snout-images/landing-frame-480_orig.jpg"
                  alt="Landing Frame 480"
                  style={{ width: "30%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Carousel>
          </div>
          <div className="wireframe-p2">
            <p>
            Additionally, I created landing page prototypes designed for desktop, tablet, and smartphone devices. These prototypes are tailored to each screen size, ensuring a responsive and cohesive design that adapts to various platforms while maintaining the core visual elements of the Snout app.
            </p>
          </div>
        </div>
      </section>

      {/* Landing Page */}
      <section>
        <div className="text-content">
          <h2>Landing Page</h2>
          <p>
          Once I had established a framework for Snout, I moved on to designing the landing page. My goal was to highlight the main mission of Snout and showcase a glimpse of the app's UI. Using Snout's logo as a framework for the surrounding brand, I focused on minimalism and cohesiveness in my design and content writing.
          </p>
        </div>
        <div className="image-content">
          <img src="/images/snout-images/snout-landing.png" alt="Wireframes" />
        </div>
      </section>

      {/* Sample Web Logos */}
      <section>
        <div className="text-content">
          <h2>Sample Web Logos</h2>
          <p>
          Along with the wireframes representing Snout's structure, I created potential web logos for the app. Snout's purpose is to provide a service that allows you to not only adopt animals, but shop for supplies and get in touch with local veterinarians as well. In order to account for the all-encompassing nature of Snout, I designed a variety of web logos that could be incorporated into the app's UI.
          </p>
        </div>
        <div className="image-content">
          <img src="/images/snout-images/web-logos1.png" alt="Wireframes" />
        </div>
      </section>

      {/* Infographic */}
      <section>
        <div className="text-content">
          <h2>Infographic</h2>
          <p>
          Infographics are a great way to convey information in a compact and direct manner, so I took this opportunity to share the key features of Snout. I wanted to express that Snout is not simply an adoption app - it contains a variety of functions that are necessary to new and current pet owners.
          </p>
          <p>
          For the design, I utilized my previously made web logos to represent each key point. I stayed true to Snout's branding style, maintaining a clean and minimal look that is still fully expressive.
          </p>
        </div>
        <div className="image-content">
          <img src="/images/snout-images/infographic-snout.png" alt="Wireframes" />
        </div>
      </section>
    
      {/* Animated Loading Screen */}
      <section>
        <div className="text-content">
          <h2>Animated Loading Screen</h2>
          <p>
          Even the smallest design details matter. To make the user experience smoother, I created an animated loading screen that could be implemented into the app for a pleasant transition during loading time. This screen was designed to match the brand's look and feel, making a strong first impression.
          </p>
        </div>
        <div className="image-content">
          <iframe src="https://drive.google.com/file/d/1aEp9lOtbSSomS1qNDalevtdGynAmQyc5/preview" width="640" height="480" allow="autoplay" style={{ border: '2px solid rgb(20, 20, 20)' }}></iframe>
        </div>
      </section>

      {/* Web Banners */}
      <section>
        <div className="text-content">
          <h2>Web Banners</h2>
          <p>
          For the last project of my journey with Snout, I created a web banner design and adjusted it to fit multiple dimensions. The main challenge I had during the early stages of this design was determining how to best incorporate Snout's brand while also producing a design that would stand out enough in its own right to gain traction amidst the digital noise. After a series of brainstorming different ideas, I was able to come up with a design that I felt adhered to the Snout style and was eye-catching as well.
          </p>
        </div>
        <div className="image-content">
          <img src="/images/snout-images/web-banners.jpg" alt="Wireframes" />
        </div>
      </section>
    </div>
  );
};

export default Snout;
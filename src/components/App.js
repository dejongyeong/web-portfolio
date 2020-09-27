import React, { useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Hero from './Hero';
import MenuBar from './MenuBar';
import About from './About';
import Experience from './Experience';

// gsap animation
gsap.registerPlugin(ScrollTrigger);

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontWeight: '800',
    },
    body1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '300',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 425,
      lg: 768,
      xl: 1024,
      xxl: 1440,
    },
  },
});

const sections = [
  { key: 1, id: 'about', comp: <About /> },
  { key: 2, id: 'portfolio', comp: <Hero /> },
  { key: 3, id: 'experience', comp: <Experience /> },
  { key: 4, id: 'contact', comp: <Hero /> },
];

// gsap animation tutorial: https://ihatetomatoes.net/react-and-greensock-tutorial-for-beginners/
function App() {
  const homeRef = React.useRef(null);

  const revealRef = React.useRef([]);
  revealRef.current = [];

  useEffect(() => {
    gsap.to(homeRef.current, { duration: 1, ease: 'none' });
  }, []);

  useEffect(() => {
    gsap.from(homeRef.current, {
      autoAlpha: 0,
      ease: 'none',
      delay: 1,
    });

    revealRef.current.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: element,
            start: 'top 70%', // when top of the trigger hits 70% up from the bottom of the viewport
            toggleActions: 'play none none',
          },
        }
      );
    });
  }, []);

  const addToRefs = (element) => {
    if (element && !revealRef.current.includes(element)) {
      revealRef.current.push(element);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <MenuBar />
        <section id="home" ref={homeRef}>
          <Hero />
        </section>
        {sections.map(({ key, id, comp }) => (
          <section id={id} key={key} ref={addToRefs}>
            {comp}
          </section>
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;

import { useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import * as constants from './constants';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Home from './containers/Home/Home';
import Resume from './containers/Resume/Resume';
import Testimonial from './containers/Testimonial/Testimonial';
import { db, doc, getDoc } from './firebase';

const App = () => {
  const topRef = useRef();
  const aboutRef = useRef();
  const resumeRef = useRef();
  const testimonialRef = useRef();
  const contactRef = useRef();
  const [linkToCV, setLinkToCV] = useState('');

  const scrollIntoView = view => {
    const options = { behavior: 'smooth' };

    switch (view) {
      case constants.TOP:
        topRef.current.scrollIntoView(options);
        break;
      case constants.ABOUT:
        aboutRef.current.scrollIntoView(options);
        break;
      case constants.RESUME:
        resumeRef.current.scrollIntoView(options);
        break;
      case constants.TESTIMONIAL:
        testimonialRef.current.scrollIntoView(options);
        break;
      case constants.CONTACT:
        contactRef.current.scrollIntoView(options);
        break;
      default:
        return;
    }
  };

  const isVisibleInViewport = ref => {
    const rect = ref.current.getBoundingClientRect();

    return rect.top < window.innerHeight && rect.bottom >= 0;
  };

  const fadeIn = ref => {
    ref.current.classList.add('fade');
  };

  const fadeOut = ref => {
    ref.current.classList.remove('fade');
  };

  const handleScreenView = () => {
    [aboutRef, resumeRef, testimonialRef, contactRef].forEach(ref =>
      isVisibleInViewport(ref) ? fadeIn(ref) : fadeOut(ref)
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScreenView);

    return () => {
      window.removeEventListener('scroll', handleScreenView);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'portfolio', 'links');
      const docSnap = await getDoc(docRef);

      docSnap.exists() && setLinkToCV(docSnap.data().linkToCV);
    })();
  }, []);

  return (
    <>
      <Header ref={topRef} scrollIntoView={scrollIntoView} />
      <main>
        <Home scrollIntoView={scrollIntoView} linkToCV={linkToCV} />
        <About
          ref={aboutRef}
          scrollIntoView={scrollIntoView}
          linkToCV={linkToCV}
        />
        <Resume ref={resumeRef} />
        <Testimonial ref={testimonialRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer scrollIntoView={scrollIntoView} />
    </>
  );
};

export default App;

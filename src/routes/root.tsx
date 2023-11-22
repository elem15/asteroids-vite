import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/header/Header';


export default function RootLayout() {
  const [isEarthStatic, setIsEarthStatic] = useState(true);
  const observerTargetEarth = useRef(null);

  useEffect(() => {
    function observerEarthObserve() {
      if (observerTargetEarth.current) {
        observerEarth.observe(observerTargetEarth.current);
      }
    }
    function observerEarthUnobserve() {
      if (observerTargetEarth.current) {
        observerEarth.unobserve(observerTargetEarth.current);
      }
    }
    const observerEarth = new IntersectionObserver(
      () => {
        setIsEarthStatic(prev => !prev);
      }, {
      threshold: 1,
      root: document,
      rootMargin: "20px",
    });
    observerEarthObserve();
    return observerEarthUnobserve;
  }, [observerTargetEarth]);

  return (
    <>
      <Header />
      <div ref={observerTargetEarth}></div>
      <img className={isEarthStatic ? "earth earth__up" : "earth"} src="/img/planeta_zemlia.jpg" alt="earth"
        width={400} height={620} />
      <Outlet />
      <div className="copyright">
        Website by <a href="https://github.com/elem15" target="_blank">
          Mikhail Dvorkin<img
            className="github"
            src="/img/github.svg"
            alt="elem15"
            height="15"
          /></a>
      </div>
    </>

  );
}

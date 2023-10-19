import Lenis from '@studio-freight/lenis'

export default function setupLenis(container, content) {
    const lenis = new Lenis({ wrapper: container, content: content, options: { scrollbar: { width: 10 } } })
  
    lenis.on('scroll', (e) => {
      // console.log(e)
    });
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    };
  
    requestAnimationFrame(raf);
  };
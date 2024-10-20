import { useRef } from 'react';

export function ScrollToSection() {
  const ref = useRef(null);

  const data = [
    {
      label: 'First Card',
      style: {
        width: '100%',
        height: '70vh',
        background: 'red',
      },
    },
    {
      label: 'Second Card',
      style: {
        width: '100%',
        height: '70vh',
        background: 'blue',
      },
    },
    {
      label: 'Third Card',
      style: {
        width: '100%',
        height: '70vh',
        background: 'green',
      },
    },
    {
      label: 'Fourth Card',
      style: {
        width: '100%',
        height: '70vh',
        background: 'yellow',
      },
    },
    {
      label: 'Fifth Card',
      style: {
        width: '100%',
        height: '70vh',
        background: 'purple',
      },
    },
  ];

  function handleScrollToSection() {
    ref.current.scrollIntoView({ behavior: 'smooth' });

                              // Another way to scroll to a section
    // let pos = ref.current.getBoundingClientRect().top;
    // console.log(pos)
    // window.scrollTo({
    //   top: pos,
    //   behavior: 'smooth',
    // });
  }

  return (
    <div>
      <h1>Scroll to Section</h1>
      <button onClick={handleScrollToSection}>Click to Scroll</button>
      {data.map((item, index) => (
        <div ref={index === 3 ? ref : null} key={index} style={item.style}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
}

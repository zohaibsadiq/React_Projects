import useFetch from '../UseFetchHook';

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );
  if (pending) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  console.log(document.body);
  
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <h1>Scroll To Top and Bottom Feature</h1>
      <h3>This is top section </h3>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <ul>
        {data && data.map((item, index) => <li key={index}>{item.title}</li>)}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <h3>This is the bottom section</h3>
    </div>
  );
}

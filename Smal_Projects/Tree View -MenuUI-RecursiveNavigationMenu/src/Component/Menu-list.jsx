export default function MenuList({ list = [] }) {
  return (
    <div className='menu-list-container'>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
             {item.name}
            {item.children && <MenuList menu={item.children} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
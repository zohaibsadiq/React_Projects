import MenuList from "./Menu-list";

export default function MenuItem({ item }) {
    return (
        <div className='menu-item-container'>
        <div>{item.name}</div>
        {item.children && <MenuList list={item.children} />}
        </div>
    );
    }
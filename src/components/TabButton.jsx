
//the children props is given by react. It refers to the content between your component tags: <TabButton>This is the props-children area<TabButton/>

export default function TabButton({ children, onSelect, isSelected }) {

    //the function is extecuted by React, that's why you only refer to it, but not 'call' it.
    return (<li>
        <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
    </li>
    );
}



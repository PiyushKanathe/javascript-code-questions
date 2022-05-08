import React, {useState} from 'react';

function Parent() {

  const [item, setItem ] = useState('')
  const [listItem, setListItem] = useState([])
  const [viewList, setViewList] = useState([])
 
 const add = () => {
    let templist = [...listItem, item]
    console.log(templist)
    setListItem(templist)
 }
 
  const handleClick = () => {
    console.log(listItem)
    let viewListTemp = listItem.map((it, index)=><li>{it}</li>)
    console.log(viewListTemp)
    setViewList(viewListTemp)
  }
  
  return (
    <div>
      <TempChild title={'Hello Child'}/>
      <input onChange={e => {setItem(e.target.value)} }  />
      <button onClick={handleClick}>Click Me!!</button>
      <button onClick={add} >Add Item</button>
      <ul>{viewList}</ul>
    </div>
  )
}

function Child(props) {
  const { title } = props;
  console.log("child component rendering")
  return (
    <div>{title}</div>
  )
}

const TempChild = React.memo(Child);

export default Parent;
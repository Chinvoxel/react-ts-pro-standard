import { NavLink } from 'react-router-dom'

function App(props) {
  return (
    <div>
      <NavLink
        to="/Home/ShoppingCart"
        activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}
        replace
      >
        跳转到 ShppingCart
      </NavLink>
      <br />
      <NavLink
        to="/Home/Classify"
        activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}
        replace
      >
        跳转到 Classify
      </NavLink>
      <br /> <br />
      {props.children}
    </div>
  )
}

export default App

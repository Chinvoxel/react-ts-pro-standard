import React from 'react'

function MyButton() {
  function handleClick() {
    alert('Button clicked!')
  }
  return <button onClick={handleClick}>Click me</button>
}

const About: React.FC = () => {
  return (
    <div>
      <h2>About</h2>
      <MyButton />
    </div>
  )
}

export default About

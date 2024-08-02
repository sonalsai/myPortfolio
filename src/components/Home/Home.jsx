/* eslint-disable no-unused-vars */
import "./home.scss"

function Home() {

  const hi = `console.log("Hi...");`
  const name = `() => <name>SONAL SAI</name>`;
  const description = `Error:403 {meassage:"I'm a Frontend Developer"}`
  return (
    <div className="homeContainer">
      <h1 className="head1">{hi}</h1>
      <h1 className="head2">{name}</h1>
      <h3 className="head3">{description}</h3>
    </div>)
}

export default Home
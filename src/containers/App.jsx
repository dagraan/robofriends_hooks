//import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'; 


//class App extends Component {
function App() {

  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }

  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [count, setCount] = useState(0) // for demo purposes

  // componentDidMount() {
  useEffect(()=> {    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())

      // .then(users => {this.setState({ robots: users})});
      .then(users => {setRobots(users)});
      console.log(count)
  //}
  },[]) // if you add count, only run if count changes.


  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }
  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  // render() {
    // const { robots, searchfield } = this.state;

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <button onClick={()=>setCount(count+1)}>Click Me!</button>

        {/* <SearchBox searchChange={this.onSearchChange}/> */}
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
}

export default App;
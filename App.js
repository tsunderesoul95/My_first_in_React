// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//     <header className="App-header">
//     <img src={logo} className="App-logo"/>
//     <p className="App">Learn react with Tejal !</p>
//     </header>
//     </div>
//   );
// }
// 

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }
addItem(todoValue){
 if(todoValue !== ""){
   const newItem = {
     id: Date.now(),
     value: todoValue,
     isDone: false
   };
   const list = [...this.state.list];
   list.push(newItem);
   this.setState({
     list,newItem: ""
   });
 } 
}

deleteItem(id){
  const list = [...this.state.list];
  const updatedList = list.filter(item => item.id !== id);
  this.setState({list:updatedList})
}

updatedInput(input) {
  this.setState({newItem:input});
}

  render(){
    return (
      <div>
      <img src = {logo} width="100" height="100" className="logo"/>
      <h1 className="app-title">ToDo App</h1>
      <div className="container">Add an Item...
      <br/>
      <input 
      type="text" 
      className="input-text"
      placeholder="Write todo" required value={this.state.newItem}
      onChange = {e => this.updatedInput (e.target.value)}/>
      <button className="add-btn"
      onClick = {() => this.addItem(this.state.newItem)} 
      disabled = {!this.state.newItem.length}
      >Add ToDo</button>
      <div className="list">
      <ul>
      {this.state.list.map (item => {
        return (
          <li key = {item.id}>
          <input type="checkbox"
          name= "idDone"
          checked = {item.isDone}
          onChange = {() => {}}/>
          {item.value}
          <button className="btn" 
          onClick={() => this.deleteItem(item.id)}>Delete</button>
          </li>
        );
      })}
      <li>
      <input type="checkbox" name="" id=""/>
      Record youtube videos
      <button className="btn">Delete</button>
      </li>
      </ul>
      </div>
      </div>
      </div>
    );
  }
}
export default App;
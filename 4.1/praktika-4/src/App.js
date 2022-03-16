import './App.css';

import Header from "./components/Header";
import PostImage from "./components/PostImage";
import PostContent from './components/PostContent';
import Box from './components/Box';
import { v4 as uuidv4 } from 'uuid';

function App() {
  let posts = [
    {
      header: "Shooting a free throw",
      text: "What a great form."
    },
    {
      header: "Going for a three!",
      text: "I don't think it can get any better."
    }
  ];

  let list = posts.map(p => <PostContent key = {uuidv4()} header = {p.header} text = {p.text} />)

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header title="Blog about Michael Jordan" image="https://pbs.twimg.com/media/B4da-0oCYAA1tax.jpg" />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <PostImage image="https://api.time.com/wp-content/uploads/2020/04/michael-jordan-1.jpg" />
          {list}
        </div>
        <div className="col-6">
          <PostImage image="https://api.time.com/wp-content/uploads/2020/04/michael-jordan-1.jpg" />
          {list}
        </div>
      </div>

      <div className='row'>
          <Box color="red" />
          <Box color="black" />
          <Box color="white" />
          <Box color="blue" />
      </div>
    </div>
  );
}

export default App;

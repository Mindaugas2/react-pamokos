import './App.css';

import Header from "./components/Header";
import PostImage from "./components/PostImage";
import PostContent from './components/PostContent';
import Box from './components/Box';

function App() {
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
          <PostContent header="Shooting a free throw" text="What a great form." />
        </div>
        <div className="col-6">
          <PostImage image="https://api.time.com/wp-content/uploads/2020/04/michael-jordan-1.jpg" />
          <PostContent header="Going for a three!" text="I don't think it can get any better." />
        </div>
      </div>

      <div className='row'>
        <div className="col-3">
          <Box color="red" />
        </div>
        <div className="col-3">
          <Box color="black" />
        </div>
        <div className="col-3">
          <Box color="white" />
        </div>
        <div className="col-3">
          <Box color="blue" />
        </div>
      </div>
    </div>
  );
}

export default App;

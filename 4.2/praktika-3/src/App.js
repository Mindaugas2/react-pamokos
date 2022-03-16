import './App.css';
import LessText from './components/LessText';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className='col-4 Border'>
          <LessText text={"Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it."} maxLength={35} />
          <LessText text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis vel, adipisci debitis, eaque suscipit nostrum quia, repellat perferendis dolore alias ratione rerum facilis! Reiciendis quasi quas iusto, amet rerum soluta."} maxLength={35} />
        </div>
      </div>
    </div>
  );
}

export default App;
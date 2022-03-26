import './App.css';
import KoMokausi from './components/KoMokausi';

function App() {
  return (
    <div className="container">
      <div className="row">
        <KoMokausi image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/220px-HTML5_logo_and_wordmark.svg.png" text="HTML"/>
        <KoMokausi image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" text="CSS"/>
        <KoMokausi image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" text="JavaScript"/>
      </div>
    </div>
  );
}

export default App;
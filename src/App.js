import './App.css';
import Atom from './Atom';

const App = () => {
  return (
    <div className='appContainer'>
      <div className='topContainer'>
        <Atom/>
      </div>
      <div className='bottomContainer'>
        <div className='bottomLeft'>
          <div className='name'>ADHAM JAAFAR</div>
          <div className='bio'>
            Adham is an experienced front-end developer specializing in JavaScript,
            TypeScript, React, HTML, CSS, and Sass. With a strong passion for creativity,
            he thrives on coming up with interesting concepts and innovative solutions.
            Based in Berlin, Adham is committed to crafting
            engaging user experiences that blend functionality with aesthetic appeal.
          </div>
        </div>
        <div className='bottomRight'>
          <div className='name'>PROJECTS</div>
          <div className='projects'>
            <a className='link' href='https://adamjfrr.github.io/foam/'><div className='project'>01 Foam</div></a>
            <a className='link' href='https://adamjfrr.github.io/modernclock/'><div className='project'>02 Modern clock</div></a>
            <a className='link' href='https://adamjfrr.github.io/greenhands/'><div className='project'>03 Green hands</div></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

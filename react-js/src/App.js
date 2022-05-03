import './App.css';
import Profile from './profile/Profile';

function App() {
 
  const handleName = (name) =>{
    alert(`Hi, I am ${name}`) }
  const sty = {
    backgroundImage: 'url(b.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    margin:'0',
    padding:'0'
  }

  return (
    <div style ={sty}>
      <Profile 
          name="ala ben cheikh boubaker"
          biog= {[
            "I am 24 years old",
            "I am a junior full stack JS developer",
            'I am from bougalounga land'
          ]} 
          profession="I'm a student"
          handleName = {handleName}>
          <img width="650"  src="https://www.thebalancecareers.com/thmb/N0WHprMT46rOtd_0GXNO1YYKNww=/1500x1000/filters:fill(auto,1)/web-developer-job-description-salary-and-skills-2061841_final-01-1daf6d8219bd49a089189b4e8c6a7e4d.png" alt="web"/> 
      </Profile>
    </div>
  );
}

export default App;






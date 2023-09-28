import './App.css';
import { React } from 'react';


const skills = [{
  name: "HTML+CSS",
  emoji: "💪🏼",
  backgroundColor: "blue",
}, {
  name: "javaScript",
  emoji: "💪🏼",
  backgroundColor: "orange",

},
{
  name: "React",
  emoji: "👶🏽",
  backgroundColor: "lightgreen",

},
{
  name: "API",
  emoji: "💪🏼",
  backgroundColor: "red",

},
{
  name: "Web Design",
  emoji: "👍🏼",
  backgroundColor: "lightblue",

},
{
  name: "Git & GitHub",
  emoji: "👶🏽",
  backgroundColor: "orangered",

}
]

function App() {
  return (

    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        {

        }
        <SkillList />
      </div>

    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className='avatar' src={require('./myAvatarImage.jpg')} alt="formal Avatar" ></img>
    </div>
  );
}

function Intro() {
  return (
    <div className='data'>
      <h1>Eslam Amin</h1>
      <p>Junior Backend Developer and working to become
        a FullStack developer by working on my FrontEnd Skills with React,
        I am self-motivated learner, Hardworking developer,
        I See an opportunity and I take it.
        I don't compete with others, I only compete with
        my yesterday-self.
      </p>
    </div>
  )
}

function SkillList() {
  return (
    <div className='skill-list'>
      {
        skills.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))
      }
    </div>
  )
}
function Skill(props) {
  const skill = props.skill;
  return (<div className='skill' style={{ backgroundColor: skill.backgroundColor }}>
    <span>{skill.name}</span>
    <span>{skill.emoji}</span>
  </div>)
}

export default App;

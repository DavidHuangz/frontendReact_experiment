import './App.css';
import Title from './Components/Title';
import Card from './Components/Card';
import {makeStyles} from '@material-ui/core';

var UseStyles = makeStyles({
  boxes: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

function App() {
  const classes = UseStyles();

  // Change background color
  document.body.style = 'background: #1c2026';

  // Dynamically add cards
  const cardArr = [];
  const lengthofCards = 8;
  for (let i = 0; i < lengthofCards; i++) {
    cardArr.push(<Card />);
  }

  return (
    <div>
      <Title />
      <div className={classes.boxes}>{cardArr}</div>
    </div>
  );
}

export default App;

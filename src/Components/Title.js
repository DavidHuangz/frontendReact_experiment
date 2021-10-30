import {makeStyles} from '@material-ui/core';

var UseStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 30,
  },
  title: {
    color: 'white',
    paddingTop: 70,
    fontWeight: 'bold',
    fontSize: 50,
    '@media (max-width: 500px)': {
      paddingTop: 0,
    },
  },
  line: {
    width: 30,
    margin: 20,
  },
  Description: {
    fontSize: 20,
    color: '#65757e',
    width: '43%',
    '@media (max-width: 500px)': {
      width: '80%',
    },
  },
});

export default function Title() {
  const classes = UseStyles();

  // Changable settings for the title component
  const Title = 'Experienced & Multi-Talented';
  const Description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor leo, porttitor vel dictum at, aliquam et augue. Duis vel molestie risus, ut lobortis felis.';

  return (
    <div className={classes.container}>
      <div className={classes.title}>{Title}</div>
      <hr className={classes.line} />
      <div className={classes.Description}>{Description}</div>
    </div>
  );
}

import React, { Dispatch, SetStateAction, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Zoom from '@material-ui/core/Zoom';
import { Project } from '../../../../types';
import { ButtonWithHookSupp } from '../../../SupportiveComponents/ButtonComponent/Button';
import { GridListTileBar, Paper } from '@material-ui/core';

interface iProps {
  projects: Project[],
  setFilterValue: Dispatch<SetStateAction<string>>,
  buttonNames: string[]
}

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap'
  },
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    width: 'auto',
    height: '100vh'
  },
  jpg: {
    width: 'auto',
    height: '100vh'
  },
  root: {
    maxWidth: 345,
    margin: "1rem",
    transition: "transform 1s ease-in-out"
  },
  media: {
    height: 540,
    width: 500,
    '&:hover': {
      transform: "scale3d(1.05, 1.05, 1)",
    }
  },
});

const HomeVideoBody: React.FC<iProps> = ({ setFilterValue, projects, buttonNames }) => {
  const [currentImageId, setCurrentImageId] = useState<number>();
  const [showEnlargedImage, setShowEnlargedImage] = useState<boolean>(false);

  const classes = useStyles();

  const projectsElements = projects.map((p, i) =>
    <Card className={classes.root} key={i}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={p.img}
          onClick={() => onImageClickHandler(p.id)}
        />
        <GridListTileBar
          title={p.name}
        />
      </CardActionArea>
      <CardActions>

      </CardActions>
    </Card>
  );

  const onImageClickHandler = (id: number) => {
    setCurrentImageId(id)
    setShowEnlargedImage(true)
  }

  const buttonElements = buttonNames.map(b => <ButtonWithHookSupp buttonName={b}
    buttonOnClick={setFilterValue} buttonValue={b} noContainer />);

  const foundElement = projects.find(el => el.id === currentImageId);
  
  return (
    <div className={classes.wrapper}>
      {projectsElements}
      {showEnlargedImage &&
        <div className={classes.container}>
          <Zoom in={showEnlargedImage} >
            <Paper variant="outlined" onClick={() => setShowEnlargedImage(false)} onBlur={() => setShowEnlargedImage(false)}>
              <img className={classes.jpg} src={foundElement?.img} />
            </Paper>
          </Zoom>
        </div>
      }
    </div>

  );
};

export default HomeVideoBody;

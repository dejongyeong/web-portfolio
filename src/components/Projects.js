import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  makeStyles,
  Typography,
  withStyles,
} from '@material-ui/core';
import { GitHub, Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    flexGrow: '1',
    padding: '.6rem',
    [theme.breakpoints.down('lg')]: {
      padding: '0',
    },
  },
  type: {
    position: 'absolute',
    top: '.8rem',
    left: '0',
    marginLeft: '1rem',
    transform: 'translateX(0%)',
  },
  content: {
    '& h4': {
      fontFamily: 'Lato, sans-serif',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: '600',
      marginBottom: '.7rem',
      color: '#2e585b',
    },
    '& p': {
      fontFamily: 'Lato, sans-serif',
      fontSize: '0.9rem',
      lineHeight: '1.3rem',
      fontWeight: '400',
      color: '#222831',
    },
    '& h6': {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '.8rem',
      lineHeight: '1.5rem',
      fontWeight: '600',
      color: '#00adb5',
    },
    marginBottom: '1rem',
  },
  // reference: https://stackoverflow.com/questions/55557579/how-to-change-the-hover-state-for-cardactionarea-buttonbase
  actionArea: {
    '&:hover $focusHighlight': {
      opacity: 0,
    },
  },
  focusHighlight: {},
  techs: {
    color: '#00adb5',
  },
  actionButton: {
    marginLeft: '.1rem',
    marginBottom: '.4rem',
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      bottom: '0',
      left: '.1rem',
    },
    [theme.breakpoints.down('315')]: {
      display: 'block',
      '& :not(:first-child)': {
        marginLeft: '0',
      },
      '& a:first-child': {
        marginBottom: '.5rem',
      },
      paddingLeft: '.8rem',
    },
  },
}));

const CustomCard = withStyles((theme) => ({
  root: {
    maxWidth: '350px',
    height: '560px',
    maxHeight: '100%',
    borderRadius: '0',
    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        transform: 'translate(0, -10px)',
        msTransform: 'translate(0, -10px)',
      },
      transition: 'transform 0.3s ease-out',
      position: 'relative',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100% !important',
      height: '100%',
      maxHeight: '100% !important',
    },
  },
}))(Card);

function ProjectType(props) {
  const CustomChip = withStyles({
    root: {
      color: '#ffffff',
      borderColor: '#2e585b',
      backgroundColor: '#222831',
    },
  })(Chip);

  return <CustomChip label={props.type} size="small" />;
}

function Technology(props) {
  const CustomChip = withStyles({
    root: {
      color: '#ffffff',
      borderColor: '#393e46',
      backgroundColor: '#393e46',
      margin: '.12rem .18rem .12rem 0',
      borderRadius: '0',
      fontSize: '.75rem',
    },
  })(Chip);

  return props.techs.map((tech) => (
    <CustomChip label={tech} size="small" key={tech} />
  ));
}

const CustomButton = withStyles((theme) => ({
  root: {
    color: '#00adb5',
    fontSize: '.8rem',
    fontFamily: 'Montserrat, sans-serif',
    borderColor: '#00adb5',
    '&:hover': {
      backgroundColor: '#2e585b',
      color: '#fefefe',
      borderColor: '#2e585b',
    },
  },
}))(Button);

function isPreviewable(preview) {
  const previewType = {
    UNAVAILABLE: 'Unavailable',
    PRIVATE: 'Private',
  };

  const isAbleToPreview =
    preview === previewType.UNAVAILABLE || preview === previewType.PRIVATE;

  return {
    startIcon: isAbleToPreview ? <VisibilityOff /> : <Visibility />,
    disabled: isAbleToPreview ? true : false,
    href: isAbleToPreview ? null : `${preview}`,
    target: `${preview}` === '#' ? null : '_blank',
    rel: `${preview}` === '#' ? null : 'noopener noreferrer',
  };
}

function Projects(props) {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" alignItems="flex-start">
        {props.projects.map((project, index) => (
          <Grid item key={project.key} style={{ marginBottom: '1rem' }}>
            <CustomCard>
              <CardActionArea
                classes={{
                  root: classes.actionArea,
                  focusHighlight: classes.focusHighlight,
                }}
              >
                <div style={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    width="100%"
                    height="auto"
                    alt={project.title}
                    image={project.image}
                    title={project.title}
                  ></CardMedia>
                  <div className={classes.type}>
                    <ProjectType type={project.type} />
                  </div>
                </div>
                <CardContent>
                  <div className={classes.content}>
                    <Typography variant="h6">{project.date}</Typography>
                    <Typography gutterBottom variant="h4">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {project.description}
                    </Typography>
                  </div>
                  <div className={classes.techs}>
                    <Technology techs={project.tech} />
                  </div>
                </CardContent>
              </CardActionArea>
              <div>
                <CardActions className={classes.actionButton}>
                  <CustomButton
                    size="small"
                    startIcon={<GitHub />}
                    variant="outlined"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </CustomButton>
                  <CustomButton
                    size="small"
                    variant="outlined"
                    {...isPreviewable(project.preview)}
                  >
                    Preview
                  </CustomButton>
                </CardActions>
              </div>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;

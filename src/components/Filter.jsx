import React, { useState } from "react";
import { Container, Box, Button, ButtonBase } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";


const StyledButton = withStyles(() => ({
  root: {
    marginRight: "1rem",
   
    
    fontSize: "1.2rem",
    borderRadius: "1rem",
    color: "#000",
    fontWeight: "400",
   
  }
}))(ButtonBase);

const useStyles = makeStyles(() => ({
  buttonContainerWrapper: {
    display: "flex",
    flexDirection:"row",
    justifyContent: "left",
    padding:"0px"
  },
  buttonContainer: {
    
    width:"100%",
   
    padding: "1rem",
    display: "flex",
    flexDirection:"column",
    justifyContent: "space-between"
  },
  lastButtonFilter: {
    marginRight: "0rem"
  },
  StyledButton:{
    display:"flex",
    flexDirection:"row"
  },
  activeButton: {
   
    color: "red"
  }
}));

 function Filter() {
  const classes = useStyles();
  const [activeButton, setActiveButton] = useState('first');

  const clickedButtonHandler = (e) => {
    console.log(e.target);
    const { name } = e.target;
    setActiveButton(name);
    console.log(activeButton);
  };

  return (
    <div style={{textAlign:"left",display:"flex",flexDirection:"column",justifyContent:"left"}}>
    <h3>Sizes</h3>
    <Container className={classes.buttonContainerWrapper}>
      
      <Box className={classes.buttonContainer}>
        <StyledButton
          name="first"
          className={activeButton === "first" ? `${classes.activeButton}` : ""}
          onClick={clickedButtonHandler}
        >
         6 "| ₹ 599
        </StyledButton>
        <StyledButton
          name="second"
          className={activeButton === "second" ? `${classes.activeButton}` : ""}
          onClick={clickedButtonHandler}
        >12"| ₹799
        </StyledButton>
        <StyledButton
          name="third"
          className={activeButton === "third" ? `${classes.activeButton}` : ""}
          onClick={clickedButtonHandler}
        >
           18"| ₹ 899
        </StyledButton>
        <StyledButton
          name="fourth"
          className={activeButton === "fourth" ? `${classes.activeButton}` : ""}
          onClick={clickedButtonHandler}
        >
           20"| ₹ 899
        </StyledButton>
       
      </Box>
    </Container>
    </div>
  );
}

export default Filter

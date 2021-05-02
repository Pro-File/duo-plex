import React,{useState} from 'react'
import {TextField, Grid, Card, Button, FormControl, InputLabel, Select, MenuItem ,CardHeader, CardContent, Typography, Divider, Link } from '@material-ui/core';
import UseStyles from './styles';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import SnackBar from '../../Components/SnackBar/SnackBar';
import {googleSignin, signin} from '../../Redux/auth/authActions';
import {closeModal, openModal} from '../../Redux/modals/modalActions';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { SimpleGrid } from '@chakra-ui/layout';
import VisuallyHidden from '@chakra-ui/visually-hidden';
const SignIn = ({googleSignin, closeModal, openModal, signin}) => {
    var [Email,setEmail] = useState("");
    var [Pass, setPass] = useState("");
    const [ open ,setOpen] = useState(false);

    var HandleGoogle = (e) => {
      e.preventDefault();
      closeModal();
      setOpen(true);
      googleSignin();
    }
    
    var HandleSubmit = async(e) =>{
        e.preventDefault();

        var user = {
            Email,
            Pass,
        }
        
        const SignInStatus = await signin(user)
        console.log(SignInStatus)
        closeModal()
        if(SignInStatus === true) {
          setOpen(true)
        }
        // console.log(user)
    }
    const Classes = UseStyles();
    return (
        <Grid container spacing={2}>
            <SnackBar open={open} setOpen = {setOpen}/>
            <Grid item xs={12} className = {Classes.head}>
            <Typography align="center" variant="h3">  WELCOME
            </Typography>
            <Typography variant = "h5" align="center"  gutterBottom>
                to Duo-Plex
            </Typography>
            </Grid>
            <Divider />
            <Grid item xs={12} >
            <TextField className={Classes.styled} label="Enter Email" required value={Email} 
            onChange={(e) => setEmail(e.target.value)} fullWidth/>
            </Grid>

            <Grid item xs={12}>
            <TextField className={Classes.styled} label=" Enter Password" required value={Pass} 
            onChange={(e) => setPass(e.target.value)} fullWidth/>
            </Grid>

            <Button fullWidth className={Classes.button} variant="outlined" type="submit" 
             onClick={(e) => HandleSubmit(e)} color="primary">
                Sign In
            </Button>
            
            <Grid item xs = {12} className={Classes.social}>
            <Typography align = "center" variant = "subtitle2">or continue with</Typography>
        <SimpleGrid mt="6" columns={3} spacing="3">
          <Button variant="outlined">
            <VisuallyHidden>Login with Facebook</VisuallyHidden>
            <FaFacebook />
          </Button>
          <Button variant="outlined" onClick={HandleGoogle}>
            <VisuallyHidden>Login with Google</VisuallyHidden>
            <FaGoogle />
          </Button>
          <Button variant="outlined">
            <VisuallyHidden>Login with Github</VisuallyHidden>
            <FaGithub />
          </Button>
        </SimpleGrid>
            </Grid>

            <Grid item xs={12}>
            <Typography className={Classes.last} align="center" variant="subtitle2">
                Don't have an account?
                <Link className={Classes.SignInBtn} onClick= {()=> openModal({modalType : "OpenSignUp"})}>
                 Sign Up
                </Link>
            </Typography>
            </Grid>

        </Grid>
    )
}


var actions = ({
  googleSignin,
  openModal,  
  closeModal,
  signin,
})
export default connect(null, actions)(SignIn);

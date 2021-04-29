import React,{useState} from 'react'
import {TextField, Grid, Card, Button, FormControl, InputLabel, Select, MenuItem ,CardHeader, CardContent, Typography, Divider, Link } from '@material-ui/core';
import UseStyles from './styles';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import SnackBar from '../../Components/SnackBar/SnackBar';
import {googleSignin} from '../../Redux/auth/authActions';
import {closeModal} from '../../Redux/modals/modalActions';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { SimpleGrid } from '@chakra-ui/layout';
import VisuallyHidden from '@chakra-ui/visually-hidden';
const SignUp = ({googleSignin, closeModal}) => {
    var [photo,setImg] = useState("");
    var [Name,setName] = useState("");
    var [Email,setEmail] = useState("");
    var [Pass, setPass] = useState("");
    const [ open ,setOpen] = useState(false);

    var HandleGoogle = (e) => {
      e.preventDefault();
      closeModal();
      googleSignin();    
    }
    
    var HandleSubmit = (e) =>{
        e.preventDefault();

        var Info = {
            ID : uuid(),
            Name,
            Email,
            Pass,
            photo,
        }
        console.log(Info)
        // SetToList(Info);
        setOpen(true);
        // console.log(Info);
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
            <Grid item xs={6} >
            <TextField className={Classes.styled} label="Enter Name"  value={Name}
            onChange={(e) => setName(e.target.value)} fullWidth/>
            </Grid>

            <Grid item xs={6} >
            <TextField className={Classes.styled} label="Enter Email"  value={Email} 
            onChange={(e) => setEmail(e.target.value)} fullWidth/>
            </Grid>

            <Grid item xs={6}>
            <TextField className={Classes.styled} label=" Enter Password"  value={Pass} 
            onChange={(e) => setPass(e.target.value)} fullWidth/>
            </Grid>

            <Grid item xs={6} >
            <TextField type="file" className={Classes.styled} label="Select Image"  value={photo} 
            onChange={(e) => setImg(e.target.value)} fullWidth/>
            </Grid>

            <Button fullWidth className={Classes.button} variant="outlined" type="submit" 
             onClick={(e) => HandleSubmit(e)} color="primary">
                Sign Up
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
                Already have an account?
                <Link className={Classes.SignInBtn}>
                 Login
                </Link>
            </Typography>
            </Grid>

        </Grid>
    )
}


var actions = ({
  googleSignin,
  closeModal,
})
export default connect(null, actions)(SignUp);

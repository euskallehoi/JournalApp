import { useDispatch, useSelector } from 'react-redux'

import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, Typography, TextField} from '@mui/material'
import { Google, } from '@mui/icons-material'

import { AuthLayout } from '../layout/AuthLayout'
import { checkingAutentication, startGoogleSignIn } from '../../store/auth'

import { useForm } from '../../hooks'
import { useMemo } from 'react'


export const LoginPage = () => {

    const { status } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'elMasCaverga@gmail.com',
        password: '123456'
    });

    const isAuthenticated = useMemo(() => status === 'checking', [status])

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log({ email, password });
        dispatch( checkingAutentication() );
    }

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn');
        dispatch( startGoogleSignIn() );
    }


    return (
        <AuthLayout title="Login">

            <form onSubmit={ onSubmit }>
               
               <Grid container>

                   <Grid item xs={ 12 } sx={{ mt: 2 }}>

                       <TextField  
                         label="Correo" 
                         type='email' 
                         placeholder='' 
                         fullWidth
                         name="email"
                         value={ email }
                         onChange={ onInputChange }
                       />

                   </Grid>         

                   <Grid item xs={ 12 } sx={{ mt: 2 }}> 
                       <TextField 
                         label="Contraseña" 
                         type='password' 
                         placeholder='' 
                         fullWidth
                         name="password"
                         value={ password }
                         onChange={ onInputChange }
                       />
                   </Grid>
               
                   <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                       <Grid item xs={ 12 } sm={6}>
                           <Button 
                              disabled = {isAuthenticated}
                              type="submit" 
                              variant='contained' 
                              fullWidth 
                              >
                               Login
                           </Button>
                       </Grid>

                       <Grid item xs={ 12 } sm={6}>
                           <Button 
                              disabled = {isAuthenticated}
                              variant='contained' 
                              fullWidth 
                              onClick={onGoogleSignIn}>
                               <Google />
                               <Typography sx={{ml: 1}}>Google</Typography>
                           </Button>
                       </Grid>
                   </Grid>
           
                   <Grid container direction='row' justifyContent='end'>
                     <Link component={ RouterLink } color='inherit' to="/auth/registrer">
                       Crear una cuenta
                     </Link>                       
                   </Grid>

               </Grid>
            </form>

        </AuthLayout>

    )
} 
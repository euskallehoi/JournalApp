import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, Typography, TextField} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
    email: '',
    password: '',
    displayName: '',
} 

const formValidations = {
  email: [  (value) => value.includes('@'), 'el correo debe tener un @'],
  password: [  (value) => value.length >= 6, 'la contraseña debe de tener minimo 6 digitos'],
  displayName: [  (value) => value.length >=1 , 'ponga su nombre no sea vago señor'],
}

export const RegistrerPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    formState,   displayName,      email,      password,    onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  }

    return (
        <AuthLayout title="Crear Cuenta">


            <form onSubmit={ onSubmit }>
               
               <Grid container>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>

                    <TextField  
                      label="Nombre completo" 
                      type='text' 
                      placeholder='' 
                      fullWidth
                      name='displayName'
                      value={ displayName }
                      onChange={ onInputChange }
                      error={ !!displayNameValid && formSubmitted }
                      helperText={ displayNameValid }
                    />

                    </Grid>

                   <Grid item xs={ 12 } sx={{ mt: 2 }}>

                       <TextField  
                         label="Correo" 
                         type='email' 
                         placeholder='' 
                         fullWidth
                         name='email'
                         value={ email }
                         onChange={ onInputChange }
                         error={ !!emailValid && formSubmitted}
                         helperText={ emailValid  }
                       />

                   </Grid>         

                   <Grid item xs={ 12 } sx={{ mt: 2 }}> 
                       <TextField 
                         label="Contraseña" 
                         type='password' 
                         placeholder='' 
                         fullWidth
                         name='password'
                         value={ password }
                         onChange={ onInputChange }
                         error={ !!passwordValid && formSubmitted}
                         helperText={ passwordValid }
                       />
                   </Grid>
               
                   <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        
                        <Grid 
                          item 
                          xs={ 12 }
                          display={ !!errorMessage ? '': 'none' }
                        >
                          <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>

                       <Grid item xs={ 12 }>
                           <Button 
                              disabled={isCheckingAuthentication}
                              type='submit'
                              variant='contained' 
                              fullWidth 
                              >
                                Crear Cuenta
                           </Button>
                       </Grid>
                   </Grid>
           
                   <Grid container direction='row' justifyContent='end'>
                     <Typography sx={{ mr: 1 }}>¿ya tienes una cuenta?</Typography>
                     <Link component={ RouterLink } color='inherit' to="/auth/login">
                       regresar
                     </Link>                       
                   </Grid>

               </Grid>
            </form>

        </AuthLayout>

    )
} 
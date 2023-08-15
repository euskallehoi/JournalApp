import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, Typography, TextField} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

const formData = {
    email: 'elMasCaverga@gmail.com',
    password: '123456',
    displayName: 'Leon',
} 

export const RegistrerPage = () => {

  const { displayName, email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log( formState );
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
                       />
                   </Grid>
               
                   <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                       <Grid item xs={ 12 }>
                           <Button 
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
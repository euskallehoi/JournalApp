import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, Typography, TextField} from '@mui/material'
import { Google, } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'


export const RegistrerPage = () => {
    return (
        <AuthLayout title="Crear Cuenta">

            <form>
               
               <Grid container>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>

                    <TextField  
                      label="Nombre completo" 
                      type='text' 
                      placeholder='' 
                      fullWidth
                    />

                    </Grid>

                   <Grid item xs={ 12 } sx={{ mt: 2 }}>

                       <TextField  
                         label="Correo" 
                         type='email' 
                         placeholder='' 
                         fullWidth
                       />

                   </Grid>         

                   <Grid item xs={ 12 } sx={{ mt: 2 }}> 
                       <TextField 
                         label="Contraseña" 
                         type='password' 
                         placeholder='' 
                         fullWidth
                       />
                   </Grid>
               
                   <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                       <Grid item xs={ 12 }>
                           <Button variant='contained' fullWidth >
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
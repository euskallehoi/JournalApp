import { SaveOutlined } from '@mui/icons-material'
import {Grid, Typography, TextField, Button} from '@mui/material'
import { ImageGallery } from '../components'


export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid>
                <Typography fontSize={ 39 } fontWeight='light'>29 de julio, 2023</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder='ingrese un titulo'
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder='¿que sucedio hoy?'
                    minRows={ 5 }
                />
            </Grid>

            <ImageGallery />


        </Grid>
    )
}
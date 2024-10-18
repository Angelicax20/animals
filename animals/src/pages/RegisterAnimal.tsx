import {FC, useState} from 'react';
import { TextField, Button, Box, MenuItem, Typography } from '@mui/material';

interface FormData {
  especie: string;
  edad: number;
  situacion: string;
  ubicacion: string;
  ayuda: string;
  descripcion: string;

}
const speciesOptions = ['Perro', 'Gato', 'Ave', 'Otro'];
const situacionOptions = ['Adoptado', 'En espera', 'Perdido','Abandono','Enfermedad','Maltrato'];
const ayudaOptions = ['Alimentos', 'Adopcion', 'Hogar de paso'];


const RegisterAnimal: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    especie: '',
    edad: 0,
    situacion: '',
    ubicacion:'',
    ayuda: '',
    descripcion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado', formData);
    setFormData({

      especie: '',
      edad: 0,
      situacion: '',
      ubicacion:'',
      ayuda: '',
      descripcion: ''

    })
    // Aquí puedes agregar la lógica para enviar los datos a un servidor o procesarlos
  };

  return (
    <Box 
    component="form" 
    sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 700, minWidth:500, margin: 'auto' }}
    onSubmit={handleSubmit}
  >
    <Typography variant="h5" gutterBottom>Formulario de Registro</Typography>

    {/* Campo Especie */}
    <TextField
      select
      label="Especie"
      name="especie"
      value={formData.especie}
      onChange={handleChange}
      fullWidth
      required
    >
      {speciesOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>

    {/* Campo Edad */}
    <TextField
      label="Edad"
      name="edad"
      type="number"
      value={formData.edad}
      onChange={handleChange}
      fullWidth
      required
    />

    {/* Campo Situación */}
    <TextField
      select
      label="Situación"
      name="situacion"
      value={formData.situacion}
      onChange={handleChange}
      fullWidth
      required
    >
      {situacionOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>

    {/* Campo Ayuda */}
    <TextField
      select
      label="Ayuda"
      name="ayuda"
      value={formData.ayuda}
      onChange={handleChange}
      fullWidth
      required
    >
      {ayudaOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>

    {/* Campo Descripción */}
    <TextField
      label="Descripción"
      name="descripcion"
      value={formData.descripcion}
      onChange={handleChange}
      fullWidth
      multiline
      rows={4}
      required
    />

    <Button type="submit" variant="contained" color="primary">
      Enviar
    </Button>
  </Box>
  );
}

export default RegisterAnimal;

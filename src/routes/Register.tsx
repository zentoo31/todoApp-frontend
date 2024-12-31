import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Register() {

  useEffect(() => {
      document.title = "Registrarse - TODOapp"
    }, [])

  return (
    <main className="m-2 flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-5 border-2 rounded-md p-5 animate-fade-in-up w-96">
        <h1 className="text-2xl text-center">Regístrate</h1>
        <TextField id="outlined-basic" label="Correo" variant="outlined" type="email" required />
        <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="password" required />
        <Button variant="contained">Iniciar Sesión</Button>
        <span className="font-normal text-center flex flex-row gap-2 items-center justify-center">
          ¿No tienes una cuenta?
          <Link to={"/login"} className="text-blue-500">
            Inicia sesión
          </Link>
        </span>
      </div>
    </main>
  )
}

export default Register
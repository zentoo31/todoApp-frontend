import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

function Login() {
  const notify = () => toast.success('Successfully toasted!')

  useEffect(() => {
    document.title = "Iniciar Sesión - TODOapp"
  }, [])

  return (
    <main className="m-2 flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-5 border-2 rounded-md p-5 animate-fade-in-down w-96">
        <h1 className="text-2xl text-center">Iniciar sesión</h1>
        <TextField id="outlined-basic" label="Correo" variant="outlined" type="email" required />
        <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="password" required />
        <Button variant="contained" onClick={notify}>Iniciar Sesión</Button>
        <span className="font-normal text-center flex flex-row gap-2 items-center justify-center">
          ¿No tienes una cuenta?
          <Link to={"/register"} className="text-blue-500">
            Regístrate
          </Link>
        </span>
      </div>
    </main>
  )
}

export default Login
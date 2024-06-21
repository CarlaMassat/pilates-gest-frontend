import { useEffect } from "react";
import { useForm, } from "../../../hooks/useForm";
import { useLoginStore } from "../../../hooks/useLoginStore";
import logo from '../../../assets/images/logo.png';
import Swal from 'sweetalert2'
import "./LoginPage.css";


const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
  loginDni: "",
};

const registerFormFields = {
  registerNombre: "",
  registerApellido: "",
  registerDNI: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: "",
};


export const LoginPage = () => {

    const {startLogin,startRegister,errorMessage} = useLoginStore();

  const {
    loginEmail,
    loginPassword,
    loginDni,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword, dni: loginDni });
  };

  const {
    RegisterNombre,
    RegisterApellido,
    RegisterDNI,
    RegisterEmail,
    RegisterPassword,
    RegisterPassword2,

    onInputChange: onRegisterInputChange,
  } = useForm(registerFormFields);

  const registerSubmit = (event) => {
    event.preventDefault();
    if (RegisterPassword !== RegisterPassword2) {
      Swal.fire({
        text: 'Error, las contraseñas no coinciden',
        icon: 'warning',
      });
    
    } else {
      Swal.fire({
        text: 'Usuario creado!',
        icon: 'success',
      });
  }

  startRegister({
    nombre: RegisterNombre,
    apellido: RegisterApellido,
    dni: RegisterDNI,
    email: RegisterEmail,
    password: RegisterPassword,
  });
};

useEffect(() => {
  if (errorMessage !== undefined) {
    Swal.fire('Error', errorMessage, 'error');
  }
}, [errorMessage])



  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <img src={logo} alt="Logo" className="logo" />
          <h3>¡Hola! Te damos la bienvenida</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="loginEmail"
                value={loginEmail}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={loginPassword}
                onChange={onLoginInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="DNI"
                name="loginDni"
                value={loginDni}
                onChange={onLoginInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Ingresar" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Crear Cuenta</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="RegisterNombre"
                value={RegisterNombre}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                name="RegisterApellido"
                value={RegisterApellido}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="DNI"
                name="RegisterDNI"
                value={RegisterDNI}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="RegisterEmail"
                value={RegisterEmail}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="RegisterPassword"
                value={RegisterPassword}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="RegisterPassword2"
                value={RegisterPassword2}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

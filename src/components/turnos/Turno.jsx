
import { Navbar } from "../Navbar"
import { useDispatch, useSelector } from 'react-redux';
import { getTurnos,deleteTurno } from "../../store/turnos/turnoSlice"; 
import { useEffect } from "react";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

export const Turno = () => {
  const dispatch = useDispatch();
  const { turnos, loading, error } = useSelector((state) => state.turnos.turnos);

  useEffect(() => {
    dispatch(getTurnos());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTurno(id));
  };

  if (loading) return <div className="alert alert-info">Loading...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <>
     <Navbar />

    <div className="container mt-4">
        <h1 className="mb-4">Turnos</h1>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                {/* <th>Alumno</th>   */}
                <th>Dia</th>
                <th>Hora</th>
                <th>Fijo</th>
                <th>Tipo de Actividad</th>
                <th>Disponibilidad</th>
                <th>Dia Reprogramado</th>
                <th>Dia Semana</th>
                <th></th>
                {/* <th>Hora</th> */}
               
              </tr>
            </thead>
            <tbody>
              {turnos?.map((item) => (
                <tr key={item.id}>
                  <td>{item.diaFijo}</td>
                  <td>{item.horaFija}</td>
                  <td>{item.fijo}</td>
                  <td>{item.tipoActividad}</td>
                  <td>{item.disponibilidad}</td>
                  <td>{item.dia}</td>
                  <td>{item.diaSemana}</td>
                  {/* <td>{item.hora}</td> */}
                  <td>
                    <EditIcon/>
                    <DeleteIcon
                    onClick={() => handleDelete(item.id)}
                    />
                    {/* <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
   
  )
}

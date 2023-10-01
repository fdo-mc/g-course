import { useState } from "react"
import "./table.css"
import { useEffect } from "react";

const Table = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
        .then((response) => response.json())
        .then(({ results }) => setUsers(results))
    },[])
        //console.log( users.length);
    return (
        //users.length>0 &&
    <div className="table">
        <table>
            <thead>
                <tr>
                    <th scope="col">Foto</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>País</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            { 
            
                users.map((user,index)=>{
                    return (<tr key={index}>
                    <td><img src={ user.picture.thumbnail } alt="" /></td>
                    <td>{user.name.first}</td>
                    <td>{user.name.last}</td>
                    <td>{user.location.country}</td>
                    <td><button>Borrar</button></td>
                </tr>)
                })
                
            }
                
            </tbody>
        </table>
    </div>
  )
}

export default Table
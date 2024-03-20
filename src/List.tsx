import { useEffect, useState } from "react";
import { User } from "./models/users.model";
import { httpGetRequest } from "./services/http.service";

const List = ({ loader }: any) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            loader(true);
            const userList = await httpGetRequest('users');
            setUsers(userList);
            loader(false);
        }

        getUsers();
    }, [])

    return (
        <div className="h-100 py-5">
            <h3 className="text-center"> User List </h3>
            <div className="p-5">

                <table className="w-100">
                    <thead>
                        <tr>
                            <th> Sr.No. </th>
                            <th> Full Name </th>
                            <th> Mobile No. </th>
                            <th> Age </th>
                            <th> Gender </th>
                            <th> Date of Birth </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user: User) => (
                                <tr key={user.id}>
                                    <td> {user.id} </td>
                                    <td> {user.full_name} </td>
                                    <td> {user.gender} </td>
                                    <td> {user.age} </td>
                                    <td> {user.mobile_number} </td>
                                    <td> {user.date_of_birth} </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List
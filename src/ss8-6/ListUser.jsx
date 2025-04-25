import React from "react";
import { listUser } from "../data/dataUser";
import { useNavigate } from "react-router-dom";
const ListUser = () => {
    const navigate = useNavigate();
    return (
        <div className="flex gap-2 w-full h-[100vh] justify-center items-center">
            {listUser &&
                listUser.map((user) => {
                    return (
                        <div key={user.id} className="border-[1px] p-5">
                            <div>Id:{user.id}</div>
                            <div>UserName: {user.name}</div>
                            <div>Email: {user.email}</div>
                            <div>Address: {user.address}</div>
                            <button
                                className="bg-gray-300 w-full border mt-1 p-1"
                                onClick={() =>
                                    navigate(`/user-detail/${user.id}`)
                                }
                            >
                                Xem chi tiết
                            </button>
                        </div>
                    );
                })}
        </div>
    );
};

export default ListUser;
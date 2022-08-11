import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../Api/Config';
import { COLUMNS } from '../Utils/Columns';
import { Styles } from '../CSS/Styles';
import OrderTable from './Table';

function Order() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async () => {
        try {
            const token = localStorage.getItem("token");
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                accept: "application/json",
            }
            const res = await axios.get(BASE_URL + "Delivery/Order?offset=1&limit=500", { headers });
            const orders = JSON.parse(res.data)
            setOrders(orders.data);
            setLoading(true);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getUsers();
    }, []);

    const columns = React.useMemo(
        () => COLUMNS,
        []
    )
    return (
        <div>
            {loading &&
                <Styles>
                    <OrderTable columns={columns} data={orders} />
                </Styles>
            }
        </div>
    )
}

export default Order;
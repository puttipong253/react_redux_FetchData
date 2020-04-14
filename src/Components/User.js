import React, { useEffect } from "react";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { useFetch } from '../APIservice/Fetch';
import { getUser } from '../Stores/User/action'

function User({ userData, getUser }) {
    const [data, loading] = useFetch();

    useEffect(() => {
        getUser(data)
    }, [getUser, data])

    const columns = [
        {
            Header: "Id",
            accessor: "id"
        },
        {
            Header: "Image",
            Cell: (row) => {
                return <div>
                    <img height={34} alt='pic' src={row.original.avatar_url} />
                </div>
            },
        },
        {
            Header: "Name",
            accessor: "login"
        },
        {
            Header: "Type",
            accessor: "type"
        },
        {
            Header: "Link",
            Cell: ({ row }) => {
                return (
                    <div>
                        <Link to={`/userdetail/${row.login}`}>
                            <button>Detail</button>
                        </Link>
                    </div>
                );
            },
        },
    ]
    return (
        <div>
            {loading ? ("Loading...") : (
                <ReactTable columns={columns} data={userData} className="table">
                </ReactTable>
            )}
        </div>
    );
}
const mapStateToProps = (state) => ({
    userData: state.userReducer.data

})
export default connect(mapStateToProps, { getUser })(User);
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getUserDetail } from '../Stores/User/Detail/action';

const UserDetail = ({ match, userDetail, getUserDetail }) => {

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        async function FetchDetail() {
            // ดึงข้อมูลจาก api
            const response = await fetch(`https://api.github.com/users/${match.params.login}`);
    
            // ให้ข้อมูลอยู๋ในรูปแบบ json
            const json = await response.json();
    
            //เก็บข้อมูลไว้ใน detail
            setDetail(json);
        }
        FetchDetail()
    }, [match.params.login])

    useEffect(() => {
        getUserDetail(detail)
    }, [getUserDetail, detail])

    return (
        <div>
            {userDetail.login} < br />
            {userDetail.id} < br />
            {userDetail.type} < br />
            <img src={userDetail.avatar_url} alt="img" width="100" /> <br />
            <Link to={`/`}>
                <button>User</button>
            </Link>
        </div>
    );
}
const mapStateToProps = (state) => ({
    userDetail: state.userDetailReducer.detail
})
export default connect(mapStateToProps, { getUserDetail })(UserDetail);

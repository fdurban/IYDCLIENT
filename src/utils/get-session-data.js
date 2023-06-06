import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import userService from '../services/user.services';

function useGetSessionData() {
    const { user } = useContext(AuthContext)
    const [sessionData, setSessionData] = useState({})

    useEffect(() => {
        userService
            .getUsersById(user?._id)
            .then(({ data }) => { setSessionData(data) })
            .catch(err => console.log(err))
    }, [user])

    return sessionData && sessionData
}

export default useGetSessionData
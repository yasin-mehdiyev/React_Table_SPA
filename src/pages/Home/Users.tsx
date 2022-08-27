import React, { Fragment, useLayoutEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/features/user/userAction';
import { selectUsers, setSelectedUsers } from '../../redux/features/user/userSlice';

// Components
import Table from '../../components/HOC/Table';

// Helpers
import { COLUMNS } from '../../helpers/columns';
import { formalizePassingData } from '../../helpers/helperFunctions';

const Home: React.FC = () => {
    const dispatch = useDispatch<any>();
    const users: any = useSelector<any>(selectUsers);

    useLayoutEffect(() => {
        try {
            dispatch(fetchUsers());
            dispatch(setSelectedUsers({}));
        } catch (error) {
            console.log('error: ', error);
        }
    }, []);


    const passData = (name: any, value: any): void => {
        const result = formalizePassingData(name, value);
        dispatch(setSelectedUsers(result));
    };

    return (
        <Fragment>
            {
                users && users.length > 0 && (
                    <Table
                        name="users"
                        passData={passData}
                        column={COLUMNS}
                        datas={users}
                        existSorting={true}
                        existSearching={true}
                        existSelectRow={true}
                    />
                )
            }
        </Fragment>
    )
}

export default Home;
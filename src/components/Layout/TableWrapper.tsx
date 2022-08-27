import React, { Fragment } from 'react';

type Props = {
    children: any
};

const TableWrapper: React.FC<Props> = ({ children }) => {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default TableWrapper;
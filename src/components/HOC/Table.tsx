import React, { useMemo } from 'react';
import { useGlobalFilter, useSortBy, useRowSelect, useTable } from 'react-table';

// React-Router-Dom
import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { selectUserRows } from '../../redux/features/user/userSlice';

// Components
import TableWrapper from '../Layout/TableWrapper';
import Search from './Search';
import Checkbox from './Checkbox';
import Button from './Button';

// Models(Types and Interfaces)
import TableProps from '../../models/types/Table';
import { BodyGroupProps, HeaderGroupProps, HookProps } from '../../models/types/UI';
import User from '../../models/interfaces/User';

// Module CSS

import tableClasses from "../../styles/Table.module.css";
import buttonClasses from "../../styles/Button.module.css";
import commonClasses from "../../styles/Common.module.css";

const Table: React.FC<TableProps> = ({
    name,
    passData,
    column,
    datas,
    existSorting,
    existSearching,
    existSelectRow
}) => {
    const navigate: any = useNavigate();
    const selectedUsers: any = useSelector<any>(selectUserRows);

    const columns: any = useMemo(() => column, []);
    const data: User[] = useMemo(() => datas, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        selectedFlatRows
    } = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy, useRowSelect,
        existSelectRow ? ((hooks: HookProps) => {
            hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }: any) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell: ({ row }: any) => <Checkbox {...row.getToggleRowSelectedProps()} />
                },
                ...columns
            ])
        }) as any : "",
    ) as any;

    const { globalFilter }: string | any = state;

    // Display Heading of the Table
    const tableHead = (
        <thead>
            {headerGroups.map((headerGroup: HeaderGroupProps) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(existSorting && column.getSortByToggleProps())}>
                            {column.render('Header')}
                            {
                                existSorting && (
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                )
                            }
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
    );

    // Display Body of the Table
    const tableBody = (
        <tbody {...getTableBodyProps()}>
            {rows.map((row: BodyGroupProps) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })}
        </tbody>
    );

    const saveSelectedRows = (): void => {
        if (existSelectRow) {
            passData(name, selectedFlatRows, true);
        }
    };

    const viewSelectedRows = (): void => {
        navigate("/selectedUsers");
    };

    return (
        <TableWrapper>

            {
                existSearching && (
                    <div className={commonClasses.text_center}>
                        <Search filter={globalFilter} setFilter={setGlobalFilter} />
                    </div>
                )
            }

            {
                existSelectRow && selectedFlatRows && selectedFlatRows?.length > 0 && (
                    <div className={`${commonClasses.text_right} ${commonClasses.margin_bottom}`}>
                        <Button handleClick={saveSelectedRows} className={buttonClasses.save}>Save selected rows</Button>
                        {
                            selectedUsers && selectedUsers?.value && selectedUsers?.value?.length > 0 && (
                                <Button handleClick={viewSelectedRows} className={buttonClasses.view_selected}>View selected rows</Button>
                            )
                        }
                    </div>
                )
            }

            <table {...getTableProps()} className={tableClasses.basicTable}>
                {tableHead}
                {tableBody}
            </table>

        </TableWrapper>
    )
}

export default Table;
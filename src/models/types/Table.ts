import User from "../interfaces/User";
import ColumnProps from "./Column";

type TableProps = {
    name: string;
    passData?: Function | any;
    isSave?: boolean | any;
    column: ColumnProps[],
    datas: User[] | Array<any>,
    existSorting?: boolean;
    existSearching?: boolean;
    existSelectRow?: boolean;
};

export default TableProps;
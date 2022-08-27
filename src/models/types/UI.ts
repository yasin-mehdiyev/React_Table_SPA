export type HookProps = {
    visibleColumns: ((columns: any) => any[])[];
};

export type HeaderGroupProps = {
    getHeaderGroupProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>;
    headers: any[];
};

export type BodyGroupProps = {
    getRowProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>;
    cells: any[];
};
import React, { forwardRef, Fragment, useEffect, useRef } from 'react';

type Props = {
    indeterminate: any,
    [key: string]: any;
};

const Checkbox: React.FC<Props> = forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef<any>();
    const resolvedRef: any = ref || defaultRef

    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate]);

    return (
        <Fragment>
            <input type='checkbox' ref={resolvedRef} {...rest} />
        </Fragment>
    )
});

export default Checkbox;
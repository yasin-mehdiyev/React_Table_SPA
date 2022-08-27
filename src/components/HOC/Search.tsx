import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { AiOutlineSearch } from 'react-icons/ai';
import searchClasses from "../../styles/Searchbox.module.css";

type Props = {
    filter: string,
    setFilter: Function,
};

const Search: React.FC<Props> = ({ filter, setFilter }) => {

    const [value, setValue] = useState<string>(filter);

    const onChange = useAsyncDebounce((value: string): any => {
        setFilter(value || undefined);
    }, 500);

    return (
        <>
            <div className={searchClasses.searchbox}>
                <input
                    onChange={(e) => {
                        setValue(e.target.value);
                        onChange(e.target.value)
                    }}
                    value={value || ""}
                    placeholder="Search..."
                />
                <div className={searchClasses.icon}>
                    <AiOutlineSearch />
                </div>
            </div>
        </>
    )
}

export default Search;
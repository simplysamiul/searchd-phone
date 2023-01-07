import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../../styles/Home/SearchField.module.css';
const SearchField = () => {
    const router = useRouter();
    const [searchData, setSearchData] = useState();
    // console.log(searchData)
    const handelSearch = (e) => {
        if(e.key === "Enter"){
            setSearchData(e.target.value)
            router.push(`/search/${e.target.value}`)
        }
    }
    return (
        <div className={styles.search_area}>
            <div className={styles.search_title}>
                <h1>Please Search Your phone</h1>
            </div>
            <div className={styles.search_input}>
                <input onKeyDown={handelSearch} type="text" placeholder='Search your phone ........' />
            </div>
        </div>
    );
};

export default SearchField;
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchField from "../../src/component/Home/SearchField"; 
import SpecificPhone from "../../src/component/Phone/SpecificPhone";
import styles from "../../styles/Phone/SearchData.module.css";


const SearchData = ({phones}) => {
    return (
        <div>
            <SearchField />
           <div className={styles.phones_container}>
           <div className={styles.phones_area}>
                {
                    phones.map((phone) => {
                        return(
                            <SpecificPhone key={phone?.slugz} phone={phone}  />
                        )
                    })
                }
            </div>
           </div>
        </div>
    );
};

export default SearchData;


export const getServerSideProps = async (context) => {
    const {params} = context;
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${params.searchtext}`)
    const data = await res.json()
    return{
        props : {
            phones : data.data
        }
    }
}
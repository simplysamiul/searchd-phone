import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../../../styles/Phone/SpecificPhone.module.css';

const SpecificPhone = ({phone}) => {
    console.log(phone)
    const router = useRouter();
    const {slug, phone_name, image, brand} = phone;
    const handelPhoneDetails  = (slug) => {
        router.push(`/details/${slug}`)
    }
    return (
        <div className={styles.specific_phone}>
            <div className="phone_img" onClick={() => handelPhoneDetails(slug)}>
                <Image
                className={styles.phone_img}
                src={image}
                width={200}
                height={200}
                alt="not found ......!!"
                style={{cursor: "pointer"}}
                />
            </div>
            <div className={styles.phone_details}>
                <h2>Phone Name : {phone_name}</h2>
                <h2>Brand : {brand}</h2>
                <button onClick={() => handelPhoneDetails(slug)}>Details</button>
            </div>
        </div>
    );
};

export default SpecificPhone;
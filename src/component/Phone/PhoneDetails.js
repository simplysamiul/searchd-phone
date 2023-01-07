import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../../../styles/Phone/PhoneDetails.module.css';

const DetailsPhone = ({phoneDetails}) => {
    const router = useRouter();
    const {brand, image, name, } = phoneDetails;
    const {Bluetooth, GPS, NFC, Radio, USB, WLAN} = phoneDetails.others;
    const {chipSet, displaySize, memory, storage} = phoneDetails.mainFeatures;
    // handelBrandProduct
    const handelBrandProduct = (brand) => {
        router.push(`/search/${brand}`)
    }
    return (
        <>
                <div className={styles.phone_details}>
            <div className={styles.phone_details_img}>
                <Image 
                src={image}
                alt="Img not found .....!"
                width={300}
                height={300}
                />
            </div>
            <div className={styles.phone_details_info}>
                <h1>{name}</h1>
                <div className={styles.features}>
                    <h2>Features</h2>
                    <div className={styles.features_details}>
                    <p>ChipSet : {chipSet}</p>
                    <p>Display_Size : {displaySize}</p>
                    <p>Memory : {memory}</p>
                    <p>Storage : {storage}</p>
                    </div>
                </div>
                <div className={styles.others}>
                    <h2>Others</h2>
                    <div className={styles.others_info}>
                        <p>Brand : {brand}</p>
                        <p>Bluetooth : {Bluetooth}</p>
                        <p>GPS : {GPS}</p>
                        <p>NFC : {NFC}</p>
                        <p>Radio : {Radio}</p>
                        <p>USB : {USB}</p>
                        <p>WLAN : {WLAN}</p>
                    </div>
                </div>
            </div>
        </div>
       <div className={styles.brand_products}>
       <button
        onClick={() => handelBrandProduct(brand)}>
            Show All {brand} Products
        </button>
       </div>
        </>
    );
};

export default DetailsPhone;
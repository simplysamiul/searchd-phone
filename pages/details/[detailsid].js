import { useRouter } from "next/router";
import DetailsPhone from "../../src/component/Phone/PhoneDetails";

const PhoneDetails = ({phoneDetails}) => {
    return (
        <div>
            <div>
                <DetailsPhone phoneDetails={phoneDetails} />
            </div>
        </div>
    );
};

export default PhoneDetails;



export const getServerSideProps = async(context) => {
    const {detailsid} = context.params;
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${detailsid}`)
    const data = await res.json()
    return{
        props : {
            phoneDetails : data.data
        }
    }
}
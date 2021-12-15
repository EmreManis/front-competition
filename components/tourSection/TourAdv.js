import Image from "next/image";

import tourAdv from "../../public/tour/touradv.png"; 

const TourAdv = () => {
    return (
        <div className="mt-8">
            <Image src={tourAdv} alt="Roma"/>
        </div>
    )
}

export default TourAdv;
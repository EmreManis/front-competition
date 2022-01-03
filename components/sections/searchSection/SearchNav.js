import Image from "next/image";

import classes from "./searchSection.module.css"

import otelAra from "../../../public/icons/otelAra.svg";
import ucusAra from "../../../public/icons/ucusAra.svg";
import turAra from "../../../public/icons/turAra.svg";

const SearchNav = () => {
    return (
        <div className="md:mb-14 mb-6">
        <ul className="flex">
          <li className={`${classes.inpMargin} ${classes.borderColorful} h-8`}>
            <button>
              <Image src={otelAra} alt="tatil budur otel" />
              <span className="pl-2">Otel Ara</span>
            </button>
          </li>
          <li className={classes.inpMargin}>
            <button>
              <Image src={ucusAra} alt="tatil budur ucus" />
              <span className="pl-2 poppinsRegular cyanTone">Uçuş Ara</span>
            </button>
          </li>
          <li className={classes.inpMargin}>
            <button>
              <Image src={turAra} alt="tatil budur tur" />
              <span className="pl-2 poppinsRegular cyanTone">Tur Ara</span>
            </button>
          </li>
        </ul>
      </div>
    )
} 

export default SearchNav;
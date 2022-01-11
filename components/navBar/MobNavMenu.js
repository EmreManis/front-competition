import { useState } from "react";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";

import classes from "./navigation.module.css";

import arrowDownIcon from "../../public/icons/arrowDown.webp";
import menuForwardIcon from "../../public/icons/menuForwardIcon.webp";
import account from "../../public/icons/person.svg";
import closeMenu from "../../public/icons/close.webp";
import burgerMenu from "../../public/icons/menu.webp";

const MobNavMenu = (props) => {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  const subMenuHandler = () => {};

  return (
    <Popover className="flex col-span-2 justify-center">
      <Popover.Button
        ref={setReferenceElement}
        className={`${classes.menuItem} flex items-center`}
      >
        <span className="ml-2 flex justify-center">
          <Image src={burgerMenu} alt="tatil budur menu" />
        </span>
        <span className="poppins10">{props.title}</span>
      </Popover.Button>
      <Popover.Panel
        className={`bg-white z-10 borderRadius26 ${classes.panel}`}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {({ close }) => (
          <div
            className={`mx-6 my-20 ${classes.fontInherit} ${classes.mobileMenu}`}
          >
            <div className="flex flex-col">
              <div className="flex justify-between">
                <Image src={account} alt="uyelik" />
                <button onClick={close}>
                  <Image src={closeMenu} alt="" width={18} height={18}/>
                </button>
              </div>
              <span className="poppins14 mb-4">
                Giriş yaptığınızda daha düşük fiyatlar görürsünüz!
              </span>
              <button className={`poppins14 ${classes.buttonMob}`}>
                Üye Olun / Giriş Yapın
              </button>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center border-y-2 h-16">
                <span>Oteller</span>
                <Image src={arrowDownIcon} alt="" width={7} height={5}/>
              </div>
              <div className="flex justify-between items-center border-b-2 h-16">
                <span>Uçuşlar</span>
                <Image src={menuForwardIcon} alt=""/>
              </div>
              <div className="flex justify-between items-center border-b-2 h-16">
                <span>Turlar</span>
                <Image src={arrowDownIcon} alt=""width={7} height={5} />
              </div>
              <div className="flex justify-between items-center border-b-2 h-16">
                <span>Kampanyalar</span>
                <Image src={menuForwardIcon} alt="" />
              </div>
            </div>
            <div className="flex flex-col border-b-2 pb-2 mb-3">
              <span className="poppins12 opacity-50 my-4">YARDIM</span>
              <div className="flex justify-between">
                <span>Müşteri İlişkileri </span>
                <span>0 850 333 3 333</span>
              </div>
              <span className="my-4">Canlı Yardım </span>
              <span>Sıkça Sorulan Sorular</span>
            </div>
            <span>Uygulamayı İndirin</span>
          </div>
        )}
      </Popover.Panel>
    </Popover>
  );
};

export default MobNavMenu;

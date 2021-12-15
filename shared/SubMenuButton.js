const active = "pb-3 poppinsSemiBold borderMenu";

const SubMenuButton = props => {
  return (
      <li className={props.padding}>
        <button>
         <span className={`poppinsRegular poppins14 ${props.isActive && active}`}>
            {props.title}
          </span>
        </button>
      </li>
  );
};

export default SubMenuButton;

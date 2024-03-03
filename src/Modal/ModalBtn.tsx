import "./ModalBtn.css";

interface ModalBtnProps {
  type?: string;
  children: React.ReactNode;
  size?: string;
  onClick: () => void;
}

export const ModalBtn: React.FC<ModalBtnProps> = ({
  type,
  children,
  size,
  onClick,
}) => {
  //! Лучше использовать, а вложенные тернарники это плохо
  // const classMap = {
  //   primary: {
  //     large: "modalbtn primary large",
  //     default: "modalbtn primary",
  //   },
  //   default: "modalbtn",
  /*
  getClass = (type, size) => {
    return classMap[type][size] || classMap[type] || classMap.default
  }
  */
  const btnClass =
    type === "primary"
      ? size === "large"
        ? "modalbtn primary large"
        : "modalbtn primary"
      : "modalbtn";
  return (
    //classMap[type][size] || classMap[type] || classMap.default
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

import classNames from "classnames";

interface EdgeFadeProps {
  bgColor: string;
}
const EdgeFade: React.FC<EdgeFadeProps> = ({ bgColor }) => {
  return (
    <div
      className={classNames(
        `h-full w-[16px] bg-gradient-to-r from-[${bgColor}] to-transparent`,
      )}
    />
  );
};

export default EdgeFade;

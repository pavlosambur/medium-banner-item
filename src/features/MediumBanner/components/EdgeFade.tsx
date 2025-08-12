import classNames from "classnames";

interface EdgeFadeProps {
  bgColor: string;
}
const EdgeFade: React.FC<EdgeFadeProps> = ({ bgColor }) => {
  return (
    <div
      className={classNames(`h-full w-[16px]`)}
      style={{
        background: `linear-gradient(to right, ${bgColor}, transparent)`,
      }}
    />
  );
};

export default EdgeFade;

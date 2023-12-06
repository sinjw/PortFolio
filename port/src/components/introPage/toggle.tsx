import { useState } from "react";

const ToggleContainers = () => {
  const [toggles, setToggles] = useState<Array<boolean>>([false, false]);

  const handleToggleClick = (index: number) => {
    setToggles((prevToggles) =>
      prevToggles.map((toggle, i) => (i === index ? !toggle : toggle))
    );
  };

  return (
    <div>
      {toggles.map((toggle, index) => (
        <Toggle
          key={index}
          toggle={toggle}
          onClick={() => handleToggleClick(index)}
        />
      ))}
    </div>
  );
};

const Toggle = ({
  toggle,
  onClick,
}: {
  toggle: boolean;
  onClick: () => void;
}) => {
  return <div onClick={onClick}>{toggle ? "ON" : "OFF"}</div>;
};

export default ToggleContainers;

import LeftScreen from "./LeftScreen";
import RightScreen from "./RightScreen";
import { useDispatch, useSelector } from "react-redux";
import { mainButton } from "./../reducer/buttonClick-reducer";
import { RootState } from "../../store/config";

const FirstPage = () => {
  const dispatch = useDispatch();
  const isButtonClicked = useSelector(
    (state: RootState) => state.buttonClicked
  );
  const handleButtonClick = () => {
    dispatch(mainButton(true));
  };
  return (
    <div>
      <LeftScreen></LeftScreen>
      <RightScreen></RightScreen>
      <button
        onClick={handleButtonClick}
        style={{ zIndex: 10, position: "absolute" }}
      >
        hi
      </button>
    </div>
  );
};

export default FirstPage;

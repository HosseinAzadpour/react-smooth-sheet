import React from "react";
import "../styles/BottomSheet.css";
import { BottomSheetHide } from "../functions/BottomSheetHide";
const EmptySpace = ({
  sendDataToParent,
  overlayDark,
  overlayBlur,
  bottomSheetElement,
  emptinessElement,
}) => {
  return (
    <div
      style={{
        opacity: `${overlayDark}`,
      }}
      ref={emptinessElement}
      className='emptiness'
      onClick={() => {
        BottomSheetHide(bottomSheetElement, sendDataToParent);
      }}
    ></div>
  );
};

export default EmptySpace;

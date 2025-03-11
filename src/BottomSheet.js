import React, { useState, useRef } from "react";
import "./styles/BottomSheet.css";
import useBottomSheetBlur from "./hooks/useBottomSheetBlur";
import useBottomSheetTouch from "./hooks/useBottomSheetTouch";
import useBottomSheetVisibility from "./hooks/useBottomSheetVisibility";
import EmptySpace from "./components/EmptySpace.jsx";
import Container from "./components/Container.jsx";
const BottomSheet = ({
  sendDataToParent = false,
  isOpen = false,
  children = "your Code",
  overlayDark = 0,
  overlayBlur = 2,
  backgroundColor = "lightGray",
}) => {
  var [touchStart, setTouchStart] = useState(0);
  var [touchMove, setTouchMove] = useState(0);
  var [lastTouchMove, setLastTouchMove] = useState(0);
  var [touchEnd, setTouchEnd] = useState(0);

  var bottomSheetElement = useRef();
  var emptinessElement = useRef();
  var containerElement = useRef();
  const vh = Math.round(window.innerHeight / (100 / 100));

  useBottomSheetTouch({
    bottomSheetElement,
    emptinessElement,
    touchStart,
    touchMove,
    lastTouchMove,
    isOpen,
    overlayBlur,
    overlayDark,
    vh,
    sendDataToParent,

    setTouchStart,
    setTouchMove,
    touchEnd,
  });
  useBottomSheetBlur({
    bottomSheetElement,
    emptinessElement,
    touchStart,
    touchMove,
    lastTouchMove,
    overlayBlur,
    overlayDark,
    vh,
  });

  useBottomSheetVisibility({
    isOpen,
    bottomSheetElement,
    overlayBlur,
  });

  return (
    <div ref={bottomSheetElement} className='bottomSheet'>
      <EmptySpace
        sendDataToParent={sendDataToParent}
        overlayDark={overlayDark}
        overlayBlur={overlayBlur}
        bottomSheetElement={bottomSheetElement}
        emptinessElement={emptinessElement}
      />
      <Container
        children={children}
        backgroundColor={backgroundColor}
        bottomSheetElement={bottomSheetElement}
        containerElement={containerElement}
        setLastTouchMove={setLastTouchMove}
        setTouchEnd={setTouchEnd}
        setTouchMove={setTouchMove}
        touchMove={touchMove}
        setTouchStart={setTouchStart}
        touchStart={touchStart}
      />
    </div>
  );
};

export default BottomSheet;

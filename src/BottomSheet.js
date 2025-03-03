import React, { useEffect, useState, useRef } from "react";
import "./BottomSheet.css";
import {
  scrollBottomSheet,
  BottomSheetShow,
  BottomSheetHide,
} from "./functions";
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
  useEffect(() => {
    const bottomSheetChild = bottomSheetElement.current.childNodes[1];
    //amount of the add room modal move to hide
    if (touchMove - touchStart > 0.35 * vh && lastTouchMove < touchMove) {
      BottomSheetHide(bottomSheetElement, sendDataToParent);
    } else if (isOpen) {
      BottomSheetShow(bottomSheetElement, overlayBlur);
      bottomSheetChild.style.bottom = `0`;
    }
    emptinessElement.current.style.opacity = overlayDark;
    bottomSheetElement.current.style.webkitBackdropFilter = `blur(${overlayBlur}px)`;
    bottomSheetElement.current.style.backdropFilter = `blur(${overlayBlur}px)`;
    setTouchStart(0);
    setTouchMove(0);
  }, [touchEnd]);

  useEffect(() => {
    const dragableOffsetTop = document
      .getElementById("dragable")
      .getBoundingClientRect().top;
    if (touchStart != 0 && dragableOffsetTop > touchStart) {
      bottomSheetElement.current.style.webkitBackdropFilter = `blur(${
        lastTouchMove < touchMove
          ? overlayBlur - (overlayBlur * dragableOffsetTop) / vh
          : (vh / dragableOffsetTop / 2) * overlayBlur
      }px)`;

      bottomSheetElement.current.style.backdropFilter = `blur(${
        lastTouchMove < touchMove
          ? overlayBlur - (overlayBlur * dragableOffsetTop) / vh
          : (vh / dragableOffsetTop / 2) * overlayBlur
      }px)`;
      emptinessElement.current.style.opacity = `${
        lastTouchMove < touchMove
          ? overlayDark - (overlayDark * dragableOffsetTop) / vh
          : (vh / dragableOffsetTop / 2) * overlayDark
      }`;
    }
  }, [touchMove]);

  useEffect(() => {
    if (isOpen != false) {
      BottomSheetShow(bottomSheetElement, overlayBlur);
    }
  }, [isOpen]);

  return (
    <div ref={bottomSheetElement} className='bottomSheet'>
      <div
        style={{
          opacity: `${overlayDark}`,
        }}
        className='emptiness'
        onClick={() => {
          BottomSheetHide(bottomSheetElement, sendDataToParent);
        }}
      ></div>
      <div
        className='container'
        style={{
          backgroundColor: `${backgroundColor}`,
        }}
        onTouchEnd={(e) => {
          e.target.localName == "section" &&
            setTouchEnd(e.changedTouches[0].clientY);
        }}
        onTouchStart={(e) => {
          e.target.localName == "section" &&
            setTouchStart(e.changedTouches[0].clientY);
        }}
        onTouchMove={(e) => {
          setLastTouchMove(touchMove);

          e.target.localName == "section" &&
            setTouchMove(e.changedTouches[0].clientY);
          scrollBottomSheet(touchStart, touchMove, vh, bottomSheetElement);
        }}
      >
        <section id='dragable' className='dragable'>
          <section></section>
        </section>

        <div ref={containerElement} className='content-area'>
          <div className='content'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;

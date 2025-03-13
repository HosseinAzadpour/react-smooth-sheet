import React from "react";
import "../styles/BottomSheet.css";
import { scrollBottomSheet } from "../functions/scrollBottomSheet";
const Container = ({
  children,
  backgroundColor,
  bottomSheetElement,
  containerElement,
  setLastTouchMove,
  setTouchEnd,
  setTouchMove,
  touchMove,
  setTouchStart,
  touchStart,
}) => {
  const vh = Math.round(window.innerHeight / (100 / 100));

  return (
    <div
      className='container'
      style={{
        backgroundColor: `${
          backgroundColor != undefined ? backgroundColor : "lightGray"
        }`,
      }}
      onTouchEnd={(e) => {
        e.target.localName == "section" &&
          setTouchEnd(e.changedTouches[0].clientY);
      }}
      onTouchStart={(e) => {
        {
          e.target.localName === "section" &&
            setTouchStart(e.changedTouches[0].clientY);
        }
      }}
      onTouchMove={(e) => {
        setLastTouchMove(touchMove);

        e.target.localName == "section" &&
          setTouchMove(e.changedTouches[0].clientY);
        scrollBottomSheet(touchStart, touchMove, vh, bottomSheetElement);
      }}
    >
      <section id='dragable' className='dragable'>
        <span />
      </section>

      <div ref={containerElement} className='content-area'>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

export default Container;

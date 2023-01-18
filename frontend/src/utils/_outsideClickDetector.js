import { useEffect, useRef } from "react"

const OutsideClickDetector = (ref, focus, unfocus, blockCondition) => {

   useEffect(() => {
      const handleClickOutside = e => {
         if (!blockCondition) {
            if (ref.current && !ref.current.contains(e.target)) {
               unfocus()
            } else {
               focus()
            }
         }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      }
   }, [ref, blockCondition]);
}

const OutsideAlerter = (props) => {
   const wrapperRef = useRef(null);
   const focus = props.focus;
   const unfocus = props.unfocus;
   const children = props.children;
   const blockCondition = props.blockCondition;

   OutsideClickDetector(wrapperRef, focus, unfocus, blockCondition)

   return (
      <div ref={wrapperRef}>{children}</div>
   )
}

export default OutsideAlerter;
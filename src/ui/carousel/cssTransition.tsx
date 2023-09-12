import { Children, PropsWithChildren, cloneElement, useRef } from "react";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import { CSSTransition as _CSSTransition } from "react-transition-group"

const CSSTransition = (props:PropsWithChildren<CSSTransitionProps>) => {
 const ref = useRef(null)
 return (
  <_CSSTransition
   {...props} 
   nodeRef={ref}>
   <>
    {Children.map(props.children, child => {
    // @ts-ignore
     return cloneElement(child,{ref: ref})
   })}
   </>
  </_CSSTransition>
 )
}
export default CSSTransition
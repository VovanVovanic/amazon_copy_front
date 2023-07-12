import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import * as userAction from '../store/user/actions'

const allActions = {
 ...userAction
}


export const useActions = () => {
 const dispatch = useDispatch()

 return useMemo(()=>bindActionCreators(allActions, dispatch),[dispatch])
}
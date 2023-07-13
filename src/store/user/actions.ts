import { auth } from '@/app/app.endpoints';
import { removeFromStorage } from '@/services/auth/auth.helper';
import { Auth } from '@/services/auth/auth.service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthResponse, IAuthVariants, IEmailPassword } from './types';

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(`${auth}${IAuthVariants.REGISTER}`,
 async (data, thunkApi) => {
  try {
   const res = await Auth.auth(IAuthVariants.REGISTER, data)
   return res
  } catch (e) {
   return thunkApi.rejectWithValue(e)
  }
 }
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(`${auth}${IAuthVariants.LOGIN}`,
 async (data, thunkApi) => {
  try {
   const res = await Auth.auth(IAuthVariants.LOGIN, data)
   return res
  } catch (e) {
   return thunkApi.rejectWithValue(e)
  }
 }
)

export const logout = createAsyncThunk(auth.logout, async () => {
 removeFromStorage()
})

export const refresh = createAsyncThunk(auth.refreshToken, async (_, thunkApi) => {
 try {
  const res = await Auth.getNewTokens()
  return res.data
 } catch (e) {
  return thunkApi.rejectWithValue(e)
 }
})
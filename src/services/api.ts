import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useAppSelector } from '../store/store'
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';


export const api:any = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
      postRegisterData: builder.mutation<void, counter>({
        query: (user) => ({
            url: '/registerUser',
            method: 'POST',
            body: user,
          }),
      }),
      postLoginData: builder.mutation<JSON,counter>({
        query: (user) => {
          return{
            url: '/loginUser',
            method: 'POST',
            body: user
          }},
      }),
      logoutUser: builder.query<void, void>({
        query: () => `/logout`,
      }),
  }),
})


export const { usePostRegisterDataMutation, usePostLoginDataMutation, useLazyLogoutUserQuery} = api
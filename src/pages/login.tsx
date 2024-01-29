import { useForm, SubmitHandler } from "react-hook-form"
import styles from '../style/register.module.css'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../store/reducers/login";
import { usePostLoginDataMutation } from "../services/api";
import { useAppDispatch } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface IFormInput {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().required("Email is a required field").matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    "Invalid email format"
  ),
  password: yup.string().required("Password is a required field")
});

export default function Login() {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const storeDispatch = useAppDispatch()
  const navigate = useNavigate()
  const [postLoginData,{data,isSuccess}] =  usePostLoginDataMutation()

  const onSubmit = async(data: IFormInput) => {
  
    if(data.email){
      console.log(data)
      await postLoginData(data).unwrap();
      navigate('/')
    }
    else{
      console.log("Data.email is undefined.")
    }
  };
  useEffect(()=>{
    if(isSuccess){
      const uData:counter = { 
        userStatus:"logged-in",
        name :data.username,
        email:data.email,
        password:data.password
      }
      storeDispatch(login(uData))
      localStorage.setItem('userLogged',JSON.stringify(uData))
    }
  },[isSuccess])
 
  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.lable}>Email</label>
      <input className={styles.input} {...register("email")}/>
      {errors.email && <p>{errors.email.message}</p>}

      <label className={styles.lable}>Password</label>
      <input className={styles.input} {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}

      <input className={styles.input2} type="submit" value="Login" />
    </form>
  )
}
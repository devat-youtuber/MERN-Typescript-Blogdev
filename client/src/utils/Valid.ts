import { IUserRegister, IBlog } from './TypeScript'

export const validRegister = (userRegister: IUserRegister) => {
  const { name, account, password, cf_password } = userRegister;
  const errors: string[] = [];

  if(!name){
    errors.push("Please add your name.")
  }else if(name.length > 20){
    errors.push("Your name is up to 20 chars long.")
  }

  if(!account){
    errors.push("Please add your email or phone number.")
  }else if(!validPhone(account) && !validateEmail(account)){
    errors.push("Email or phone number format is incorrect.")
  }

  const msg = checkPassword(password, cf_password)
  if(msg) errors.push(msg)

  return {
    errMsg: errors,
    errLength: errors.length
  }
}


export const checkPassword = (password: string, cf_password: string) => {
  if(password.length < 6){
    return ("Password must be at least 6 chars.")
  }else if(password !== cf_password){
    return ("Confirm password did not match.")
  }
}

export function validPhone(phone: string) {
  const re = /^[+]/g
  return re.test(phone)
}

export function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


// Valid Blog
export const validCreateBlog = ({
  title, content, description, thumbnail, category
}: IBlog) => {
  const err: string[] = []

  if(title.trim().length < 10){
    err.push("Title has at least 10 characters.")
  }else if(title.trim().length > 50){
    err.push("Title is up to 50 characters long.")
  }

  if(content.trim().length < 2000){
    err.push("Content has at least 2000 characters.")
  }

  if(description.trim().length < 50){
    err.push("Description has at least 50 characters.")
  }else if(description.trim().length > 200){
    err.push("Description is up to 200 characters long.")
  }

  if(!thumbnail){
    err.push("Thumbnail cannot be left blank.")
  }

  if(!category){
    err.push("Category cannot be left blank.")
  }

  return {
    errMsg: err,
    errLength: err.length
  }

}

// Shallow equality
export const shallowEqual = (object1: any, object2: any) => {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)

  if(keys1.length !== keys2.length) {
    return false;
  }

  for(let key of keys1) {
    if(object1[key] !== object2[key]){
      return false;
    }
  }
  
  return true;

}
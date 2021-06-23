import * as yup from 'yup';

export const userSchema = yup.object().shape({
   name: yup.string().required(),
   password: yup.string().required(),
   email: yup.string().email().required(),
   breed: yup.string().required(),
   pet: yup.string().required(),

})

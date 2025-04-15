import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import css from './RegistrationForm.module.css';
import { useId } from 'react';

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    };

    const idEmail = useId();
    const idName = useId();
    const idPassword = useId();

    return (
        <Formik initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}>

            <Form autoComplete="off" className={css.form}>
                <div className={css.container}>
                     <label htmlFor={idName} className={css.label}>Username
                    <Field id={idName} className={css.input} type='text' name='name'/>
                </label>
                </div>
               <div  className={css.container}>
                 <label htmlFor={idEmail} className={css.label}>Email
                    <Field id={idEmail} className={css.input} type='email' name='email'/>
                    </label>
                </div>
                <div  className={css.container}>
                     <label htmlFor={idPassword} className={css.label}>Password
                    <Field id={idPassword} className={css.input} type='password' name='password'/>
                </label>
                </div>
                
                <button className={css.button} type='submit'>Register</button>
            </Form>  
       </Formik> 
    );
 };
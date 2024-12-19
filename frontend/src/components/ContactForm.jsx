import { Form, Formik } from 'formik'
import React, { useCallback } from 'react'
import {FormControl, FormRow} from './UI/FormControl'
import * as Yup from 'yup';
const validationScema = Yup.object().shape({
    firstname: Yup.string().required('Name is required'),
    lastname: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]{11}$/, 'Invalid phone number').required('Phone is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
})
const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
}
function ContactForm() {
    const handleSubmit = useCallback((values) => {
        console.log(values)
    }, [])
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationScema}
        >
            {({ errors, touched }) => (
                <Form className='flex flex-col gap-4'>
                    <FormRow>
                        <FormControl>
                            <FormControl.Label htmlFor='firstname'>First Name</FormControl.Label>
                            <FormControl.Input
                                id='firstname'
                                className={`${errors.firstname && touched.firstname ? 'border-red-500' : ''}`}
                                name='firstname'
                                type='text'
                                placeholder='Your Name'
                            />
                            {errors.firstname && touched.firstname && <p className='text-red-500 text-sm'>{errors.firstname}</p>}
                        </FormControl>
                        <FormControl>
                            <FormControl.Label htmlFor='lastname'>Last Name</FormControl.Label>
                            <FormControl.Input
                                id='lastname'
                                className={`${errors.lastname && touched.lastname ? 'border-red-500' : ''}`}
                                name='lastname'
                                type='text'
                                placeholder='Your Name'
                            />
                            {errors.lastname && touched.lastname && <p className='text-red-500 text-sm'>{errors.lastname}</p>}
                        </FormControl>
                    </FormRow>
                    <FormRow>
                        <FormControl>
                            <FormControl.Label htmlFor='email'>Email</FormControl.Label>
                            <FormControl.Input
                                id='email'
                                name='email'
                                type='email'
                                className={`${errors.email && touched.email ? 'border-red-500' : ''}`}
                                placeholder='Your Email'
                            />
                            {errors.email && touched.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                        </FormControl>
                        <FormControl>
                            <FormControl.Label htmlFor='phone'>Phone Number</FormControl.Label>
                            <FormControl.Input
                                id='phone'
                                className={`${errors.phone && touched.phone ? 'border-red-500' : ''}`}
                                name='phone'
                                type='text'
                                placeholder='Your Phone Number'
                            />
                            {errors.phone && touched.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                        </FormControl>
                    </FormRow>
                    <FormControl>
                        <FormControl.Label htmlFor='subject'>Subject</FormControl.Label>
                        <FormControl.Input
                            id='subject'
                            name='subject'
                            type='text'
                            className={`${errors.subject && touched.subject ? 'border-red-500' : ''}`}
                            placeholder='Subject'
                        />
                        {errors.subject && touched.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}
                    </FormControl>
                    <FormControl>
                        <FormControl.Label htmlFor='message'>Message</FormControl.Label>
                        <FormControl.Textarea
                            id='message'
                            name='message'
                            className={`${errors.message && touched.message ? 'border-red-500' : ''}`}
                            placeholder='Your Message'
                        />
                        {errors.message && touched.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                    </FormControl>
                    <button type='submit' className='btn btn-primary'>Send</button>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm
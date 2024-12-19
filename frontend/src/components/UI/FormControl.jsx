import React from 'react'
import { Field } from 'formik'
import { Form } from 'react-router-dom'
function FormControl({ children, className = '', ...props }) {
  return (
    <div className={`${className} flex flex-col gap-3 w-full`} {...props}>
      {children}
    </div>
  )
}

FormControl.Label = function Label({ children, className = '', htmlFor, ...props }) {
  return (
    <label htmlFor={htmlFor} className={`text-neutral-500 text-sm ${className}`} {...props}>
      {children}
    </label>
  )
}

FormControl.Input = function Input({ className = '',type = 'text',id, ...props }) {
  return (
    <Field
      id={id}
      as="input"
      type={type}
      className={`p-3 border border-neutral-300 rounded-md focus:outline-none focus:border-primary ${className}`}
      {...props}
    />
  )
}

FormControl.Textarea = function Textarea({ className = '', ...props }) {
  return (
    <Field
      as="textarea"
      className={`p-3 border border-neutral-300 rounded-md focus:outline-none focus:border-primary ${className}`}
      {...props}
    />
  )
}

const FormRow = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex max-lg:flex-col gap-2 md:gap-3 ${className}`} {...props}>
      {children}
    </div>
  )
}

export { FormControl, FormRow }
import React, { useState, useEffect } from 'react';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Header from '../../components/Header/Header';

import './AddCocktailPage.scss';

function AddCocktailPage() {

  return (
    <div className="main-container">
      <Header />
      <div className="add-cocktail-container">
        <div className="container flex-center">

          <Formik
            initialValues={{ name: '', firstIngredient: '', secondIngredient: '', quantity: '', image: '' }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(20, 'Must be 30 characters or less')
                .required('Required'),
              firstIngredient: Yup.string()
                .max(10, 'Must be 10 characters or less')
                .required('Required'),
              secondIngredient: Yup.string()
                .max(10, 'Must be 10 characters or less')
                .required('Required'),
              quantity: Yup.number()
                .min(1, 'Must be a positive number')
                .required('Required'),
              image: Yup.mixed().required('Required')
            })}

            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >

            {({ isSubmitting }) =>
              (<Form>
                <div className="upload-image" >
                  <label htmlFor="image">Upload image</label>
                  <Field type="file" id="image" name="image"  hidden onChange={(event) => console.log(event.currentTarget.files[0])} />
                </div>
                <ErrorMessage name="image"></ErrorMessage>

                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name"></ErrorMessage>

                <Field type="text" name="firstIngredient" placeholder="Ingredient"></Field>
                <ErrorMessage name="firstIngredient"></ErrorMessage>

                <Field type="text" name="secondIngredient" placeholder="Ingredient"></Field>
                <ErrorMessage name="secondIngredient"></ErrorMessage>

                <Field type="text" name="quantity" placeholder="Quantity"></Field>
                <ErrorMessage name="quantity"></ErrorMessage>

                <button type="submit" disabled={isSubmitting} className="primary-button">Create cocktail</button>
              </Form>)}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default AddCocktailPage;


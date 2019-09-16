import React from 'react';
import {Formik} from 'formik';
import {css} from '@emotion/core';
import * as Yup from 'yup';

import InputField from '../../common/components/inputfield/inputfield.component';
import Button from '../../common/components/button/button.component';

/**
|--------------------------------------------------
| Custom Styles
|--------------------------------------------------
*/

const fullWidthButtonStyle = css`
  width: 100%;
  margin-top: 10px;
`;

/**
|--------------------------------------------------
| Scene
|--------------------------------------------------
*/

const ToolSchema = Yup.object().shape({
  title: Yup.string().required('Obrigatório!'),
  link: Yup.string()
    .url('Deve ser uma url válida!')
    .required('Obrigatório!'),
  description: Yup.string().required('Obrigatório!'),
  tags: Yup.array()
    .of(Yup.string())
    .required('Ao menos uma tag é obrigatória!')
});

const NewScene = ({create}) => {
  return (
    <Formik
      onSubmit={values => create(values)}
      initialValues={{
        title: '',
        description: '',
        link: '',
        tags: []
      }}
      validationSchema={ToolSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        submitForm
      }) => (
        <>
          <InputField
            label="Tool Name"
            name="title"
            placeholder="Name"
            value={values.title}
            errorMessage={touched.title && errors.title}
            onChange={ev => {
              handleChange(ev);
            }}
            onBlur={handleBlur}
          />
          <InputField
            label="Tool Link"
            name="link"
            placeholder="http://example.com"
            value={values.link}
            errorMessage={touched.link && errors.link}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            label="Tool Description"
            type="textarea"
            name="description"
            errorMessage={touched.description && errors.description}
            placeholder="An awesome tool"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            label="Tool Tags"
            type="tagfield"
            name="tags"
            placeholder="useful, tool, etc"
            value={values.tags}
            errorMessage={touched.tags && errors.tags}
            onChange={tags => setFieldValue('tags', tags)}
            onBlur={handleBlur}
          />

          <Button
            data-testid="save-tool"
            onClick={submitForm}
            css={fullWidthButtonStyle}
          >
            Salvar
          </Button>
        </>
      )}
    </Formik>
  );
};

export default NewScene;

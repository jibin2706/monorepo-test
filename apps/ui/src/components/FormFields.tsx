import React from 'react';
import { useField } from 'formik';

export const TextField = (props: { name: string; value: string }) => {
  const [field, meta] = useField(props.name);
  console.log(field, meta);

  return (
    <div>
      <input {...field} />
    </div>
  );
};

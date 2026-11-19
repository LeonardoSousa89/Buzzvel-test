'use client';

import { useReducer } from 'react';
import { contactReducer, initialContactState } from '../../application/contact/contact-reducer';
import { contactFields, validateContact } from '../../application/contact/validate-contact';
import type { ContactField } from '../../domain/contact';

export function useContactForm() {
  const [state, dispatch] = useReducer(contactReducer, initialContactState);

  function editField(field: ContactField, value: string) {
    dispatch({ type: 'edited', field, value });
  }

  function submit() {
    const errors = validateContact(state.values);
    const invalidField = contactFields.find((field) => errors[field]);

    if (invalidField) {
      dispatch({ type: 'validationFailed', errors });
      return invalidField;
    }

    dispatch({ type: 'submissionConfirmed' });
  }

  return { values: state.values, errors: state.errors, submitted: state.submitted, editField, submit };
}

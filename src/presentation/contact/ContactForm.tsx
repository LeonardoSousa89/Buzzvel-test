'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { contactFields } from '../../application/contact/validate-contact';
import type { ContactContent } from '../../domain/contact';
import { useMobileViewport } from '../shared/use-mobile-viewport';
import { useContactForm } from './use-contact-form';

export function ContactForm({ title, copy }: { title: string; copy: ContactContent['form'] }) {
  const mobile = useMobileViewport();
  const text = mobile ? copy.pt : copy.en;
  const { values, errors, submitted, editField, submit } = useContactForm();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const invalidField = submit();

    if (invalidField) {
      const control = event.currentTarget.elements.namedItem(invalidField);
      if (control instanceof HTMLElement) control.focus();
    }
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit} aria-labelledby="contact-form-title">
      <h3 id="contact-form-title">{title}</h3>
      <div className="contact-form-body" lang={mobile ? 'pt-BR' : 'en'}>
        <p className="contact-instructions">{text.instructions}</p>
        {contactFields.map((field) => {
          const id = `contact-${field}`;
          const error = errors[field];
          const fieldProps = {
            id,
            name: field,
            placeholder: text.fields[field].placeholder,
            value: values[field],
            required: true,
            'aria-invalid': error ? true : undefined,
            'aria-describedby': error ? `${id}-error` : undefined,
            onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              editField(field, event.target.value);
            },
          };

          return (
            <div className="contact-field" key={field}>
              <label htmlFor={id}>{text.fields[field].label}</label>
              {field === 'message'
                ? <textarea {...fieldProps} />
                : <input {...fieldProps} type={field === 'email' ? 'email' : 'text'} autoComplete={field} />}
              {error && <p className="contact-error" id={`${id}-error`}>{text.errors[error]}</p>}
            </div>
          );
        })}
        <button type="submit" className="button primary">{text.submit}</button>
        <p className="contact-status" role="status">{submitted ? text.success : ''}</p>
      </div>
    </form>
  );
}

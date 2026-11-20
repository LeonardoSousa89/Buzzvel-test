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
    <form className="contact-form min-w-0 [padding:clamp(20px,3.1vw,44px)] [border:1px_solid_var(--line)] rounded-[16px] [box-shadow:0_16px_40px_#171b2c0a] [@media(max-width:767px)]:p-[20px]" noValidate onSubmit={handleSubmit} aria-labelledby="contact-form-title">
      <h3 className="font-display text-[22px] font-[800] leading-[1.3] [@media(max-width:767px)]:text-[19px]" id="contact-form-title">{title}</h3>
      <div className="contact-form-body grid gap-[23px] [@media(max-width:767px)]:gap-[22px]" lang={mobile ? 'pt-BR' : 'en'}>
        <p className="contact-instructions text-[var(--muted)] text-[15px] leading-[1.6] mt-[10px] mb-[8px] [@media(max-width:767px)]:text-[14px]">{text.instructions}</p>
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
            <div className="contact-field grid gap-[8px]" key={field}>
              <label className="text-[15px] font-bold [@media(max-width:767px)]:text-[14px]" htmlFor={id}>{text.fields[field].label}</label>
              {field === 'message'
                ? <textarea className="w-full min-w-0 py-[14px] px-[16px] [border:1px_solid_var(--line)] rounded-[7px] text-ink bg-[var(--cream)] text-[15px] placeholder:text-[var(--subtle)] placeholder:opacity-100 aria-invalid:border-[#a4262c] [@media(max-width:767px)]:text-[14px] [@media(max-width:767px)]:py-[12px] min-h-[135px] resize-y [@media(max-width:767px)]:min-h-[100px]" {...fieldProps} />
                : <input className="w-full min-w-0 min-h-[54px] py-[14px] px-[16px] [border:1px_solid_var(--line)] rounded-[7px] text-ink bg-[var(--cream)] text-[15px] placeholder:text-[var(--subtle)] placeholder:opacity-100 aria-invalid:border-[#a4262c] [@media(max-width:767px)]:min-h-[48px] [@media(max-width:767px)]:text-[14px] [@media(max-width:767px)]:py-[12px]" {...fieldProps} type={field === 'email' ? 'email' : 'text'} autoComplete={field} />}
              {error && <p className="contact-error text-[#a4262c] text-[13px]" id={`${id}-error`}>{text.errors[error]}</p>}
            </div>
          );
        })}
        <button type="submit" className="button primary inline-flex items-center justify-center text-center font-bold py-[12px] px-[27px] [border-width:1px] border-solid border-transparent rounded-[7px] text-[14px] [&:hover]:[filter:brightness(.95)] bg-brand text-white min-h-[58px] [@media(max-width:767px)]:min-h-[50px]">{text.submit}</button>
        <p className="contact-status text-[#176047] font-semibold empty:mt-[-23px] [@media(max-width:767px)]:empty:mt-[-22px]" role="status">{submitted ? text.success : ''}</p>
      </div>
    </form>
  );
}

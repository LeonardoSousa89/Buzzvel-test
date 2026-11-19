import type { ContactError, ContactField, ContactValues } from '../../domain/contact';

export const contactFields = ['name', 'email', 'message'] as const satisfies readonly ContactField[];

export type ContactErrors = Partial<Record<ContactField, ContactError>>;

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  for (const field of contactFields) {
    if (!values[field].trim()) errors[field] = 'required';
  }

  if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'invalid-email';
  }

  return errors;
}

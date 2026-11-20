export type ContactField = 'name' | 'email' | 'message';
export type ContactValues = Record<ContactField, string>;
export type ContactError = 'required' | 'invalid-email';

export type ContactFormCopy = {
  instructions: string;
  fields: Record<ContactField, { label: string; placeholder: string }>;
  submit: string;
  errors: Record<ContactError, string>;
  success: string;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  description: string;
  emailLabel: string;
  email: string;
  emailHref: string;
  responseTimeLabel: string;
  responseTime: string;
  formTitle: string;
  form: { en: ContactFormCopy; pt: ContactFormCopy };
};

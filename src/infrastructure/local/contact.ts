import type { ContactContent } from '../../domain/contact';

export const contact: ContactContent = {
  eyebrow: 'Contact',
  title: 'Get in touch',
  description: 'Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.',
  emailLabel: 'Email',
  email: 'contact@luma.com',
  emailHref: 'mailto:contact@luma.com',
  responseTimeLabel: 'Response Time',
  responseTime: 'Up to 24 hours on business days',
  formTitle: 'Contact us',
  form: {
    en: {
      instructions: 'Fill out the fields and we will get in touch.',
      fields: {
        name: { label: 'Full name', placeholder: 'Your name' },
        email: { label: 'Email', placeholder: 'youremail@example.com' },
        message: { label: 'Your question', placeholder: 'Tell us how we can help...' },
      },
      submit: 'Send message',
      errors: { required: 'Please complete this field.', 'invalid-email': 'Enter a valid email address.' },
      success: 'Message sent',
    },
    pt: {
      instructions: 'Preencha os campos e entraremos em contato.',
      fields: {
        name: { label: 'Nome completo', placeholder: 'Seu nome' },
        email: { label: 'E-mail', placeholder: 'seuemail@exemplo.com' },
        message: { label: 'Sua dúvida', placeholder: 'Conte como podemos ajudar...' },
      },
      submit: 'Enviar mensagem',
      errors: { required: 'Preencha este campo.', 'invalid-email': 'Informe um e-mail válido.' },
      success: 'Message sent',
    },
  },
};

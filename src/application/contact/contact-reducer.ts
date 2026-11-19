import type { ContactField, ContactValues } from '../../domain/contact';
import type { ContactErrors } from './validate-contact';

type ContactState = { values: ContactValues; errors: ContactErrors; submitted: boolean };
type ContactAction =
  | { type: 'edited'; field: ContactField; value: string }
  | { type: 'validationFailed'; errors: ContactErrors }
  | { type: 'submissionConfirmed' };

export const initialContactState: ContactState = {
  values: { name: '', email: '', message: '' },
  errors: {},
  submitted: false,
};

export function contactReducer(state: ContactState, action: ContactAction): ContactState {
  switch (action.type) {
    case 'edited': {
      const errors = { ...state.errors };
      delete errors[action.field];
      return {
        values: { ...state.values, [action.field]: action.value },
        errors,
        submitted: false,
      };
    }
    case 'validationFailed':
      return { ...state, errors: action.errors, submitted: false };
    case 'submissionConfirmed':
      return { ...initialContactState, submitted: true };
  }
}

export type MenuAction = { type: 'toggled' } | { type: 'closed' };

export function menuReducer(isOpen: boolean, action: MenuAction): boolean {
  return action.type === 'toggled' ? !isOpen : false;
}

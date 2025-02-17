import { VISIBILITY_OPTIONS } from 'constants/upload';

export function getVisibilityIcon(label: string) {
  const option = VISIBILITY_OPTIONS.find((opt) => opt.label === label);
  return option ? option.icon : null;
}

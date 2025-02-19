import { VISIBILITY_OPTIONS } from 'constants/upload';

export function getVisibilityIcon(key: string) {
  const option = VISIBILITY_OPTIONS.find((opt) => opt.key === key);
  return option ? option.icon : null;
}

export function getVisibilityLabel(key: string) {
  const option = VISIBILITY_OPTIONS.find((opt) => opt.key === key);
  return option ? option.label : null;
}

import state from '../state';
import getPassIcons from './getPassIcons';
import isRuleOne from './isRuleOne';
import isRuleTwo from './isRuleTwo';
import isRuleThree from './isRuleThree';

export default function isValid() {
  const passIcons = getPassIcons();

  if (isRuleOne(passIcons)) {
    return (
      state.selected.filter(icon => state.icons.pass.includes(icon)).length >= 1
    );
  }

  if (isRuleTwo(passIcons)) {
    return (
      state.selected.filter(icon => state.icons.skip.includes(icon)).length ===
        1 &&
      state.selected.filter(icon => state.icons.pass.includes(icon)).length ===
        5
    );
  }

  return isRuleThree(passIcons);
}

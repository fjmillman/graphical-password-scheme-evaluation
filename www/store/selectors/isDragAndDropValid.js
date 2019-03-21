import state from '../state';
import getPassIcons from './getPassIcons';
import isRuleOne from './isRuleOne';
import isRuleTwo from './isRuleTwo';
import isRuleThree from './isRuleThree';

export default function isDragAndDropValid() {
  const passIcons = getPassIcons();

  if (isRuleOne(passIcons)) {
    return (
      state.selected.filter(
        icon =>
          (state.icons.pass.includes(icon.source) &&
            state.icons.flag.includes(icon.target)) ||
          (state.icons.flag.includes(icon.source) &&
            state.icons.pass.includes(icon.target))
      ).length >= 1
    );
  }

  if (isRuleTwo(passIcons)) {
    return (
      state.selected.filter(
        icon =>
          state.icons.skip.includes(icon.source) ||
          state.icons.skip.includes(icon.target) ||
          state.icons.pass.includes(icon.source) ||
          state.icons.pass.includes(icon.target)
      ).length === 6 &&
      state.selected.filter(
        icon =>
          state.icons.skip.includes(icon.source) ||
          state.icons.skip.includes(icon.target)
      ).length >= 1 &&
      state.selected.filter(
        icon =>
          state.icons.pass.includes(icon.source) ||
          state.icons.pass.includes(icon.target)
      ).length >= 5
    );
  }

  return isRuleThree(passIcons);
}

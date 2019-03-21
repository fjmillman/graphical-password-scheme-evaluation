import state from '../state';

export default function isRuleTwo(passIcons) {
  return (
    state.icons.skip.filter(skip => passIcons.includes(skip)).length === 1 &&
    state.icons.pass.filter(pass => passIcons.includes(pass)).length === 5
  );
}

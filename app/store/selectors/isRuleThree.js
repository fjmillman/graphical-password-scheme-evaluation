import state from '../state';

export default function isRuleThree(passIcons) {
  return (
    !state.icons.flag.some(flag => passIcons.includes(flag)) &&
    !state.icons.pass.some(pass => passIcons.includes(pass))
  );
}

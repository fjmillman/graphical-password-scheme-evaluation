import state from "../state";
import { getPassIcons } from "./getPassIcons";
import { isRuleOne } from "./isRuleOne";
import { isRuleTwo } from "./isRuleTwo";
import { isRuleThree } from "./isRuleThree";

export function isDragAndDropValid() {
    const passIcons = getPassIcons();

    if (isRuleOne(passIcons)) {
        return state.selected.filter(icon =>
            (state.icons.pass.includes(icon.source) && state.icons.flag.includes(icon.target)) ||
            (state.icons.flag.includes(icon.source) && state.icons.pass.includes(icon.target))
        ).length >= 1;
    } else if (isRuleTwo(passIcons)) {
        return state.selected.filter(icon =>
            state.icons.skip.includes(icon.source) || state.icons.skip.includes(icon.target) ||
            state.icons.pass.includes(icon.source) || state.icons.pass.includes(icon.target)
        ).length === 6 && state.selected.filter(icon =>
            state.icons.skip.includes(icon.source) || state.icons.skip.includes(icon.target)
        ).length >= 1 && state.selected.filter(icon =>
            state.icons.pass.includes(icon.source) || state.icons.pass.includes(icon.target)
        ).length >= 5;
    } else {
        return isRuleThree(passIcons);
    }
}

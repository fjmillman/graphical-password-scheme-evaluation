import state from "../state";

const getRandomPassIcons = () => [...state.passIcons].sort(() => 0.5 - Math.random()).slice(0, 12);

const isRuleOne = passIcons => state.icons.flag.some(flag => passIcons.includes(flag)) &&
    !state.icons.skip.some(skip => passIcons.includes(skip)) &&
    state.icons.pass.filter(pass => passIcons.includes(pass)).length >= 1;
const isRuleTwo = passIcons => state.icons.skip.some(skip => passIcons.includes(skip)) &&
    state.icons.pass.filter(pass => passIcons.includes(pass)).length >= 5;
const isRuleThree = passIcons => !state.icons.flag.some(flag => passIcons.includes(flag)) &&
    !state.icons.skip.some(skip => passIcons.includes(skip));

export function getRandomStage() {
    const remainingStages = [...Array(3).keys()]
        .map(x => ++x)
        .filter(stage => !state.pastStages.includes(stage));
    const randomStage = remainingStages[Math.floor(Math.random() * remainingStages.length)];
    let randomPassIcons = getRandomPassIcons();

    while (randomStage === 1 && !isRuleOne(randomPassIcons) ||
        randomStage === 2 && !isRuleTwo(randomPassIcons) ||
        randomStage === 3 && !isRuleThree(randomPassIcons)
        ) {
        randomPassIcons = getRandomPassIcons();
    }

    state.pastStages.push(randomStage);

    return randomPassIcons;
}

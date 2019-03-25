import state from '../state';

export default function getUrl(observation) {
  if (state.scheme === 1) {
    switch (observation) {
      case 1:
        return 'https://youtu.be/Iq8nc3g3jOU';
      case 2:
        return 'https://youtu.be/rjtqK7vjmD0';
      case 3:
        return 'https://youtu.be/Tf6nx-iCQJU';
      default:
        return 'https://youtu.be/P3lXKxOkxbg';
    }
  } else {
    switch (observation) {
      case 1:
        return 'https://youtu.be/-eK24qeowM4';
      case 2:
        return 'https://youtu.be/mGY6VqLZeCo';
      case 3:
        return 'https://youtu.be/FqQcqr1YPyE';
      default:
        return 'https://youtu.be/P3lXKxOkxbg';
    }
  }
}

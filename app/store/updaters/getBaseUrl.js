import url from 'url';

export default function getBaseUrl() {
  return url.format({
    protocol: 'https',
    host: window.location.hostname,
    pathname: '/',
  });
}

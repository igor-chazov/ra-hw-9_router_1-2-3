const url = new URL(window.location.href);

if (url.hostname === 'localhost') {
  url.port = '7878';
}

if (url.hostname === 'igor-chazov.github.io') {
  url.hostname = 'ra-9-3-backend.herokuapp.com';
  url.protocol = 'https';
}

const root = url;
root.pathname = '';

const links = {
  root: root.origin,
  auth: new URL('auth', url.href).href,
  private: new URL('private', url.href).href,
};

export default links;

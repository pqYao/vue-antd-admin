//跨域代理前缀
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
const BASE_URL = process.env.VUE_APP_API_BASE_URL;

module.exports = {
  LOGIN: `${BASE_URL}/login`,
  ROUTES: `${BASE_URL}/routes`,
  prepare: `${BASE_URL}/es-prepare`,
  basic: `${BASE_URL}/es-basic`,
  userinfo: `${BASE_URL}/es-userinfo`,
  tender: `${BASE_URL}/es-tender`,
  file:`${BASE_URL}/senon-file-center`,
};

import httpProxy from 'http-proxy';
import config from '../config';

const apiURL = config.api.proxy;

const proxy = httpProxy.createProxyServer({
  ws: true,
  changeOrigin: true,
  target: apiURL,
});

export default (req, res) => {
  proxy.web(req, res, { target: apiURL });
};

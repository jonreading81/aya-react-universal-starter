import dev from './dev';

if (process.env.PORT) {
  dev.app.port = process.env.PORT ;
}

export default dev;

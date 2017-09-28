'use strict';

import 'bluebird';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import http from 'http';
import log from './logger';
import pkg from '../package.json';
import invoiceApi from './invoice/invoiceApi';

const app = express();
const port = process.env.PORT || 8000;
const server = http.Server(app);
const version = `Express-Boilerplate v${pkg.version}`;

app.use(helmet());
app.use(cors());

server.listen(port, () => {
  log.info(version);
  log.info(`Listening on port ${port}`);
});

app.get('/api/invoice', invoiceApi);

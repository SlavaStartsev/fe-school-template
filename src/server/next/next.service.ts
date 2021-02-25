import * as path from 'path';

import { Injectable, OnModuleInit } from '@nestjs/common';
import next from 'next';
import NextServer from 'next/dist/next-server/server/next-server';

@Injectable()
export class NextService implements OnModuleInit {
  private server: NextServer;

  async onModuleInit(): Promise<void> {
    try {
      this.server = next({
        dev: process.env.NODE_ENV === 'development',
        customServer: true,
        dir: 'src/client',
      });

      await this.server.prepare();
    } catch (error) {
      console.log(error);
    }
  }

  getNextServer(): NextServer {
    return this.server;
  }

  renderPage(data, req, res) {
    req.query.pageData = data;

    this.server.render(req, res, req.path, req.query);
  }

  renderError(err, req, res) {
    this.server.renderError(err, req, res, req.path);
  }
}

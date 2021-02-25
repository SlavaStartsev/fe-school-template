import { Controller, Get, Req, Res } from '@nestjs/common';

import { NextService } from '../next/next.service';
import { MyPageService } from './my-page.service';

@Controller('my-page')
export class MyPageController {
  constructor(
    private readonly myPageService: MyPageService,
    private readonly nextService: NextService,
  ) {}

  @Get()
  async getMyPage(@Req() req, @Res() res) {
    const data = await this.myPageService.getMyPageData();

    this.nextService.renderPage(data, req, res);
  }
}

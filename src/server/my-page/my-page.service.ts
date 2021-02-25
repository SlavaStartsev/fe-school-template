import { Injectable } from '@nestjs/common';
import fetch from 'isomorphic-unfetch';

@Injectable()
export class MyPageService {
  async getMyPageData() {
    // this or httpServices but it's tricky
    // const response = await fetch('http://localhost:8000');
    // return response.json();
    return {
      myApp: 'my-test-app',
    };
  }
}

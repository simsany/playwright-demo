import { test, expect } from '@playwright/test';
import { SINGLE_USER_RESPONSE } from '../../data/reqres-get-users';

test('should create a bug report', async ({ request }) => {
    const foundUserResponse = await request.get(`https://reqres.in/api/users/2`);

    expect(await foundUserResponse.json()).toEqual(SINGLE_USER_RESPONSE)
    
  });
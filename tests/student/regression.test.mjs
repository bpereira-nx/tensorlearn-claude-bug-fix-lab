import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';
test('incident: user-4 must not receive claim-B owned by user-42', () => {
  const claims = [{ id: 'claim-B', ownerId: 'user-42', status: 'pending' }];
  assert.equal(getClaim(claims, 'user-4', 'claim-B'), null);
});
test('the real owner user-42 still receives claim-B', () => {
  const claim = { id: 'claim-B', ownerId: 'user-42', status: 'pending' };
  assert.deepEqual(getClaim([claim], 'user-42', 'claim-B'), claim);
});

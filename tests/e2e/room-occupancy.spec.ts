import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('Health Check', () => {
  test('GET /health returns 200 and status ok', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/health`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toEqual({ status: 'ok' });
  });
});

test.describe('Room Occupancy API', () => {
  test('GET /rooms?date=2024-03-20 returns correct rooms', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/rooms?date=2024-03-20`);
    expect(res.status()).toBe(200);
    const rooms = await res.json();
    expect(rooms).toEqual([
      expect.objectContaining({ code: '1001', beds: 2, travellerIds: ['t1', 't2'] })
    ]);
  });

  test('GET /groups/12345A/rooms returns correct rooms', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/groups/12345A/rooms`);
    expect(res.status()).toBe(200);
    const rooms = await res.json();
    expect(rooms).toEqual([
      expect.objectContaining({ code: '1001', beds: 2, travellerIds: ['t1', 't2'] })
    ]);
  });

  test('GET /rooms/1001 returns correct room', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/rooms/1001`);
    expect(res.status()).toBe(200);
    const room = await res.json();
    expect(room).toEqual({ code: '1001', beds: 2, travellerIds: ['t1', 't2'] });
  });

  test('POST /rooms/1001/move-traveller moves t1 to 1002', async ({ request }) => {
    const moveRes = await request.post(`${BASE_URL}/rooms/1001/move-traveller`, {
      data: { travellerId: 't1', toRoomCode: '1002' }
    });
    expect(moveRes.status()).toBe(200);
    const { fromRoom, toRoom } = await moveRes.json();
    expect(fromRoom).toEqual({ code: '1001', beds: 2, travellerIds: ['t2'] });
    expect(toRoom).toEqual({ code: '1002', beds: 3, travellerIds: ['t3', 't1'] });
  });

  test('POST /rooms/1001/move-traveller with invalid traveller returns error', async ({ request }) => {
    const moveRes = await request.post(`${BASE_URL}/rooms/1001/move-traveller`, {
      data: { travellerId: 'not-in-room', toRoomCode: '1002' }
    });
    expect(moveRes.status()).toBe(400);
    const body = await moveRes.json();
    expect(body).toHaveProperty('error', 'Traveller not in from room');
  });
}); 
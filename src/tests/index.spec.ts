import { query } from 'express-validator'
import supertest from 'supertest'
import app from '../index'

// create a request object
const request = supertest(app)

describe('Test endpoint response', () => {
  it('test hello world endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})

describe('wrong file name', async (): Promise<void> => {
  const error = await ({
    filename: 'fakename',
    width: '100',
    height: '500'
  });
  expect(error).not.toBeNull();
});
describe('wrong input', async (): Promise<void> => {
  const error = await ({
   
    width: 'abc',
    height: 'xyz'
  });
  expect(error);
});
describe("endpoints check", () => {
  it("if no image provided", async (done) => {
    const response = await request.get(
      "/assets/images?filename=f&height=200&width=200"
    );
    expect(response.status).toBe(404);

    done();
  })
});
  describe("image existence",()=>{
  it("found image", async (done) => {
    const res = await request.get(
      "/assets/images?filename=img2&height=200&width=200"
    );
    expect(res.status).toBe(200);

    done();
  
})});
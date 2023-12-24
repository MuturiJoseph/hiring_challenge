
const request = require('supertest');
const {Task} = require('../../models/task');
const {User} = require('../../models/user');
const mongoose = require('mongoose');

describe('/api/tasks', () => {
  let server; 
  let taskId;
  let task; 
  let token;

  const exec = () => {
    return request(server)
      .post('/api/tasks')
      .set('x-auth-token', token)
      .send({ taskId });
  };
  
  beforeEach(async () => { 
    server = require('../../index'); 
    
    taskId = mongoose.Types.ObjectId();
    token = new User().generateAuthToken();

    task = new Task({
      _id: taskId,
      title: '12345',
      completed:'true'
    });
    await task.save();
  });

  afterEach(async () => { 
    await server.close(); 
    await Task.remove({});
  });  

  it('should return 401 if client is not logged in', async () => {
    token = '';

    const res = await exec();

    expect(res.status).toBe(401);
  });


  it('should return 400 if taskId is not provided', async () => {
    taskId = ''; 

    const res = await exec();

    expect(res.status).toBe(400);
  });

 

  it('should return 200 if we have a valid request', async () => {
    const res = await exec();

    expect(res.status).toBe(200);
  });
});
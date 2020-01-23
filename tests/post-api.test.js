const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Post = require('../models/post')
const Reply = require('../models/reply')

const api = supertest(app)

// Alustettavat postaukset testeihin
const initialPosts = [
  {
    title: '1st Post',
    content: 'Look mom without frontend look mom look :3',
    date: new Date(), 
    deleted: false
  },
  {
    title: '2nd Post',
    content: 'Still testing',
    date: new Date(), 
    deleted: false
  },
]

beforeAll(async () => {
  await Post.deleteMany({})
  await Reply.deleteMany({})

  let postObject = new Post(initialPosts[0])
  await postObject.save()

  postObject = new Post(initialPosts[1])
  await postObject.save()
})

test('Posts are returned as JSON', async () => {
  await api
    .get('/api/post')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('There are two Posts', async () => {
  const response = await api.get('/api/post')
  expect(response.body.length).toBe(initialPosts.length)
})

test('First post is about "Look mom"', async () => {
  const response = await api.get('/api/post')
  expect(response.body[0].content).toBe(initialPosts[0].content)
})

test('There are no Replies', async () => {
  const response = await api.get('/api/post/reply')
  expect(response.body.length).toBe(0)
})

test('Reply for first post was successful', async () => {
  const response = await api.get('/api/post')

  const testReply = {
    post: response.body[0]._id,
    content: "Look, it works!",
    date: new Date(),
    deleted: false 
  }
  
  let replyObject = new Reply(testReply)
  await replyObject.save()
  const replyResponse = await api.get('/api/post/reply')
  expect(replyResponse.body[0].content).toBe(testReply.content)
})

test('First post was marked as deleted', async () => {
  const response = await api.get('/api/post')
  await api.delete('/api/post/' + response.body[0]._id)
  const response2 = await api.get('/api/post')
  expect(response2.body[0].deleted).toBe(true)
})

test('First post was deleted', async () => {
  const response = await api.get('/api/post')
  const deleteResponse = await api.delete('/api/post/' + response.body[0]._id + '/delete')
  const response2 = await api.get('/api/post')
  expect(deleteResponse.status).toBe(204)
  expect(response2.body.length).toBe(initialPosts.length-1)
})


afterAll(() => {
  mongoose.connection.close()
})
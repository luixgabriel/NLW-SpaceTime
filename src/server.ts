import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import { uploadsRoutes } from './routes/upload'
import { resolve } from 'path'

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

// APP REGISTER FUNCIONA COMO MIDDLEWARE PARECIDO COM O app.use()
app.register(cors, {
  origin: true, // TODAS AS URLS DO FRONT PODERÃO ACESSAR NOSSO BACK
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)
app.register(uploadsRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    // WINDOWS . ABRE O EMOJI PICKER
    console.log('👾 server running on http://localhost:3333')
  })

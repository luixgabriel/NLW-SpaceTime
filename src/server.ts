import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

// APP REGISTER FUNCIONA COMO MIDDLEWARE PARECIDO COM O app.use()
app.register(cors, {
  origin: true, // TODAS AS URLS DO FRONT PODERÃO ACESSAR NOSSO BACK
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // WINDOWS . ABRE O EMOJI PICKER
    console.log('👾 server running on http://localhost:3333')
  })

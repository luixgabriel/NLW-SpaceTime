import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

// APP REGISTER FUNCIONA COMO MIDDLEWARE PARECIDO COM O app.use()
app.register(cors, {
  origin: true, // TODAS AS URLS DO FRONT PODERÃO ACESSAR NOSSO BACK
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // WINDOWS . ABRE O EMOJI PICKER
    console.log('👾 server running on http://localhost:3333')
  })

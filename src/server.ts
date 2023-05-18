import fastify from 'fastify'

const app = fastify()

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // WINDOWS . ABRE O EMOJI PICKER
    console.log('👾 server running on http://localhost:3333')
  })

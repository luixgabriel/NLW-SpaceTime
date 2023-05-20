import { NextRequest, NextResponse } from 'next/server'

const signInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signInUrl, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; HttpOnly; Path=/; max-age=20;`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  // QUAIS ENDEREÇOS DA MINHA APLICAÇÃO EU QUERO COLOCAR ESSE MIDDLEWARE, COLOCO NO MATCHER
  matcher: '/memories/:path*',
}

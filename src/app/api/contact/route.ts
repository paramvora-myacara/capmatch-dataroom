import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { fullName, email, message } = await request.json()

  if (!fullName || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Log submission (appears in Vercel logs); add email/Slack webhook etc. as needed
  console.log('[DATAROOM_CONTACT]', JSON.stringify({ fullName, email, message }))

  return NextResponse.json({ message: 'Form submitted successfully!' })
}

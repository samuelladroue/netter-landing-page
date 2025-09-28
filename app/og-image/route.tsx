import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#6366f1',
          backgroundImage: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Netter
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#e0e7ff',
              marginBottom: '40px',
              maxWidth: '800px',
              lineHeight: 1.3,
            }}
          >
            Automate sourcing through employee referrals
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              fontSize: '24px',
              color: '#c7d2fe',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>80%</span>
              <span>Faster sourcing</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>60%</span>
              <span>Savings on hiring costs</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>+400%</span>
              <span>More referral hires</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

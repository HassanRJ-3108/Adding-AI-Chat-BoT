import { NextRequest } from 'next/server';
import { Agent, run } from '@openai/agents';

const PORTFOLIO_CONTEXT = `
You are an AI assistant for Syeda Gulzar Bano's portfolio. Here's her information:

Name: Syeda Gulzar Bano
Roles: Oracle Developer, Web Developer, Graphic Designer, Creative Thinker

Skills:
- Oracle: 99%
- HTML: 90%
- CSS: 85%
- Tailwind CSS: 85%
- Node.js: 90%
- TypeScript: 97%
- React: 88%
- Next.js: 78%
- Python: 95%

Projects:
- Marketplace E-Commerce: https://hackhathon-ecommerce-website-eidb.vercel.app/
- Dashboard Ecommerce: https://dashboard-ecommerce-ws.vercel.app/
- Clerk Authentication: https://clerk-authentication-five.vercel.app/
- Todo List Next.js: https://todo-list-nextjs-project-three.vercel.app/
- Book-API: https://my-nextjs-book-api-with-ei5vzyxyg-syeda-gulzar-bano-s-projects.vercel.app/
- Stripe Embedded Integration: https://stripe-embeded-nextjs.vercel.app/

Contact: +92 3363893198, syedagulzarbano@gmail.com
Education: Computer Science Graduate from Florida Green University Karachi
Experience: Oracle Developer internship at State Bank of Pakistan (3 months)
Current Course: AI, WEB3.0, And Metaverse (GIAIC)
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userMessage = body?.message;

    if (!userMessage) {
      return new Response(JSON.stringify({ error: 'Message required' }), { status: 400 });
    }

    const agent = new Agent({
      name: 'Portfolio Assistant',
      instructions: PORTFOLIO_CONTEXT,
    });

    const result = await run(agent, userMessage);
    
    return new Response(result.finalOutput, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (err: any) {
    console.error('Assistant route error:', err);
    return new Response(JSON.stringify({ error: 'Internal error', details: err?.message ?? 'unknown' }), { status: 500 });
  }
}

export const runtime = 'nodejs';


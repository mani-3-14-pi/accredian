import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, workEmail, company, phone, message } = body || {};

    console.log('RECEIVED ENTERPRISE LEAD SUBMISSION (Next.js API):', {
      firstName,
      lastName,
      workEmail,
      company,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    if (!firstName || !lastName || !workEmail || !company) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: First Name, Last Name, Work Email, and Company are required.',
        },
        { status: 400 }
      );
    }

    if (!workEmail.includes('@') || !workEmail.includes('.')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid work email address.',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Our enterprise executive team has received your request and will reach out within 24 hours.',
        leadId: `LEAD-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process request.',
      },
      { status: 500 }
    );
  }
}

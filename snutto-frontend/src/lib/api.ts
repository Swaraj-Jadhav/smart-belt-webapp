// lib/api.ts
import { toast } from 'sonner';

interface WaitlistFormData {
  name: string;
  email: string;
  contactNo: string;
}

export const checkBackendStatus = async (): Promise<Response> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
    return await response.json();
  } catch (error) {
    console.error('Backend status check failed:', error);
    throw new Error('Unable to connect to backend service');
  }
};

export const joinWaitlist = async (data: WaitlistFormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/joinWaitList`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        contactNo: data.contactNo.replace(/\D/g, '')
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to join waitlist');
    }

    return await response.json();
  } catch (error) {
    console.error('API Request Failed:', error);
    throw error;
  }
};
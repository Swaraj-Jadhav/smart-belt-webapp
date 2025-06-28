// lib/api.ts
import { toast } from 'sonner';
import config from '@/config';

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
    const response = await fetch(`${config.apiUrl}/api/users/joinWaitList`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        contactNo: data.contactNo.replace(/\D/g, '')
      })
    });

    // First check if response exists
    if (!response) {
      throw new Error('No response received from server');
    }

    // Check for empty response
    const responseText = await response.text();
    if (!responseText) {
      throw new Error('Empty response from server');
    }

    // Try parsing JSON
    try {
      const jsonResponse = JSON.parse(responseText);
      
      if (!response.ok) {
        throw new Error(jsonResponse.message || 'Request failed');
      }
      
      return jsonResponse;
    } catch (parseError) {
      console.error('Failed to parse:', { responseText, status: response.status });
      throw new Error(`Invalid JSON response: ${responseText.substring(0, 100)}`);
    }
  }  catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
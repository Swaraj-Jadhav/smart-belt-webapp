// lib/api.ts
import { toast } from 'sonner';

// Define types for your API
interface WaitlistFormData {
  name: string;
  email: string;
  contactNo: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
}

// For Vite environment variables
interface ImportMeta {
  readonly env: {
    VITE_API_URL?: string;
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://snutto-webapp-backend.onrender.com';

export const joinWaitlist = async (data: WaitlistFormData) => {
  try {
    const response = await fetch('https://snutto-webapp-backend.onrender.com/api/users/joinWaitList', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: data.name,
    email: data.email,
    contactNo: data.contactNo.replace(/\D/g, '') // Clean phone number
  })
    });

    // Handle non-JSON responses
    const text = await response.text();
    try {
      const json = JSON.parse(text);
      if (!response.ok) {
        throw new Error(json.message || 'API request failed');
      }
      return json;
    } catch (e) {
      throw new Error(`Invalid JSON: ${text.substring(0, 100)}`);
    }
  } catch (error) {
    console.error('API Request Failed:', error);
    throw new Error(
      error instanceof Error ? error.message : 'Network request failed'
    );
  }
};
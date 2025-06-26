'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joinWaitlist } from '@/lib/api';
import { toast } from 'sonner';
import * as z from 'zod';

// Define validation schema with Zod (for manual validation)
const waitlistFormSchema = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z.string()
    .email({ message: 'Please enter a valid email address' }),
  contactNo: z.string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(15, { message: 'Phone number must be less than 15 digits' })
    .regex(/^[0-9+\-\s]+$/, { message: 'Please enter a valid phone number' })
});

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

interface WaitlistFormProps {
  onSuccess?: () => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState<WaitlistFormValues>({
    name: '',
    email: '',
    contactNo: ''
  });
  const [errors, setErrors] = useState<Partial<WaitlistFormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Special handling for phone number formatting
    if (name === 'contactNo') {
      const numericValue = value.replace(/\D/g, '');
      let formattedValue = numericValue;
      
      if (numericValue.length > 3 && numericValue.length <= 6) {
        formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
      } else if (numericValue.length > 6) {
        formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3, 6)}-${numericValue.slice(6, 10)}`;
      }
      
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name as keyof WaitlistFormValues]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    try {
      waitlistFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<WaitlistFormValues> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof WaitlistFormValues] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const cleanedData = {
        ...formData,
        contactNo: formData.contactNo.replace(/\D/g, '')
      };

      if (cleanedData.contactNo.length !== 10) {
        toast.error('Enter valid 10-digit contact number');
        setIsSubmitting(false);
        return;
      }

      const result = await joinWaitlist(cleanedData);
      if (result.success) {
        toast.success('You have joined the waitlist successfully!');
        setFormData({ name: '', email: '', contactNo: '' });
        onSuccess?.();
      } else {
        toast.error(result.error || 'Failed to join waitlist');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
      console.error('Waitlist submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="contactNo" className="block text-sm font-medium">
          Phone Number
        </label>
        <Input
          id="contactNo"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          placeholder="123-456-7890"
          className={errors.contactNo ? 'border-red-500' : ''}
        />
        {errors.contactNo && (
          <p className="text-red-500 text-sm">
            {errors.contactNo}
            <br />
            Example format: 123-456-7890
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
}
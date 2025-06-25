'use client';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joinWaitlist } from '@/lib/api';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define validation schema with Zod
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
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: '',
      email: '',
      contactNo: ''
    }
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    try {
      // Clean phone number before submission
      const cleanedData = {
        ...data,
        contactNo: data.contactNo.replace(/\D/g, '') // Remove all non-digit characters
      };

      const result = await joinWaitlist(cleanedData);
      if (result.success) {
        toast.success('You have joined the waitlist successfully!');
        form.reset();
        onSuccess?.();
      } else {
        toast.error(result.error || 'Failed to join waitlist');
      }
    } catch (error) {
       const cleanedData = {
        ...data,
        contactNo: data.contactNo.replace(/\D/g, '') // Remove all non-digit characters
      };
      if(cleanedData.contactNo.length!=10){
      toast.error('Enter valid contact number');
      }
      

      console.error('Waitlist submission error:', error);
    }
  };

  // Format phone number as user types
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
    const value = e.target.value.replace(/\D/g, '');
    let formattedValue = value;
    
    if (value.length > 3 && value.length <= 6) {
      formattedValue = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length > 6) {
      formattedValue = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
    }
    
    field.onChange(formattedValue);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  {...field} 
                  className={form.formState.errors.name ? 'border-red-500' : ''}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  {...field} 
                  className={form.formState.errors.email ? 'border-red-500' : ''}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="contactNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input 
                  placeholder="123-456-7890" 
                  {...field}
                  onChange={(e) => handlePhoneChange(e, field)}
                  className={form.formState.errors.contactNo ? 'border-red-500' : ''}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm">
                {form.formState.errors.contactNo && (
                  <span>
                    {form.formState.errors.contactNo.message}
                    <br />
                    Example format: 123-456-7890
                  </span>
                )}
              </FormMessage>
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
}
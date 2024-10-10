'use client';

import { SignUp, useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SignUpPage() {
  const { isLoaded, signUp } = useSignUp();
  const router = useRouter();

useEffect(() => {
  if (isLoaded && signUp?.status === 'complete') {
    fetch('/api/handle-signup', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => {
        console.log('API Response:', data);  // Log the response
        if (data.status === 200) {
          router.push('/post-contest');
        } else {
          console.error('Error in API:', data.message);
        }
      })
      .catch((err) => console.error('Error:', err));
  }
}, [isLoaded, signUp, router]);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <SignUp routing="path" path="/sign-up" />
      </div>
    </div>
  );
}

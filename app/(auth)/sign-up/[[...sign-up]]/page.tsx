// app/sign-up/[[...rest]]/page.tsx
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Use forceRedirectUrl to define the redirect URL after sign-up */}
      <SignUp forceRedirectUrl="/post-contest" routing="path" path="/sign-up" />
    </div>
  );
}

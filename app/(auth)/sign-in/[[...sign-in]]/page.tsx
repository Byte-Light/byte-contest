// app/sign-in/[[...rest]]/page.tsx
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Use forceRedirectUrl to define the redirect URL after sign-in */}
      <SignIn forceRedirectUrl="/post-contest" routing="path" path="/sign-in" />
    </div>
  );
}

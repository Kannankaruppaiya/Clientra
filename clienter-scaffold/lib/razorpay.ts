import Razorpay from 'razorpay';

// Razorpay instance — SERVER ONLY (uses the secret key).
export function razorpay() {
  return new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });
}

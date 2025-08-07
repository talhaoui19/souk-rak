// app/verify-email/[token]/page.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const VerifyEmail = ({ params }) => {
  const router = useRouter();
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('جارٍ التحقق من البريد الإلكتروني...');
  
  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetch('../../../api/auth/verify_email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: params.token })
        });
        
        const data = await res.json();
        
        if (res.ok) {
          setStatus('success');
          setMessage('تم تأكيد البريد الإلكتروني بنجاح! سيتم توجيهك إلى صفحة تسجيل الدخول...');
          setTimeout(() => {
            router.push('/signin?verified=true');
          }, 3000);
        } else {
          setStatus('error');
          setMessage(data.error || 'حدث خطأ أثناء التحقق من البريد الإلكتروني');
        }
      } catch (error) {
        setStatus('error');
        setMessage('حدث خطأ أثناء الاتصال بالخادم');
      }
    };

    verifyEmail();
  }, [params.token, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            تأكيد البريد الإلكتروني
          </h2>
          <div className="mt-4">
            {status === 'loading' && (
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            )}
            {status === 'success' && (
              <div className="rounded-full h-12 w-12 bg-green-100 mx-auto flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-full h-12 w-12 bg-red-100 mx-auto flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
            )}
          </div>
          <p className={`mt-4 text-lg ${
            status === 'success' ? 'text-green-600' : 
            status === 'error' ? 'text-red-600' : 
            'text-gray-600'
          }`}>
            {message}
          </p>
          {status === 'error' && (
            <button
              onClick={() => router.push('/signin')}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              العودة إلى تسجيل الدخول
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
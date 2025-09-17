
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.search.split('?redirect=')[1] || '/dashboard';

  const showToast = (message) => {
    toast({
      title: message,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'testuser@letsdropship.com' && password === 'Demo@1234') {
      login({ email });
      toast({
        title: "🎉 লগইন সফল হয়েছে!",
        description: "আপনাকে ড্যাশবোর্ডে নিয়ে যাওয়া হচ্ছে।",
      });
      navigate(from, { replace: true });
    } else {
      toast({
        variant: "destructive",
        title: "❌ লগইন ব্যর্থ হয়েছে",
        description: "অনুগ্রহ করে সঠিক ইমেইল এবং পাসওয়ার্ড দিন।",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>লগইন - LetsDropship</title>
        <meta name="description" content="এক্সক্লুসিভ ফিচার অ্যাক্সেস করতে লগইন করুন।" />
      </Helmet>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mt-4">আবারও স্বাগতম!</h1>
            <p className="text-gray-600">চালিয়ে যেতে লগইন করুন।</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="email" 
                placeholder="আপনার ইমেইল" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="password" 
                placeholder="আপনার পাসওয়ার্ড" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">আমাকে মনে রাখুন</label>
              </div>
              <div className="text-sm">
                <button type="button" onClick={() => showToast("🚧 এই ফিচারটি এখনও চালু হয়নি।")} className="font-medium text-orange-600 hover:text-orange-500">পাসওয়ার্ড ভুলে গেছেন?</button>
              </div>
            </div>
            <Button 
              size="lg" 
              className="w-full flex items-center justify-center gap-2"
              type="submit"
            >
              <LogIn className="w-5 h-5" />
              লগইন
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            অ্যাকাউন্ট নেই?{' '}
            <Link to={`/signup?redirect=${from}`} className="font-semibold text-orange-600 hover:underline">
              সাইন আপ করুন
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

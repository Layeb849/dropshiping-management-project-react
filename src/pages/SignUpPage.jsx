import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { User, Mail, Lock, UserPlus, Phone } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const SignUpPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.search.split('?redirect=')[1] || '/';

  const showToast = (message) => {
    toast({
      title: message,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // This is a mock signup. In a real app, you'd create a new user.
    login({ name: e.target.elements.name.value });
    toast({
      title: "🎉 সাইন আপ সফল হয়েছে!",
      description: "আমাদের কমিউনিটিতে আপনাকে স্বাগতম।",
    });
    navigate(from, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>সাইন আপ - LetsDropship</title>
        <meta name="description" content="একটি নতুন অ্যাকাউন্ট তৈরি করুন এবং আমাদের সাথে আপনার যাত্রা শুরু করুন।" />
      </Helmet>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-slate-50 p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mt-4">নতুন অ্যাকাউন্ট তৈরি করুন</h1>
            <p className="text-gray-600">আমাদের কমিউনিটিতে যোগ দিন!</p>
          </div>
          
          <form onSubmit={handleSignUp} className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                id="name"
                type="text" 
                placeholder="আপনার পুরো নাম" 
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="email" 
                placeholder="আপনার ইমেইল" 
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="tel" 
                placeholder="আপনার ফোন নম্বর" 
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="password" 
                placeholder="নতুন পাসওয়ার্ড" 
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-600">
                  আমি <button type="button" onClick={() => showToast("🚧 এই ফিচারটি এখনও চালু হয়নি।")} className="font-medium text-orange-600 hover:underline">শর্তাবলী</button> এর সাথে একমত
                </label>
              </div>
            </div>
            <Button 
              size="lg" 
              className="w-full flex items-center justify-center gap-2"
              type="submit"
            >
              <UserPlus className="w-5 h-5" />
              সাইন আপ
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            ইতিমধ্যে একটি অ্যাকাউন্ট আছে?{' '}
            <Link to={`/login?redirect=${from}`} className="font-semibold text-orange-600 hover:underline">
              লগইন করুন
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
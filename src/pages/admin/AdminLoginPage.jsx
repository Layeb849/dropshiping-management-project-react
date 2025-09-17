import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Mail, Lock, LogIn, Shield } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@letsdropship.com' && password === 'adminpass') {
      login({ email });
      toast({
        title: "🎉 অ্যাডমিন লগইন সফল হয়েছে!",
        description: "আপনাকে অ্যাডমিন ড্যাশবোর্ডে নিয়ে যাওয়া হচ্ছে।",
      });
      navigate(from, { replace: true });
    } else {
      toast({
        variant: "destructive",
        title: "❌ লগইন ব্যর্থ হয়েছে",
        description: "অনুগ্রহ করে সঠিক অ্যাডমিন ইমেইল এবং পাসওয়ার্ড দিন।",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>অ্যাডমিন লগইন - LetsDropship</title>
        <meta name="description" content="অ্যাডমিন প্যানেল অ্যাক্সেস করতে লগইন করুন।" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-block bg-primary text-white p-3 rounded-full mb-4">
                <Shield size={40} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">অ্যাডমিন প্যানেল</h1>
            <p className="text-gray-600">অ্যাক্সেস করতে লগইন করুন।</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="email" 
                placeholder="অ্যাডমিন ইমেইল" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="password" 
                placeholder="অ্যাডমিন পাসওয়ার্ড" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button 
              size="lg" 
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90"
              type="submit"
            >
              <LogIn className="w-5 h-5" />
              লগইন
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLoginPage;
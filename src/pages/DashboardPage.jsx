
import React from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, DollarSign, ShoppingCart, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const StatCard = ({ title, value, icon, change, changeType }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground flex items-center">
        {changeType === 'increase' ? <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" /> : <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />}
        {change} গত মাস থেকে
      </p>
    </CardContent>
  </Card>
);

const salesData = [
    { name: 'জান', sales: 120000 },
    { name: 'ফেব্রু', sales: 150000 },
    { name: 'মার্চ', sales: 175000 },
    { name: 'এপ্রিল', sales: 210000 },
    { name: 'মে', sales: 190000 },
    { name: 'জুন', sales: 230000 },
];

const DashboardPage = () => {
  const { user } = useAuth();
  const { name, subscription } = user;
  const { plan, validUntil } = subscription;

  return (
    <>
      <Helmet>
        <title>ড্যাশবোর্ড - LetsDropship</title>
        <meta name="description" content="আপনার LetsDropship ড্যাশবোর্ড পরিচালনা করুন।" />
      </Helmet>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">স্বাগতম, {name}!</h1>
                <p className="text-muted-foreground">আপনার ড্যাশবোর্ডে স্বাগতম। এখানে আপনার ব্যবসার একটি সংক্ষিপ্ত চিত্র দেখুন।</p>
            </div>
            <Button asChild>
                <NavLink to="/dashboard/my-products">নতুন পণ্য ইম্পোর্ট করুন</NavLink>
            </Button>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>সাবস্ক্রিপশন ওভারভিউ</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-primary/5 rounded-lg">
                <div>
                    <h3 className="text-xl font-bold text-primary">{plan}</h3>
                    <p className="text-muted-foreground">আপনার প্ল্যানটি {new Date(validUntil).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })} পর্যন্ত বৈধ।</p>
                </div>
                <Button asChild className="mt-4 sm:mt-0">
                    <NavLink to="/membership">প্ল্যান আপগ্রেড করুন</NavLink>
                </Button>
            </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="মোট রেভিনিউ"
            value="৳৪,৫০,০০০"
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
            change="+২০.১%"
            changeType="increase"
          />
          <StatCard
            title="মোট লাভ"
            value="৳১,২০,৫০০"
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
            change="+১৮.৩%"
            changeType="increase"
          />
          <StatCard
            title="মোট সেলস"
            value="+১২৫০"
            icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
            change="+১৯%"
            changeType="increase"
          />
          <StatCard
            title="ইম্পোর্ট করা পণ্য"
            value="২৩৫০"
            icon={<Package className="h-4 w-4 text-muted-foreground" />}
            change="-২%"
            changeType="decrease"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle>বিক্রয় সারসংক্ষেপ</CardTitle>
                    <CardDescription>গত ৬ মাসের বিক্রয় ডেটা দেখুন।</CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={salesData}>
                            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `৳${value/1000}k`}/>
                            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #ccc', borderRadius: '0.5rem' }}/>
                            <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>সাম্প্রতিক অর্ডার</CardTitle>
                    <CardDescription>আপনার সাম্প্রতিক ৫টি অর্ডার দেখুন।</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {[
                        { name: "আরিফ হোসেন", email: "arif@example.com", amount: "৳২,৫০০" },
                        { name: "সুমি আক্তার", email: "sumi@example.com", amount: "৳১,২০০" },
                        { name: "রাকিবুল ইসলাম", email: "rakib@example.com", amount: "৳৪,৮০০" },
                        { name: "ফারজানা চৌধুরী", email: "farzana@example.com", amount: "৳৮৫০" },
                        { name: "ইমরান খান", email: "imran@example.com", amount: "৳৩,২০০" },
                    ].map(order => (
                        <div key={order.email} className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center font-bold text-muted-foreground">{order.name.charAt(0)}</div>
                            <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">{order.name}</p>
                                <p className="text-sm text-muted-foreground">{order.email}</p>
                            </div>
                            <div className="ml-auto font-medium">{order.amount}</div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

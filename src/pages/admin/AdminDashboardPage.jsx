
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ShoppingCart, Truck, CheckCircle, RefreshCw } from 'lucide-react';
import { Bar, BarChart as ReBarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StatCard = ({ title, value, icon, description }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const salesData = [
    { name: 'জান', sales: 4000 }, { name: 'ফেব্রু', sales: 3000 }, { name: 'মার্চ', sales: 5000 },
    { name: 'এপ্রিল', sales: 4500 }, { name: 'মে', sales: 6000 }, { name: 'জুন', sales: 5500 },
    { name: 'জুলাই', sales: 7000 }, { name: 'আগস্ট', sales: 6500 }, { name: 'সেপ্ট', sales: 7500 },
    { name: 'অক্টো', sales: 8000 }, { name: 'নভে', sales: 9500 }, { name: 'ডিসে', sales: 11000 },
];

const recentOrders = [
  { id: "LD-1024", customer: "আরিফ হোসেন", total: "1200", status: "Processing" },
  { id: "LD-1023", customer: "সুমি আক্তার", total: "2500", status: "Shipped" },
  { id: "LD-1022", customer: "রাকিবুল ইসলাম", total: "850", status: "Delivered" },
  { id: "LD-1025", customer: "নাসরিন সুলতানা", total: "500", status: "Processing" },
  { id: "LD-1026", customer: "জাহিদ হাসান", total: "4500", status: "Shipped" },
];

const getStatusVariant = (status) => {
    switch (status) {
        case 'Shipped': return 'warning';
        case 'Delivered': return 'success';
        case 'Processing': return 'secondary';
        case 'Returned': return 'destructive';
        default: return 'default';
    }
};

const AdminDashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>অ্যাডমিন ড্যাশবোর্ড</title>
        <meta name="description" content="ওয়েবসাইটের সম্পূর্ণ ওভারভিউ এবং পরিসংখ্যান।" />
      </Helmet>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">অ্যাডমিন ড্যাশবোর্ড</h1>
                <p className="text-muted-foreground">আপনার ব্যবসার একটি সম্পূর্ণ চিত্র দেখুন।</p>
            </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <StatCard title="মোট ব্যবহারকারী" value="1,250" icon={<Users className="h-4 w-4 text-muted-foreground" />} description="+50 এই মাসে" />
          <StatCard title="মোট অর্ডার" value="5,430" icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />} description="+200 এই মাসে" />
          <StatCard title="শিপমেন্টে থাকা অর্ডার" value="150" icon={<Truck className="h-4 w-4 text-muted-foreground" />} description="+20 আজ শিপড হয়েছে" />
          <StatCard title="সফল ডেলিভারি" value="5,180" icon={<CheckCircle className="h-4 w-4 text-muted-foreground" />} description="98% সফলতার হার" />
          <StatCard title="রিটার্ন অর্ডার" value="100" icon={<RefreshCw className="h-4 w-4 text-muted-foreground" />} description="2% রিটার্ন হার" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle>মাসিক বিক্রয়</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <ReBarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="sales" name="বিক্রয় (৳)" fill="hsl(var(--primary))" />
                        </ReBarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>সাম্প্রতিক অর্ডার</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>গ্রাহক</TableHead>
                                <TableHead>স্ট্যাটাস</TableHead>
                                <TableHead className="text-right">মোট</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentOrders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell>
                                        <div className="font-medium">{order.customer}</div>
                                        <div className="text-sm text-muted-foreground">{order.id}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={getStatusVariant(order.status)}>{order.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">৳{order.total}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="mt-4 text-center">
                        <Button asChild variant="outline" size="sm">
                            <Link to="/admin/orders">সব অর্ডার দেখুন</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Search, Eye, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from '@/components/ui/use-toast';

const initialOrders = [
  { id: "LD-1024", customer: "আরিফ হোসেন", date: "জুলাই ২০, ২০২৪", total: "1200", status: "Processing" },
  { id: "LD-1023", customer: "সুমি আক্তার", date: "জুলাই ১৯, ২০২৪", total: "2500", status: "Shipped" },
  { id: "LD-1022", customer: "রাকিবুল ইসলাম", date: "জুলাই ১৮, ২০২৪", total: "850", status: "Delivered" },
  { id: "LD-1021", customer: "ফারজানা চৌধুরী", date: "জুলাই ১৭, ২০২৪", total: "3200", status: "Returned" },
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

const ManageOrdersPage = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
    toast({ title: "সফল", description: `অর্ডার #${orderId} এর স্ট্যাটাস আপডেট করা হয়েছে।` });
  };

  const showToast = () => {
    toast({
      title: "🚧 এই ফিচারটি এখনও চালু হয়নি!",
      description: "চিন্তা করবেন না! আপনি পরবর্তী প্রম্পটে এটি যোগ করার জন্য অনুরোধ করতে পারেন! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>অর্ডার ম্যানেজ করুন - অ্যাডমিন</title>
      </Helmet>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>অর্ডার ম্যানেজমেন্ট</CardTitle>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="অর্ডার খুঁজুন..." className="pl-8" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>অর্ডার আইডি</TableHead>
                <TableHead>গ্রাহক</TableHead>
                <TableHead>তারিখ</TableHead>
                <TableHead>মোট (৳)</TableHead>
                <TableHead>স্ট্যাটাস</TableHead>
                <TableHead className="text-right">অ্যাকশন</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell><Badge variant={getStatusVariant(order.status)}>{order.status}</Badge></TableCell>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="icon" onClick={showToast}><Eye className="h-4 w-4" /></Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon"><Truck className="h-4 w-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleStatusChange(order.id, 'Processing')}>Processing</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(order.id, 'Shipped')}>Shipped</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(order.id, 'Delivered')}>Delivered</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(order.id, 'Returned')}>Returned</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ManageOrdersPage;
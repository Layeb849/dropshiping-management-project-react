
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { NavLink } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const billingHistory = [
    { invoice: "INV-2024-003", date: "জুলাই ১, ২০২৪", amount: "৳৯৯৯", status: "Paid" },
    { invoice: "INV-2024-002", date: "জুন ১, ২০২৪", amount: "৳৯৯৯", status: "Paid" },
    { invoice: "INV-2024-001", date: "মে ১, ২০২৪", amount: "৳৯৯৯", status: "Paid" },
];

const BillingPage = () => {
    const { user } = useAuth();
    const { plan, validUntil } = user.subscription;

    return (
        <>
            <Helmet>
                <title>বিলিং ও সাবস্ক্রিপশন - LetsDropship</title>
            </Helmet>
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">বিলিং ও সাবস্ক্রিপশন</h1>
                    <p className="text-muted-foreground">আপনার সাবস্ক্রিপশন প্ল্যান এবং বিলিং তথ্য পরিচালনা করুন।</p>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>আপনার বর্তমান প্ল্যান</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border rounded-lg bg-primary/5">
                           <div>
                             <h3 className="text-xl font-bold text-primary">{plan}</h3>
                             <p className="text-muted-foreground">আপনার প্ল্যানটি {new Date(validUntil).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })} পর্যন্ত বৈধ।</p>
                           </div>
                           <Button asChild className="mt-4 sm:mt-0">
                                <NavLink to="/membership">প্ল্যান আপগ্রেড করুন</NavLink>
                           </Button>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>বিলিং ইতিহাস</CardTitle>
                        <CardDescription>আপনার পূর্ববর্তী লেনদেন দেখুন।</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <Table>
                           <TableHeader>
                               <TableRow>
                                   <TableHead>ইনভয়েস</TableHead>
                                   <TableHead>তারিখ</TableHead>
                                   <TableHead>পরিমাণ</TableHead>
                                   <TableHead>স্ট্যাটাস</TableHead>
                                   <TableHead className="text-right">অ্যাকশন</TableHead>
                               </TableRow>
                           </TableHeader>
                           <TableBody>
                               {billingHistory.map((item) => (
                                   <TableRow key={item.invoice}>
                                       <TableCell className="font-medium">{item.invoice}</TableCell>
                                       <TableCell>{item.date}</TableCell>
                                       <TableCell>{item.amount}</TableCell>
                                       <TableCell><Badge variant="success">{item.status}</Badge></TableCell>
                                       <TableCell className="text-right">
                                           <Button variant="outline" size="sm">ডাউনলোড</Button>
                                       </TableCell>
                                   </TableRow>
                               ))}
                           </TableBody>
                       </Table>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default BillingPage;

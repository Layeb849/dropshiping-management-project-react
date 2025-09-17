
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from '@/components/ui/use-toast';

const orders = [
    { orderId: "LD-1024", product: "Wireless Bluetooth Earbuds", status: "Shipped", trackingLink: "#" },
    { orderId: "LD-1023", product: "Men's Premium T-Shirt", status: "Delivered", trackingLink: "#" },
    { orderId: "LD-1022", product: "Smart Watch", status: "Processing", trackingLink: "#" },
    { orderId: "LD-1021", product: "Women's Summer Dress", status: "Delivered", trackingLink: "#" },
];

const getStatusVariant = (status) => {
    switch (status) {
        case 'Shipped': return 'warning';
        case 'Delivered': return 'success';
        case 'Processing': return 'secondary';
        default: return 'default';
    }
};

const OrderTrackingDashboardPage = () => {
    const { toast } = useToast();

    const handleTrackOrder = (orderId) => {
        toast({
            title: `অর্ডার ট্র্যাকিং`,
            description: `অর্ডার #${orderId} এর ট্র্যাকিং পেজ দেখানো হচ্ছে।`,
        });
    };

    return (
        <>
            <Helmet>
                <title>অর্ডার ট্র্যাকিং - LetsDropship</title>
            </Helmet>
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">অর্ডার ট্র্যাকিং প্যানেল</h1>
                    <p className="text-muted-foreground">আপনার সকল অর্ডারের বর্তমান অবস্থা দেখুন।</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>আপনার অর্ডারসমূহ</CardTitle>
                        <CardDescription>এখানে আপনার সাম্প্রতিক অর্ডারগুলো তালিকাভুক্ত করা হয়েছে।</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>অর্ডার আইডি</TableHead>
                                    <TableHead>পণ্য</TableHead>
                                    <TableHead>স্ট্যাটাস</TableHead>
                                    <TableHead className="text-right">ট্র্যাকিং</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow key={order.orderId}>
                                        <TableCell className="font-mono">{order.orderId}</TableCell>
                                        <TableCell className="font-medium">{order.product}</TableCell>
                                        <TableCell>
                                            <Badge variant={getStatusVariant(order.status)}>{order.status}</Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button 
                                                variant="outline" 
                                                size="sm" 
                                                onClick={() => handleTrackOrder(order.orderId)}
                                                disabled={order.status === 'Processing'}
                                            >
                                                ট্র্যাক করুন
                                            </Button>
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

export default OrderTrackingDashboardPage;

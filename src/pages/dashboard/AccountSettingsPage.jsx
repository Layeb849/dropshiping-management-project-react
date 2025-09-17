
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AccountSettingsPage = () => {
    const { user } = useAuth();
    const { toast } = useToast();

    const handleSubmit = (e, message) => {
        e.preventDefault();
        toast({
            title: "সফল!",
            description: message,
        });
    };

    const handleConnectStore = (e) => {
        e.preventDefault();
        toast({
            title: "স্টোর সংযুক্ত!",
            description: "আপনার Shopify API কী সফলভাবে সেভ করা হয়েছে।",
        });
    };

    return (
        <>
            <Helmet>
                <title>অ্যাকাউন্ট সেটিংস - LetsDropship</title>
            </Helmet>
            <div className="space-y-6">
                 <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">অ্যাকাউন্ট সেটিংস</h1>
                    <p className="text-muted-foreground">আপনার প্রোফাইল, স্টোর এবং বিলিং তথ্য পরিচালনা করুন।</p>
                </div>
                <Tabs defaultValue="profile">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="profile">প্রোফাইল</TabsTrigger>
                        <TabsTrigger value="store">স্টোর কানেকশন</TabsTrigger>
                        <TabsTrigger value="billing">বিলিং</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile">
                        <Card>
                            <CardHeader>
                                <CardTitle>প্রোফাইল তথ্য</CardTitle>
                                <CardDescription>আপনার ব্যক্তিগত তথ্য এখানে পরিবর্তন করুন।</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                               <form onSubmit={(e) => handleSubmit(e, "আপনার প্রোফাইল তথ্য সেভ করা হয়েছে।")} className="space-y-4 max-w-lg">
                                    <div>
                                        <Label htmlFor="name">পুরো নাম</Label>
                                        <Input id="name" defaultValue={user?.name} />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">ইমেল অ্যাড্রেস</Label>
                                        <Input id="email" type="email" defaultValue={user?.email} disabled />
                                    </div>
                                    <Button type="submit">পরিবর্তন সেভ করুন</Button>
                               </form>
                               <form onSubmit={(e) => handleSubmit(e, "আপনার পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে।")} className="space-y-4 max-w-lg border-t pt-8 mt-8">
                                    <h3 className="text-lg font-medium">পাসওয়ার্ড পরিবর্তন করুন</h3>
                                    <div>
                                        <Label htmlFor="current_password">বর্তমান পাসওয়ার্ড</Label>
                                        <Input id="current_password" type="password" />
                                    </div>
                                    <div>
                                        <Label htmlFor="new_password">নতুন পাসওয়ার্ড</Label>
                                        <Input id="new_password" type="password" />
                                    </div>
                                     <div>
                                        <Label htmlFor="confirm_password">নতুন পাসওয়ার্ড নিশ্চিত করুন</Label>
                                        <Input id="confirm_password" type="password" />
                                    </div>
                                    <Button type="submit">পাসওয়ার্ড পরিবর্তন করুন</Button>
                               </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="store">
                        <Card>
                            <CardHeader>
                                <CardTitle>স্টোর কানেকশন</CardTitle>
                                <CardDescription>আপনার Shopify বা WooCommerce স্টোরের সাথে সংযোগ স্থাপন করুন।</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleConnectStore} className="space-y-4 max-w-lg">
                                    <div>
                                        <Label htmlFor="shopify_api_key">Shopify API কী</Label>
                                        <Input id="shopify_api_key" placeholder="আপনার Shopify API কী লিখুন" />
                                    </div>
                                    <Button type="submit">সংযুক্ত করুন</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="billing">
                        <Card>
                            <CardHeader>
                                <CardTitle>বিলিং ও পেমেন্ট</CardTitle>
                                <CardDescription>আপনার পেমেন্ট পদ্ধতি এবং বিলিং ইতিহাস দেখুন।</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center py-12 text-muted-foreground">
                                   আপনার কোনো বিলিং ইতিহাস নেই।
                               </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    );
};

export default AccountSettingsPage;

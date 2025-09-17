
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Copy, DollarSign, Users } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const referredUsers = [
    { name: "আরিফ হোসেন", signupDate: "জুলাই ২০, ২০২৪", earnedAmount: "৳৫০" },
    { name: "সুমি আক্তার", signupDate: "জুলাই ১৮, ২০২৪", earnedAmount: "৳৫০" },
    { name: "রাকিবুল ইসলাম", signupDate: "জুলাই ১৫, ২০২৪", earnedAmount: "৳৫০" },
];

const ReferralDashboardPage = () => {
    const { user } = useAuth();
    const { toast } = useToast();

    const copyReferralCode = () => {
        navigator.clipboard.writeText(user.referralCode);
        toast({
            title: "সফল!",
            description: "আপনার রেফারেল কোড কপি করা হয়েছে।",
        });
    };

    const withdrawBalance = () => {
        toast({
            title: "🚧 বৈশিষ্ট্যটি এখনো তৈরি হয়নি!",
            description: "চিন্তা করবেন না! আপনি পরবর্তী প্রম্পটে এই ফিচারটি যোগ করার জন্য অনুরোধ করতে পারেন! 🚀",
        });
    };

    return (
        <>
            <Helmet>
                <title>রেফারেল প্রোগ্রাম - LetsDropship</title>
            </Helmet>
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">রেফারেল প্রোগ্রাম</h1>
                    <p className="text-muted-foreground">আপনার বন্ধুদের রেফার করে আয় করুন।</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">মোট রেফারেল আয়</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">৳১৫০</div>
                            <p className="text-xs text-muted-foreground">আপনার মোট আয়</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">মোট রেফার করা ব্যবহারকারী</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">৩ জন</div>
                            <p className="text-xs text-muted-foreground">সফলভাবে সাইন আপ করেছেন</p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>আপনার রেফারেল কোড</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col sm:flex-row items-center gap-4">
                        <Input readOnly value={user.referralCode} className="text-lg font-mono" />
                        <Button onClick={copyReferralCode} className="w-full sm:w-auto">
                            <Copy className="mr-2 h-4 w-4" /> কোড কপি করুন
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <div>
                            <CardTitle>রেফার করা ব্যবহারকারীদের তালিকা</CardTitle>
                            <CardDescription>যারা আপনার কোড ব্যবহার করে সাইন আপ করেছেন।</CardDescription>
                        </div>
                        <Button onClick={withdrawBalance}>ব্যালেন্স উত্তোলন করুন</Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>নাম</TableHead>
                                    <TableHead>সাইন আপের তারিখ</TableHead>
                                    <TableHead className="text-right">অর্জিত পরিমাণ</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {referredUsers.map((refUser) => (
                                    <TableRow key={refUser.name}>
                                        <TableCell className="font-medium">{refUser.name}</TableCell>
                                        <TableCell>{refUser.signupDate}</TableCell>
                                        <TableCell className="text-right">{refUser.earnedAmount}</TableCell>
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

export default ReferralDashboardPage;

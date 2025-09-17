
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Store } from 'lucide-react';

const ConnectStorePage = () => {
    const { toast } = useToast();

    const handleConnectClick = () => {
        toast({
            title: "🚧 বৈশিষ্ট্যটি এখনো তৈরি হয়নি!",
            description: "চিন্তা করবেন না! আপনি পরবর্তী প্রম্পটে এই ফিচারটি যোগ করার জন্য অনুরোধ করতে পারেন! 🚀",
        });
    };
    
    return (
        <>
            <Helmet>
                <title>আমার স্টোর সংযুক্ত করুন - LetsDropship</title>
            </Helmet>
             <div className="space-y-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">আপনার স্টোর সংযুক্ত করুন</h1>
                    <p className="text-muted-foreground">আপনার ই-কমার্স প্ল্যাটফর্মের সাথে সংযোগ স্থাপন করে পণ্য সিঙ্ক করুন।</p>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>প্ল্যাটফর্ম নির্বাচন করুন</CardTitle>
                        <CardDescription>আমরা বর্তমানে এই প্ল্যাটফর্মগুলি সমর্থন করি।</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 border rounded-lg flex flex-col items-center justify-center text-center">
                            <Store className="h-12 w-12 mb-4 text-primary" />
                            <h3 className="text-lg font-semibold mb-2">Shopify</h3>
                            <p className="text-sm text-muted-foreground mb-4">আপনার শপিফাই স্টোরের সাথে স্বয়ংক্রিয়ভাবে পণ্য সিঙ্ক করুন।</p>
                            <Button onClick={handleConnectClick}>সংযুক্ত করুন</Button>
                        </div>
                        <div className="p-6 border rounded-lg flex flex-col items-center justify-center text-center opacity-50">
                            <Store className="h-12 w-12 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">WooCommerce</h3>
                            <p className="text-sm text-muted-foreground mb-4">শীঘ্রই আসছে...</p>
                            <Button disabled>সংযুক্ত করুন</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default ConnectStorePage;

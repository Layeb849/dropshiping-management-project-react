import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PackageSearch } from 'lucide-react';
import { fetchTrackingEventsByTrackingNumber } from '@/lib/api';

const TrackOrderPage = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);
    const [error, setError] = useState('');

    const handleTrackOrder = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setEvents([]);
        try {
            const data = await fetchTrackingEventsByTrackingNumber(trackingNumber);
            const items = Array.isArray(data?.results) ? data.results : data;
            setEvents(items || []);
            if (!items || items.length === 0) {
                setError('কোনো ট্র্যাকিং তথ্য পাওয়া যায়নি।');
            }
        } catch (err) {
            setError('ডেটা আনতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>অর্ডার ট্র্যাক করুন - LetsDropship</title>
                <meta name="description" content="আপনার অর্ডারের বর্তমান অবস্থা জানতে অর্ডার আইডি দিয়ে ট্র্যাক করুন।" />
            </Helmet>
            <div className="bg-slate-50 min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
                <div className="max-w-md w-full mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-xl shadow-lg p-8 text-center"
                    >
                        <PackageSearch className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                        <h1 className="text-3xl font-bold text-gray-800">আপনার অর্ডার ট্র্যাক করুন</h1>
                        <p className="mt-2 text-gray-600 mb-6">আপনার অর্ডার আইডি এবং ইমেইল দিয়ে সর্বশেষ আপডেট জানুন।</p>
                        
                        <form onSubmit={handleTrackOrder} className="space-y-4">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="ট্র্যাকিং নম্বর লিখুন" 
                                    value={trackingNumber}
                                    onChange={(e) => setTrackingNumber(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="আপনার বিলিং ইমেইল" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full" disabled={loading}>
                                {loading ? 'লোড হচ্ছে...' : 'ট্র্যাক করুন'}
                            </Button>
                        </form>
                        {error && (
                            <p className="text-red-600 mt-4">{error}</p>
                        )}
                        {events.length > 0 && (
                            <div className="mt-6 text-left">
                                <h2 className="text-xl font-semibold mb-3">সর্বশেষ আপডেট</h2>
                                <ul className="space-y-3">
                                    {events.map((ev) => (
                                        <li key={`${ev.id || ev.event_time}-${ev.event_code}`} className="p-4 border rounded-lg">
                                            <div className="text-sm text-gray-500">{new Date(ev.event_time).toLocaleString()}</div>
                                            <div className="font-medium">{ev.event_code}</div>
                                            {ev.location ? <div className="text-sm">স্থান: {ev.location}</div> : null}
                                            {ev.description ? <div className="text-sm text-gray-700">{ev.description}</div> : null}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default TrackOrderPage;
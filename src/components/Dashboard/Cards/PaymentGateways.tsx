import React, { useState, useCallback } from 'react';
import { CreditCard, Wallet } from 'lucide-react';
import RefreshButton from '../../common/RefreshButton';

const PaymentGateways = () => {
  const [loading, setLoading] = useState(false);
  const [payments, setPayments] = useState([
    {
      name: 'Paypal',
      icon: Wallet,
      amount: '$235',
      color: 'text-pink-500 bg-pink-100',
    },
    {
      name: 'Wallet',
      icon: Wallet,
      amount: '$235',
      color: 'text-orange-500 bg-orange-100',
    },
    {
      name: 'Credit Card',
      icon: CreditCard,
      amount: '$235',
      color: 'text-blue-500 bg-blue-100',
    },
  ]);

  const handleRefresh = useCallback(async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPayments(payments.map(payment => ({
        ...payment,
        amount: `$${Math.floor(Math.random() * 500)}`,
      })));
    } finally {
      setLoading(false);
    }
  }, [payments]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Payment Gateways</h2>
        <RefreshButton onRefresh={handleRefresh} loading={loading} />
      </div>
      <div className="space-y-4">
        {payments.map((payment, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${payment.color}`}>
                <payment.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">{payment.name}</p>
                <p className="text-sm text-gray-500">50 payments</p>
              </div>
            </div>
            <span className="font-semibold">{payment.amount}</span>
          </div>
        ))}
        <button className="w-full text-center text-blue-600 hover:text-blue-700 text-sm py-2">
          View all transactions
        </button>
      </div>
    </div>
  );
};

export default PaymentGateways;
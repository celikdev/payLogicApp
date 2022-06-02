import React from 'react';
import {Home, Pay, Receipt} from './screens';
import {HomeIcon, QRScanIcon, ReceiptIcon} from '../assets/Icons';

export const screenData = [
  {
    name: 'Home',
    component: Home,
    icon: HomeIcon,
    tabName: 'Anasayfa',
  },
  {
    name: 'Pay',
    component: Pay,
    icon: QRScanIcon,
    tabName: 'Öde',
  },
  {
    name: 'Receipt',
    component: Receipt,
    icon: ReceiptIcon,
    tabName: 'Makbuz',
  },
];

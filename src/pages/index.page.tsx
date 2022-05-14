import Head from 'next/head';

import Header from '@/components/Header';

import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>React Assessment</title>
      </Head>
      <Header
        name="Aleesha Campbel"
        active="Agent Onlie"
        image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        fingerprint="https://e7.pngegg.com/pngimages/196/813/png-clipart-fingerprint-logo-others-miscellaneous-text.png"
      />
      <Dashboard />
    </>
  );
}

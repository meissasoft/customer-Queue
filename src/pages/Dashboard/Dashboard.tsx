import React from 'react';

import MyActivity from '@/components/MyActivity';
import TabBar from '@/components/TabBar';

export default function Dashboard() {
  return (
    <div className="row">
      <div className="col-md-4">
        <MyActivity approved={'14'} rejected={'10'} issue={'4'} totalCalls={'28'} />
      </div>
      <div className="col-md-8">
        <TabBar />
      </div>
    </div>
  );
}

"use client"

import React, { useState } from 'react'
import Notification from './notification/page'
import Sidebar from "@/components/Sidebar/Sidebar"
import Password from "./password/page"
const settings = () => {
  const [activeTab, setActiveTab] = useState<string>('/dashboard');

  const renderContent = () => {
    switch (activeTab) {

      case '/dashboard/notification':
        return <Notification />;
      case '/dashboard/password':
        return <Password />;

    }
  };

  return (
    <>
      <div className="min-h-screen flex">
        <div className="w-1/4 p-4">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="w-3/4 p-4">
          {renderContent()}
        </div>
      </div>

    </>
  )
}

export default settings
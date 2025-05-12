import MainContentWrapper from '@/src/components/dashboard/wrapper/MainContentWrapper ';
import SidebarWrapper from '@/src/components/dashboard/wrapper/SidebarWrapper ';
import { adMenuItems } from '@/src/components/router/adminMenuItems';
import LoginAdminRep from '@/src/components/shears/logInProvider/LoginAdminRep';
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <LoginAdminRep>
        <section className="flex relative h-screen overflow-hidden">
          <SidebarWrapper menuItems={adMenuItems} />
          <MainContentWrapper>{children}</MainContentWrapper>
        </section>
      </LoginAdminRep>
    );
  };
  
  export default DashboardLayout;

import { useDashboardSidebar } from '../context/DashboardSidebarContext';

function ContactUs() {
  const { selectedSidebarItem } = useDashboardSidebar();

  return (
    <div>
      {selectedSidebarItem === 'Contact Us' && (
        <div>
          <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
          <p>Contact our support team.</p>
        </div>
      )}
    </div>
  );
}

export default ContactUs;

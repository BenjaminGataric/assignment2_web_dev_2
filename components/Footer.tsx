/**
 * File: components/Footer.tsx
 * Author: Noah Urbano
 * Date: October 27, 2026
 * This component displays the school's contact information.
 * It receives no props and performs no calculations.
 * The content includes the school's name, address, phone and email.
 * It appears below the portal through the root layout.
 */

// School contact information
const Footer = () => {
  return (
    <footer className="mt-auto bg-white border-t border-slate-200 px-6 py-7 text-slate-600">
      <div className="mx-auto max-w-5xl space-y-1 text-sm">
        <p className="font-semibold text-slate-900">New Generation High School</p>
        <p>123 Learning Avenue, Calgary, AB</p>
        <p>Phone: (403) 555-0100</p>
        <p>Email: info@newgeneration.example</p>
      </div>
    </footer>
  );
};

export default Footer;

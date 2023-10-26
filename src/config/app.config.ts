interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View employee information',
    'View vacation information',
    'View payroll information',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage employee information',
    'Manage payroll',
    'Manage vacation requests',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/aa702538-8cb7-443f-991f-4c18dede0a12',
};

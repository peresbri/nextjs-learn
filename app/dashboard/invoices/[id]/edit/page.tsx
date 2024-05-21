import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/edit-form';

export default async function Page({ params }: { params: { id: string } }) {
  const invoiceId = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(invoiceId),
    fetchCustomers(),
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoices',
            href: `/dashboard/invoices/${invoiceId}/invoices`,
            active: true,
          },
        ]}
      />
      <Form customers={customers} invoice={invoice} />
    </main>
  );
}

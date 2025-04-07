// export async function getProducts({
//   page,
//   pageSize = '20',
// }: {
//   page: string;
//   pageSize?: string;
// }) {
//   const res = await fetch(
//     `${process.env.BASE_API_URL}/api/v1/products?page=${page}&pageSize=${pageSize}`,
//     {
//       next: { tags: ['getProducts', 'changePage'] },
//     }
//   );

//   // const res = await fetch('http://localhost:8080/api/v1/products')
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

export async function getProducts() {
//   {
//   page,
//   pageSize = '20',
// }: {
//   page: string;
//   pageSize?: string;
// }
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/product/list`, {
    next: { tags: ['getProducts', 'changePage'] },
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error('Data Fetching failed:', errorData);
    throw new Error(errorData.message);
  }

  return await res.json();
}

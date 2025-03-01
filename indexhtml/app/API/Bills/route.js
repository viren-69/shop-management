// app/api/bills/route.js
import connection from '../../../app/database/db'; // Adjust the path as necessary

export async function POST(req) {
  const { customerName, customerPhone, items, subtotal, gst, total, date } = await req.json();

  const query = 'INSERT INTO bills (customerName, customerPhone, items, subtotal, gst, total, date) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  return new Promise((resolve, reject) => {
    connection.query(query, [customerName, customerPhone, JSON.stringify(items), subtotal, gst, total, date], (err, results) => {
      if (err) {
        console.error('Error creating bill:', err);
        return resolve(new Response('Failed to create bill', { status: 500 }));
      }
      resolve(new Response(JSON.stringify({ id: results.insertId }), { status: 201 }));
    });
  });
}

export async function GET() {
  const query = 'SELECT * FROM bills';
  
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error retrieving bills:', err);
        return resolve(new Response('Failed to retrieve bills', { status: 500 }));
      }
      resolve(new Response(JSON.stringify(results), { status: 200 }));
    });
  });
}
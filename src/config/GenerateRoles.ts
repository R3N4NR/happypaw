import { Pool } from "pg";
import { router } from "../routes";
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'happypaw',
    password: '1234',
    port: 5432, // Change the port if necessary
  });

  router.get('/insert-data', async (req, res) => {
    try {
      // Replace 'your_table' and column names with your actual table and column names
      const query = 'INSERT INTO Role (title) VALUES (ADMIN, VET, BASIC) RETURNING *';
      
      // Replace 'value1', 'value2', 'value3' with your actual data
      const values = ['ADMIN', 'VET', 'BASIC'];
  
      const result = await pool.query(query, values);
  
      res.json({ success: true, data: result.rows[0] });
    }
    catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
}
  )
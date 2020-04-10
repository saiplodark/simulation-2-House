ALTER TABLE houses
 ADD COLUMN image TEXT, 
 ADD COLUMN monthly_mortgage_amount DECIMAL, 
 ADD COLUMN desired_rent DECIMAL;


SELECT * FROM houses;
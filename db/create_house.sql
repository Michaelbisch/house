insert into houses
(name, address, city, st, zipcode)
values ($1, $2, $3, $4, $5);

select *
from houses
order by house_id asc;
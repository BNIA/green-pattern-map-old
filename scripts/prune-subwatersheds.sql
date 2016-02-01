-- Delete any entry thats not a baltimore watershed
delete  
from boundaries.subwatersheds 
where mde8digt NOT in ('02130903','02130901','02130904','02130905','02130906')

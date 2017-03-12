select * from Location;

delete from Location where Id >3;
ALTER TABLE Location  AUTO_INCREMENT = 1;

CALL CreateWorkshop(1,'2012.01.01 12:12:12','2012.01.01 12:12:12','2012.01.01 12:12:12','2012.01.01 12:12:12');

select * from Workshop;
select * from WorkshopDates;

SELECT  STR_TO_DATE('18-03-2017', '%d-%m-%Y');

delete from WorkshopDates where Id >= 1;
ALTER TABLE WorkshopDates AUTO_INCREMENT = 1;
delete from Workshop  where Id >= 1;
ALTER TABLE Workshop AUTO_INCREMENT = 1;

select SPLIT_STR('asd$ad','$',1);

DROP FUNCTION SPLIT_STR;
CREATE FUNCTION SPLIT_STR(
 input VARCHAR(255),
 delimit VARCHAR(12),
 pos INT
 )
   RETURNS VARCHAR(255)
   RETURN REPLACE(SUBSTRING(SUBSTRING_INDEX(input, delimit, pos),LENGTH(SUBSTRING_INDEX(input, delimit, pos -1)) + 1),delimit, '');
   
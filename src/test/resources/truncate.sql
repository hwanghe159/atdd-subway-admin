-- TRUNCATE TABLE STATION;
-- TRUNCATE TABLE LINE;
-- --TRUNCATE TABLE LINE_STATION;

DELETE
FROM LINE_STATION;
DELETE
FROM STATION;
DELETE
FROM LINE;
ALTER TABLE STATION
    ALTER COLUMN id RESTART WITH 1;
ALTER TABLE LINE
    ALTER COLUMN id RESTART WITH 1;
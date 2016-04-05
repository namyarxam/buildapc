DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS builds CASCADE;
DROP TABLE IF EXISTS processors CASCADE;
DROP TABLE IF EXISTS memory CASCADE;
DROP TABLE IF EXISTS hds CASCADE;
DROP TABLE IF EXISTS ssds CASCADE;
DROP TABLE IF EXISTS gpus CASCADE;
DROP TABLE IF EXISTS motherboards CASCADE;
DROP TABLE IF EXISTS coolers CASCADE;
DROP TABLE IF EXISTS psus CASCADE;
DROP TABLE IF EXISTS cases CASCADE;
DROP TABLE IF EXISTS monitors CASCADE;
DROP TABLE IF EXISTS headphones CASCADE;
DROP TABLE IF EXISTS keyboards CASCADE;
DROP TABLE IF EXISTS mice CASCADE;
DROP TABLE IF EXISTS speakers CASCADE;

-- PROCESSORS
INSERT INTO processors(name, img_url, store, price, description) VALUES ('Intel
Core i5-4590', 'http://i.imgur.com/ava6Dvn.jpg', 'Micro Center', '160', 'Same 
processor speed as the fastest iMac on the market. Very quick, good for casual/non gamers.').
INSERT INTO processors(name, img_url, store, price, description) VALUES ('Intel
Core i5-4690K', 'http://i.imgur.com/ava6Dvn.jpg', 'Micro Center', '225', 'Extremely fast 
processor that works great for nearly all high-end gaming needs.').
INSERT INTO processors(name, img_url, store, price, description) VALUES ('Intel
Core i7-4790K', 'http://i.imgur.com/zfQu7WC.jpg', 'Micro Center', '290', 'Overkill in terms of 
gaming. If you want to live-stream gaming with a dual-monitor setup, this is probably your best bet.').

-- MEMORY
INSERT INTO memory(name, img_url, store, price, description) VALUES ('HyperX Fury 8GB', 
'http://i.imgur.com/Bv4LITa.jpg', 'Amazon', '37', 'Standard memory for personal desktops. Plenty of room for background
applications. Enough memory to hold 150,995 average-sized Word documents.').
INSERT INTO memory(name, img_url, store, price, description) VALUES ('HyperX Fury 16GB', 
'http://i.imgur.com/Bv4LITa.jpg', 'Amazon', '60', 'Double the standard desktop memory size. If you don\'t know if you need this much 
memory, you probably don\'t.').

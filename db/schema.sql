DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS builds CASCADE;
DROP TABLE IF EXISTS processors CASCADE;
DROP TABLE IF EXISTS memory CASCADE;
DROP TABLE IF EXISTS hds CASCADE;
DROP TABLE IF EXISTS gpus CASCADE;
DROP TABLE IF EXISTS motherboards CASCADE;
DROP TABLE IF EXISTS psus CASCADE;
DROP TABLE IF EXISTS cases CASCADE;
DROP TABLE IF EXISTS monitors CASCADE;
DROP TABLE IF EXISTS headphones CASCADE;
DROP TABLE IF EXISTS keyboards CASCADE;
DROP TABLE IF EXISTS mice CASCADE;
DROP TABLE IF EXISTS speakers CASCADE;

CREATE TABLE processors (
  processor_id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  store TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  buy_link VARCHAR(255)
);

CREATE TABLE memory (
  memory_id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  store TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  buy_link VARCHAR(255)
);

CREATE TABLE hds (
  hd_id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  store TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  buy_link VARCHAR(255)
);

CREATE TABLE gpus (
  gpu_id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  store TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  buy_link VARCHAR(255)
);

CREATE TABLE motherboards (
  motherboard_id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  store TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  buy_link VARCHAR(255)
);

CREATE TABLE psus (
  psu_id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  store TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  buy_link VARCHAR(255)
);

CREATE TABLE cases (
  case_id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  store TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  buy_link VARCHAR(255)
);

CREATE TABLE monitors (
  monitor_id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  store TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  buy_link VARCHAR(255)
);

CREATE TABLE headphones (
  headphone_id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  store TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  buy_link VARCHAR(255)
);

CREATE TABLE keyboards (
  keyboard_id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  store TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  buy_link VARCHAR(255)
);

CREATE TABLE mice (
  mouse_id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  store TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  buy_link VARCHAR(255)
);

CREATE TABLE speakers (
  speaker_id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  store TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  buy_link VARCHAR(255)
);

CREATE TABLE builds (
  build_id SERIAL UNIQUE PRIMARY KEY,
  name VARCHAR(25) NOT NULL,
  cpu_id INT REFERENCES processors(processor_id) NOT NULL,
  memory_id INT REFERENCES memory(memory_id) NOT NULL,
  hd_id INT REFERENCES hds(hd_id) NOT NULL,
  ssd BOOLEAN NOT NULL,
  gpu_id INT REFERENCES gpus(gpu_id) NOT NULL,
  motherboard_id INT REFERENCES motherboards(motherboard_id) NOT NULL,
  psu_id INT REFERENCES psus(psu_id),
  case_id INT REFERENCES cases(case_id),
  optical_drive BOOLEAN NOT NULL, 
  monitor_id INT REFERENCES monitors(monitor_id),
  headphone_id INT REFERENCES headphones(headphone_id),
  keyboard_id INT REFERENCES keyboards(keyboard_id),
  mouse_id INT REFERENCES mice(mouse_id),
  speaker_id INT REFERENCES speakers(speaker_id)
);

CREATE TABLE users (
  user_id SERIAL UNIQUE PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password_digest TEXT NOT NULL,
  build_id INT REFERENCES builds(build_id)
);
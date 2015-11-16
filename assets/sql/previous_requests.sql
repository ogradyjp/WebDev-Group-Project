create table if not exists previous_request (
  id serial primary key,
  original text not null,
  encrypted text not null,
  timedate date not null,
  ip_address text not null
);
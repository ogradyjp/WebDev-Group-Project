create table if not exists blog (
	id serial primary key,
	title text not null,
	description text not null
);

insert into blog (title, description) values ('First Post', 'This is the first post on the blog');

insert into blog (title, description) values ('Second Post', 'This is the second post on the blog');
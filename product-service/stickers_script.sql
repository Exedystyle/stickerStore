drop table if exists products;
drop table if exists stocks;

create table products (
	id uuid primary key default uuid_generate_v4(),
	title text not null,
	description text,
	price int
);

create table stocks (
	product_id uuid,
	count int,
	foreign key ("product_id") references "products" ("id")
);

insert into products (title, description, price) values
('Base Sticker', 'Base White non transparent sticker', 100),
('Invisible Sticker', 'Base size sticker with black letters and transparent background', 120),
('Short Sticker', 'Small version of Base Sticker', 80),
('Black Sticker', 'Color inversioned Base Sticker', 140),
('Short Black Sticker', 'Small version of color inversioned Base Sticker', 130),
('Gray Sticker', 'Sticker with gray background', 140),
('Deep Gray Sticker', 'Sticker with deep gray background', 150),
('Light Gray Sticker', 'Sticker with light gray background', 150)

insert into stocks (product_id, count) values
('f70b3464-052a-46d9-809a-4fcf9f936a03', 25),
('ddf88d29-98ff-42e9-8b40-1ba22f5bde0e', 3),
('df0e0ce5-6c83-45fe-b476-69241dbeec30', 10),
('7992f4d4-fed5-4eae-9253-21feb2baf8a7', 2),
('99cbba3b-6bd2-4482-9829-a85d2447f90b', 8),
('4f7ba067-97a8-46cc-9389-c75f8282f695', 12),
('1914e1a7-53ef-40fd-bcc9-1478e7a378f7', 11),
('3ac67e6c-1649-4a0f-8b93-75a416ce7c74', 13)

create extension if not exists "uuid-ossp";

create table platos(
	id serial not null,
	nombre character varying(100) not null,
	color character varying(20) not null,
	precio numeric(10,2) not null,
	fecha date not null,
	inicio_actividad timestamp without time zone not null,
	oferta boolean not null,
	estado smallint not null,
	primary key(id)
);
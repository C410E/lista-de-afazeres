
create table lista_de_afazeres(
    id serial primary key,
    tarefa varchar(500) not null,
    tarefa_realizada default false, 
    data_tarefa timestamp default now  
)
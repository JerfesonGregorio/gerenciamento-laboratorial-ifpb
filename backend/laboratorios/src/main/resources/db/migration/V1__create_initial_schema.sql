CREATE TABLE usuario (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE laboratorio (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE reserva (
    id BIGSERIAL PRIMARY KEY,
    hora_inicio TIMESTAMP NOT NULL,
    hora_fim TIMESTAMP NOT NULL,
    assunto VARCHAR(255),
    recorrente BOOLEAN DEFAULT FALSE,
    status VARCHAR(50),
    dia_da_semana INTEGER,

    usuario_id BIGINT NOT NULL,
    laboratorio_id BIGINT NOT NULL,

    CONSTRAINT fk_reserva_usuario
        FOREIGN KEY (usuario_id) REFERENCES usuario(id),

    CONSTRAINT fk_reserva_laboratorio
        FOREIGN KEY (laboratorio_id) REFERENCES laboratorio(id)
);
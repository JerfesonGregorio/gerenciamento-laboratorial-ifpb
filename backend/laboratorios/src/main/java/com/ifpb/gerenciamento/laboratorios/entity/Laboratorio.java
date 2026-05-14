package com.ifpb.gerenciamento.laboratorios.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "")
public class Laboratorio {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private Long id;

    private String nome;

    private String email;

    private String senha;
}

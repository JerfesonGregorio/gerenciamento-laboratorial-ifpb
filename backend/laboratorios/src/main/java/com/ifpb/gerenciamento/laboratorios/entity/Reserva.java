package com.ifpb.gerenciamento.laboratorios.entity;

import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "reservas")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private Long id;

    @Column(nullable = false)
    private LocalTime horaInicio;

    @Column(nullable = false)
    private LocalTime horaFim;

    @Column
    private String assunto;

    @Column(nullable = false)
    private boolean recorrente;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private String diaDaSemana;

    public LocalTime getHoraInicio() {
        return horaInicio;
    }

    public LocalTime getHoraFim() {
        return horaFim;
    }

    public String getAssunto() {
        return assunto;
    }

    public String getDiaDaSemana() {
        return diaDaSemana;
    }

    public String getStatus() {
        return status;
    }

    public Boolean isRecorrente(){
        return recorrente;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", nullable = false)
    @JsonBackReference
    private Usuario usuario;

    public Usuario getUsuario() {
        return usuario;
    }

}

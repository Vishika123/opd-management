package com.opd.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Consultation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String bloodPressure;
    private String temperature;
    private String notes;
    private boolean completed;

    @OneToOne
    private Appointment appointment;
}
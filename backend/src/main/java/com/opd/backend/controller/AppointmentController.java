package com.opd.backend.controller;

import com.opd.backend.entity.Appointment;
import com.opd.backend.entity.Patient;
import com.opd.backend.repository.AppointmentRepository;
import com.opd.backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
@CrossOrigin
public class AppointmentController {

    @Autowired
    private AppointmentRepository repo;

    @Autowired
    private PatientRepository patientRepo;

    @PostMapping
    public Appointment book(@RequestBody Appointment a) {

        Long patientId = a.getPatient().getId();

        Patient patient = patientRepo.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        a.setPatient(patient);

        return repo.save(a);
    }

    @GetMapping
    public List<Appointment> getAll() {
        return repo.findAll();
    }
}
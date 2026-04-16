package com.opd.backend.controller;

import com.opd.backend.entity.Appointment;
import com.opd.backend.entity.Consultation;
import com.opd.backend.repository.AppointmentRepository;
import com.opd.backend.repository.ConsultationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consultations")
@CrossOrigin
public class ConsultationController {

    @Autowired
    private ConsultationRepository repo;

    @Autowired
    private AppointmentRepository appointmentRepo;

    // Save consultation
    @PostMapping
    public Consultation save(@RequestBody Consultation c) {

        Long appointmentId = c.getAppointment().getId();

        Appointment appointment = appointmentRepo.findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        c.setAppointment(appointment);
        c.setCompleted(true);

        return repo.save(c);
    }

    // Get consultations by patient
    @GetMapping("/patient/{patientId}")
    public List<Consultation> getByPatient(@PathVariable Long patientId) {
        return repo.findByAppointmentPatientId(patientId);
    }
}
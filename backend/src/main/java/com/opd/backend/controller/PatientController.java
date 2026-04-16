package com.opd.backend.controller;

import com.opd.backend.entity.Patient;
import com.opd.backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
@CrossOrigin
public class PatientController {

    @Autowired
    private PatientRepository repo;

    // Add patient
    @PostMapping
    public Patient addPatient(@RequestBody Patient p) {
        return repo.save(p);
    }

    // Get all patients
    @GetMapping
    public List<Patient> getAllPatients() {
        return repo.findAll();
    }

    // Search
   @GetMapping("/search")
public List<Patient> search(@RequestParam String keyword) {
    List<Patient> byName = repo.findByNameContaining(keyword);
    List<Patient> byPhone = repo.findByPhoneContaining(keyword);

    byName.addAll(byPhone);
    return byName;
}
}
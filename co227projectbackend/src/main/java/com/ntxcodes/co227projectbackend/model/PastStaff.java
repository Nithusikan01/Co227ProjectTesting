package com.ntxcodes.co227projectbackend.model;

import jakarta.persistence.*;

@Entity
public class PastStaff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id;
    private String name;
    private String period;
    private String roleOnEEUWebsite;

    @Lob
    @Column(length = 5242880)
    private byte[] image;
    //constructor
    public PastStaff() {
    }

    //Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public String getRoleOnEEUWebsite() {
        return roleOnEEUWebsite;
    }

    public void setRoleOnEEUWebsite(String roleOnEEUWebsite) {
        this.roleOnEEUWebsite = roleOnEEUWebsite;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}

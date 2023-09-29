package com.ntxcodes.co227projectbackend.model;

import jakarta.persistence.*;

@Entity
public class PresentStaff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String qualifications;
    private String department;
    private String mobilePhone;
    private String telePhone;
    private String roleInFaculty;
    private String roleOnEEUWebsite;

    @Lob
    @Column(length = 5242880)
    private byte[] image;


    //constructor
    public PresentStaff() {
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

    public String getQualifications() {
        return qualifications;
    }

    public void setQualifications(String qualifications) {
        this.qualifications = qualifications;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public String getTelePhone() {
        return telePhone;
    }

    public void setTelePhone(String telePhone) {
        this.telePhone = telePhone;
    }

    public String getRoleInFaculty() {
        return roleInFaculty;
    }

    public void setRoleInFaculty(String roleInFaculty) {
        this.roleInFaculty = roleInFaculty;
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

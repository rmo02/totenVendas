package com.example.valentoten;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class PagamentoPix extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pagamento_pix);

        getSupportActionBar().hide();
    }
}
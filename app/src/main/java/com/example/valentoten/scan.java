package com.example.valentoten;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class scan extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_scan);

        getSupportActionBar().hide();
    }
}
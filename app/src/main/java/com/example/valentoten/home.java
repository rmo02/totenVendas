package com.example.valentoten;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;


public class home extends AppCompatActivity {

    private AppCompatButton bt_entrar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        getSupportActionBar().hide();
        IniciarComponente();

        bt_entrar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(home.this, scan.class);
                startActivity(intent);
            }
        });

    }

    private void IniciarComponente(){
        bt_entrar = findViewById(R.id.btn_entrar);
    }

}
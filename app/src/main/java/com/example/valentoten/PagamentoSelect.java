package com.example.valentoten;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;

import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import java.util.HashMap;
import java.util.Map;

public class PagamentoSelect extends AppCompatActivity {

    private AppCompatButton btnCartaoDebito;
    String URL_POST = "https://qas.sgpi.valenlog.com.br/api/v1/auth-token";

    private RequestQueue queue;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pagamento_select);

        getSupportActionBar().hide();

        components();

        btnCartaoDebito.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                InsertSV();
            }
        });
    }

    private void components() {
        queue = Volley.newRequestQueue(this);
        btnCartaoDebito = findViewById(R.id.btnCartaoDebito);
    }

    private void InsertSV() {
        StringRequest stringRequest = new StringRequest(Request.Method.POST, URL_POST, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                Toast.makeText(getApplication(), response, Toast.LENGTH_LONG).show();
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(PagamentoSelect.this, error+"", Toast.LENGTH_LONG).show();
            }
        }){
            @Override
            protected Map<String, String> getParams() throws AuthFailureError {
                Map<String, String> params = new HashMap<String, String>();
                String login = "00000000001";
                String senha = "Valen@123";
                String scope = "toten_pdv, toten_pdv_patio_1";
                params.put("login", login);
                params.put("senha", senha);
                params.put("scope", scope);

                return params;
            }
        };

        RequestQueue requestQueue = Volley.newRequestQueue(this);
        requestQueue.add(stringRequest);
    }

}
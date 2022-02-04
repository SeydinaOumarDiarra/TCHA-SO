package com.tchaso.tchaso.GestionError;

import com.tchaso.tchaso.exception.ErrorCodes;

import java.util.ArrayList;
import java.util.List;

public class Error {

    private Integer httpCode;
    private ErrorCodes code;
    private String message;
    private List<String> errors = new ArrayList<>();

}

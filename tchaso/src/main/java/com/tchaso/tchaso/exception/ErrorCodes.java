package com.tchaso.tchaso.exception;

public enum ErrorCodes {

    ADMINISTRATEUR_NOT_FOUND(1000),
    ADMINISTRATEUR_NOT_VALID(1001),

    CLIENT_NOT_FOUND(2000),
    CLIENT_NOT_VALID(2001),

    COMPETENCE_NOT_FOUND(3000),
    COMPETENCE_NOT_VALID(3001),

    DEMANDE_NOT_FOUND(4000),
    DEMANDE_NOT_VALID(4001),

    SERVICE_NOT_FOUND(5000),
    SERVICE_NOT_VALID(5001),

    SPECIALITE_NOT_FOUND(6000),
    SPECIALITE_NOT_VALID(6001),

    TRAVAILLEUR_NOT_FOUND(7000),
    TRAVAILLEUR_NOT_VALID(7001),

    VILLE_NOT_FOUND(8000),
    VILLE_NOT_VALID(8001),

    ;

    private int code;

    ErrorCodes(int code){
        this.code = code;
    }

    public int getCode(){
        return code;
    }
}

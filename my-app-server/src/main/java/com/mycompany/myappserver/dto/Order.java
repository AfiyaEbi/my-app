package com.mycompany.myappserver.dto;

import lombok.Data;

@Data
public class Order {
    private int orderId;
    private String name;
    private int quantity;
}

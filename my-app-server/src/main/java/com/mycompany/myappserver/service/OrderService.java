package com.mycompany.myappserver.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mycompany.myappserver.dto.Order;
import com.mycompany.myappserver.repository.OrderRepository;

@Service
public class OrderService {

    private OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository){
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders(){

        List<Order> allOrders = orderRepository.getAllOrders();
        return allOrders;
    }

}

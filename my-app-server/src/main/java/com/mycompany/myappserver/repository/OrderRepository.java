package com.mycompany.myappserver.repository;

import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.mycompany.myappserver.dto.Order;

@Repository
public class OrderRepository {

    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public OrderRepository(NamedParameterJdbcTemplate namedParameterJdbcTemplate){
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    public List<Order> getAllOrders(){
        String GET_QUERY = "SELECT * FROM dbo.Orders";
        List<Order> orders = namedParameterJdbcTemplate.query(GET_QUERY, new BeanPropertyRowMapper<>(Order.class));
        return orders;
    }

}

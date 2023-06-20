package com.example.perfume01.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CartDTO {

    private int product_count, product_no;
    private String member_id;

}

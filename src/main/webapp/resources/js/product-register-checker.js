// 상품 등록 유효성 검사 스크립트

$(function(){

	var valid = {
		productNameValid:false,
		productBrandValid:false,
		productContentValid:false,
		productPriceValid:false,
		productStockValid:false,
		productDeliveryPriceValid:false,
		productSellCountValid: false,
		productJoinValid: false,
		tagNoValid: false,
		img1Valid: true,
		img2Valid: true,
		isAllValid:function() {
			return this.productNameValid && this.productBrandValid 
			&& this.productContentValid && this.productPriceValid 
			&& this.productStockValid && this.productDeliveryPriceValid 
			&& this.productSellCountValid && this.productJoinValid && this.tagNoValid
			&& this.img1Valid && this.img2Valid;
		}
	}
	
	// 상품명 검사
	$("[name=product_name]").blur(function() {
		var regex = /^[A-Za-z0-9가-힣-!@#$%^&*\s]{1,33}$/;
		var isValid = regex.test($(this).val());
		valid.productNameValid = isValid;
		$(this).removeClass("valid invalid").addClass(isValid ? "valid" : "invalid");
	})
	// 브랜드 검사
	$("[name=product_brand]").blur(function() {
		var regex = /^[A-Za-z0-9가-힣-!@#$%^&*\s]{1,10}$/;
		var isValid = regex.test($(this).val());
		valid.productBrandValid = isValid;
		$(this).removeClass("valid invalid").addClass(isValid ? "valid" : "invalid");
	})
	// 상품 설명 검사
	$("[name=product_content]").blur(function() {
		var isValid = $(this).val().length <= 1000 && $(this).val().length > 0;
		valid.productContentValid = isValid;
		$(this).removeClass("valid invalid").addClass(isValid ? "valid" : "invalid");
	})
	// 상품 가격 검사
	$("[name=product_price]").blur(function() {
		var isValid = $(this).val() >= 0 && $(this).val() <= 2100000000 && $(this).val().length > 0;
		valid.productPriceValid = isValid;
		$(this).removeClass("valid invalid").addClass(isValid ? "valid" : "invalid");
	})
	// 상품 재고 검사
	$("[name=product_stock]").blur(function() {
		var isValid = $(this).val() >= 0 && $(this).val() <= 2100000000 && $(this).val().length > 0;
		valid.productStockValid = isValid;
		$(this).removeClass("valid invalid").addClass(isValid ? "valid" : "invalid");
	})
	// 배송비 검사
	$("[name=product_delivery_price]").blur(function() {
		var isValid = $(this).val() >= 0 && $(this).val() <= 2100000000 && $(this).val().length > 0;
		valid.productDeliveryPriceValid = isValid;
		$(this).removeClass("valid invalid").addClass(isValid ? "valid" : "invalid");
	})
	// 판매수 검사
	$("[name=product_sellcount]").blur(function() {
		var isValid = $(this).val() >= 0 && $(this).val() <= 2100000000 && $(this).val().length > 0;
		valid.productSellCountValid = isValid;
		$(this).removeClass("valid invalid").addClass(isValid ? "valid" : "invalid");
	})
	// 출시일 검사
	$("[name=product_regdate]").blur(function() {
		var regex = /^(19[0-9]{2}|20[0-9]{2})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|02-(0[1-9]|[12][0-9]))$/;
		var isValid = regex.test($(this).val());
		valid.productJoinValid = isValid;
		$(this).removeClass("valid invalid").addClass(isValid ? "valid" : "invalid");
	})
	// 태그 검사
	$("[name=tag_no]").click(function() {
	    var isValid = $(this).val() > 0 && $(this).val() <= 8;
	    valid.tagNoValid = isValid;
	    $(this).removeClass("valid invalid").addClass(isValid ? "valid" : "invalid");
	    var hasInvalidChild = $(this).parent().parent().find(".invalid").length > 0;
	    $(this).parent().parent().removeClass("valid invalid").addClass(hasInvalidChild ? "invalid" : "valid");
	});
	// 대표이미지 크기 검사
	$("[name=img1]").change(function() {
	    var file = this.files[0];
	    var reader = new FileReader();
	    reader.onload = function(event) {
	        var fileSize = event.target.result.length;
	        var isValid = fileSize <= 10485760 && fileSize > 0;
	        valid.img1Valid = isValid;
	        $("[name=img1]").removeClass("valid invalid").addClass(isValid ? "valid" : "invalid");
	    };
	    reader.readAsBinaryString(file);
	});
	// 상세이미지 크기 검사
	$("[name=img2]").change(function() {
	    var file = this.files[0];
	    var reader = new FileReader();
	    reader.onload = function(event) {
	        var fileSize = event.target.result.length;
	        var isValid = fileSize <= 10485760 && fileSize > 0;
	        valid.img2Valid = isValid;
	        $("[name=img2]").removeClass("valid invalid").addClass(isValid ? "valid" : "invalid");
	    };
	    reader.readAsBinaryString(file);
	});
	
	// form 검사
	$(".register-form").submit(function(e) {
		alert('상품 등록 완료');
		// return valid.isAllValid();
	})
	
});

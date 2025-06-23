$(function(){
    document.querySelector("#id1").style.color ="red";
    // jQuery영역 내부에서는 되도록 jQuery 메서드/함수만 사용

    // jQuery방식의 요소 선택
    // $("선택자")
    // 선택한 jQuery의 메서드를 사용하여 값을 변경
    $("#id2").css("color","pink");
    $("#id2").html("내부 요소 변경"); //.html이 innerHTML이랑 같음

    // 태그선택자
    $("p").css("color","blue");
    
    // 클래스 선택자
    // jQuery객체 메서드의 반환값은 항상 this
    $(".item")
    .css({'backgroundColor':'lightgray',color:'red'})
    .click(function(){
        console.log('클릭됨');
    });
});
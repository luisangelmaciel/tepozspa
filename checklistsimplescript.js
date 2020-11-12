$(document).ready(function(){
    $("li").on("click", function(){
    $(this).toggleClass("checked");
 });
  
  $("#btnAddItem").click(function(){
      $("#NewItemName").show();
  });
  
      $("#NewItemName input:submit").click(function(){
    $("#NewItemName").hide();
  });
      
      
  $("#submitNewItem").click(function(){
   $("ol#list").append("<li>" + $("#NewItemName #item").val()+ "</li>");
  });
   
 });
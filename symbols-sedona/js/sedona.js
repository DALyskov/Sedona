var hotel_search_btn = document.querySelector(".hotel-search-btn");
var hotel_search_form = document.querySelector(".hotel-search-form");
var date_check_in = hotel_search_form.querySelector("#date-check-in");
var date_check_out = hotel_search_form.querySelector("#date-check-out");
var input_adult = hotel_search_form.querySelector("#adult");
var input_child = hotel_search_form.querySelector("#child");
var adult_plus_btn = hotel_search_form.querySelector(".adult-child-left .plus-btn");
var adult_minus_btn = hotel_search_form.querySelector(".adult-child-left .minus-btn");
var child_plus_btn = hotel_search_form.querySelector(".adult-child-right .plus-btn");
var child_minus_btn = hotel_search_form.querySelector(".adult-child-right .minus-btn");


hotel_search_btn.addEventListener("click", function(event_hotel_search_btn) {
  event_hotel_search_btn.preventDefault();
  hotel_search_form.classList.toggle("hotel-search-form-open");
  hotel_search_form.classList.remove("hotel-search-form-error");
  if (hotel_search_form.classList.contains("hotel-search-form-open")) {
    date_check_in.focus()
  };
});

hotel_search_form.addEventListener("submit", function(event_hotel_search_form_submit) {
  if (!date_check_in.value ||
    !date_check_out.value ||
    !input_adult.value ||
    !input_child.value) {
      event_hotel_search_form_submit.preventDefault();
      hotel_search_form.classList.remove("hotel-search-form-error");
      hotel_search_form.offsetWidth == hotel_search_form.offsetWidth;
      hotel_search_form.classList.add("hotel-search-form-error");
      console.log("Заполните форму");
  } else {
    console.log(date_check_in.value);
    console.log(date_check_out.value);
    console.log(input_adult.value);
    console.log(input_child.value);
    };
});

adult_plus_btn.addEventListener("click", function(event_adult_plus_btn) {
  input_adult.value = 1*input_adult.value + 1;
});

adult_minus_btn.addEventListener("click", function(event_adult_minus_btn) {
  input_adult.value = input_adult.value - 1;
  if (input_adult.value < 1) {
    input_adult.value = 1;
  }
});

child_plus_btn.addEventListener("click", function(event_child_plus_btn) {
  input_child.value = 1*input_child.value + 1;
});

child_minus_btn.addEventListener("click", function(event_child_minus_btn) {
  input_child.value = input_child.value - 1;
  if (input_child.value < 0) {
    input_child.value = 0;
  }
});

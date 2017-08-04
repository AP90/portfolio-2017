
$(".cross").hide();
$(".menu").hide();

$(".hamburger").click(function() {
    $(".menu").slideToggle("slow", function() {
        $(".hamburger").hide();
        $(".cross").show();
        $("header").css("padding", "0");
        $(".navbar").css("min-height", "0");
    });
});

$(".cross").click(function() {
    $(".menu").slideToggle("slow", function() {
        $(".cross").hide();
        $(".hamburger").show();
        $("header").css("padding", "6.8em 0");
    });
});
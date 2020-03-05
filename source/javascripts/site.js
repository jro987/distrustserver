window.onload = function () {
    var num = Math.floor(Math.random() * 3 + 1);
    if (num === 1) {
        $('#header-cont').addClass('plane-bg');
    } else if (num === 2) {
        $('#header-cont').addClass('swamp-bg');
    } else {
        $('#header-cont').addClass('scientist-bg');
    }
    $('#header-cont').addClass();
    $.ajax({
        url: "https://rust-servers.net/api/?object=servers&element=detail&key=rCYO3GfTjhXIVmaKTVYtWQCBhMLe2pTwIRH",
        type: "GET",
        success: function (result) {
            data = JSON.parse(result);
            console.log(result);
            $('#name').text(data.hostname);
            $('#status').text(data.is_online);
            $('#uptime').text(data.uptime + '% Uptime');
            $('#players').text(data.players + ' / ' + data.maxplayers + ' Players');
            $('#address').text('45.92.39.41:28025');
            if (data.is_online === '1') {
                $('#status').html('The Server is <span class="online">Online</span>');
            } else {
                $('#status').html('The Server is <span class="offline">Offline</span>');
            }
        },
        error: function (error) {
            console.log(error);
        }
    })
};
function openBurger() {
    var x = document.getElementById("mobile-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
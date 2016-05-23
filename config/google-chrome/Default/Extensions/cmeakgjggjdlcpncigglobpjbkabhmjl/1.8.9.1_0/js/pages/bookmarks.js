﻿$(function () {
    restore_options();
    $('.custom-buttons').on('click', 'span.custom-button a', function () {
        $(this).parent('span.custom-button').remove();
        save_options();
        return false;
    });

    $('#btAdd').click(function () {
        var btname = $('#txtName').val();
        if ($('.custom-button .name').filter(function () {
            return $(this).text() === btname;
        }).length)
            return false;

        var span = $('<span class="custom-button">');
        span.html('<span class="name">' + btname + '</span>');
        span.append('<a href="javascript:void(0)" title="remove">x</a>');
        span.attr('title', btname);
        span.data('id', (new Date().getTime()));
        $('div.custom-buttons .existing').append(span);
        save_options();
    });
})

function save_options() {
    var obj = {};
    $('.custom-button').each(function () {
        var btname = $(this).find('.name').text();
        var id = $(this).data('id');
        obj[id] = btname;
    });

    chrome.storage.sync.set({
        bookmarkscategories: obj
    }, function () {

    });
}

function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        bookmarkscategories: null
    }, function (items) {

        if (items.bookmarkscategories == null) {
            items.bookmarkscategories = {};
        }

        $.each(items.bookmarkscategories, function (btname, exp) {

            var span = $('<span class="custom-button">');
            span.html('<span class="name">' + exp + '</span>');
            span.append('<a href="javascript:void(0)" title="remove">x</a>');
            span.attr('title', exp);
            span.data('id', btname);
            $('div.custom-buttons .existing').append(span);
        });
    });
}
